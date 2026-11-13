import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

/** 触发元素需要支持的属性（当前仅用于 button） */
interface TooltipTriggerProps {
  ref?: React.Ref<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface HoverTooltipProps {
  /** 触发元素 */
  children: React.ReactElement<TooltipTriggerProps>;
  /** 浮层内容 */
  content: React.ReactNode;
  /** 浮层宽度（px） */
  width?: number;
}

interface TooltipPos {
  top: number;
  left: number;
  placement: 'top' | 'bottom';
}

/**
 * 纯展示用的悬浮提示。
 *
 * 通过 createPortal 渲染到 document.body，脱离父容器的 overflow 裁剪
 * （模块列表外层是 overflow-hidden，absolute 定位会被切掉）。
 * 浮层本身 pointer-events-none，不会挡住鼠标，也就不会出现
 * 「鼠标从按钮移到浮层上导致闪烁消失」的问题。
 */
export const HoverTooltip: React.FC<HoverTooltipProps> = ({
  children,
  content,
  width = 320,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState<TooltipPos | null>(null);
  const [pinned, setPinned] = useState(false);

  const show = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const gap = 8;

    // 预估浮层高度，底部空间不足时翻到上方
    const estimatedHeight = 260;
    const placement: 'top' | 'bottom' =
      vh - rect.bottom < estimatedHeight && rect.top > estimatedHeight ? 'top' : 'bottom';

    // 右对齐按钮右边缘，并夹在视口内
    const left = Math.max(8, Math.min(rect.right - width, vw - width - 8));
    const top = placement === 'bottom' ? rect.bottom + gap : rect.top - gap;

    setPos({ top, left, placement });
  }, [width]);

  const hide = useCallback(() => {
    if (!pinned) setPos(null);
  }, [pinned]);

  // 点击空白处关闭「点击固定」的浮层
  useEffect(() => {
    if (!pinned) return;
    const onDocClick = (e: MouseEvent) => {
      const el = triggerRef.current;
      if (el && !el.contains(e.target as Node)) {
        setPinned(false);
        setPos(null);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [pinned]);

  const trigger = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    onClick: (e: React.MouseEvent) => {
      // 点击用于「固定显示」（触屏没有 hover），不触发触发元素自身的 click
      e.stopPropagation();
      setPinned((p) => {
        const next = !p;
        if (next) show();
        else setPos(null);
        return next;
      });
    },
  });

  const panel =
    pos &&
    createPortal(
      <div
        role="tooltip"
        style={{
          top: pos.top,
          left: pos.left,
          width,
          transform: pos.placement === 'top' ? 'translateY(-100%)' : undefined,
        }}
        className="fixed z-[60] pointer-events-none rounded-xl bg-[#141926] border border-slate-700/80 shadow-2xl shadow-black/60 p-3 text-left"
      >
        {content}
      </div>,
      document.body
    );

  return (
    <>
      {trigger}
      {panel}
    </>
  );
};