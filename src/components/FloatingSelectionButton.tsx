import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Drag {
  pointerId: number;
  start: Position;
  origin: Position;
  moved: boolean;
}

interface FloatingSelectionButtonProps {
  count: number;
  label: string;
  visible: boolean;
  onOpen: () => void;
}

function clampToViewport(position: Position, button: HTMLButtonElement): Position {
  const { clientWidth, clientHeight } = document.documentElement;

  return {
    x: Math.max(0, Math.min(position.x, clientWidth - button.offsetWidth)),
    y: Math.max(0, Math.min(position.y, clientHeight - button.offsetHeight)),
  };
}

function SelectionCount({ count }: { count: number }) {
  const [change, setChange] = useState({ from: count, to: count });

  if (change.to !== count) {
    setChange({ from: change.to, to: count });
  }

  return (
    <span
      key={count}
      aria-hidden="true"
      className="selection-count"
      data-direction={change.to > change.from ? 'up' : 'down'}
    >
      {change.from !== count && (
        <span className="selection-count-outgoing">{change.from}</span>
      )}
      <span className={change.from !== count ? 'selection-count-incoming' : undefined}>
        {count}
      </span>
    </span>
  );
}

export function FloatingSelectionButton({
  count,
  label,
  visible,
  onOpen,
}: FloatingSelectionButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drag = useRef<Drag | null>(null);
  const suppressClick = useRef(false);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    if (!visible) {
      drag.current = null;
      return;
    }

    const constrain = () => {
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      setPosition((current) => {
        const origin = current ?? rect;
        const next = clampToViewport(origin, button);
        return next.x === origin.x && next.y === origin.y ? current : next;
      });
    };

    constrain();
    window.addEventListener('resize', constrain);
    return () => window.removeEventListener('resize', constrain);
  }, [visible]);

  if (!visible) return null;

  return (
    <button
      type="button"
      ref={buttonRef}
      style={position ? { left: position.x, top: position.y } : undefined}
      className={`fixed z-40 grid size-11 select-none place-items-center rounded-full bg-amber-400 font-mono text-sm font-bold tabular-nums text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 active:cursor-grabbing cursor-grab focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
        position ? '' : 'bottom-6 right-6'
      }`}
      title={label}
      aria-label={label}
      onPointerDown={(event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        const { currentTarget, pointerId, clientX, clientY } = event;
        const { x, y } = currentTarget.getBoundingClientRect();
        suppressClick.current = false;
        drag.current = { pointerId, start: { x: clientX, y: clientY }, origin: { x, y }, moved: false };
        currentTarget.setPointerCapture(pointerId);
      }}
      onPointerMove={(event) => {
        const active = drag.current;
        if (!active || active.pointerId !== event.pointerId) return;
        const dx = event.clientX - active.start.x;
        const dy = event.clientY - active.start.y;
        if (!active.moved && Math.hypot(dx, dy) < 5) return;
        active.moved = true;
        suppressClick.current = true;
        setPosition(clampToViewport({ x: active.origin.x + dx, y: active.origin.y + dy }, event.currentTarget));
      }}
      onLostPointerCapture={(event) => {
        if (drag.current?.pointerId === event.pointerId) drag.current = null;
      }}
      onClick={(event) => {
        if (event.detail !== 0 && suppressClick.current) return;
        onOpen();
      }}
    >
      <SelectionCount count={count} />
    </button>
  );
}
