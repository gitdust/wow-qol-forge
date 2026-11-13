import React, { useId } from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * WoW QoL Forge 官方 Logo 组件 (方案 C: 模块装配立方)
 * 象征将每一个功能拆解为独立积木、随心勾选组装的现代极简工坊理念。
 */
export const Logo: React.FC<LogoProps> = ({
  className = 'w-6 h-6',
  size,
  width,
  height,
  ...props
}) => {
  const id = useId().replace(/:/g, '');
  const topGradId = `cubeTop-${id}`;
  const leftGradId = `cubeLeft-${id}`;
  const rightGradId = `cubeRight-${id}`;

  const finalWidth = size || width;
  const finalHeight = size || height;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={finalWidth}
      height={finalHeight}
      {...props}
    >
      <defs>
        <linearGradient id={topGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={leftGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id={rightGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>

      {/* Top Plate (Isometric) */}
      <polygon
        points="32,7 52,18 32,29 12,18"
        fill={`url(#${topGradId})`}
        stroke="#FFFBEB"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Bottom Left Plate */}
      <polygon
        points="10,23 29,33 29,54 10,43"
        fill={`url(#${leftGradId})`}
        stroke="#FDE68A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Bottom Right Plate */}
      <polygon
        points="35,33 54,23 54,43 35,54"
        fill={`url(#${rightGradId})`}
        stroke="#FBBF24"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Central Energy Spark (Creation Core) */}
      <path
        d="M32,25 Q32,32 38,32 Q32,32 32,39 Q32,32 26,32 Q32,32 32,25 Z"
        fill="#FFFFFF"
      />
      <circle cx="32" cy="32" r="2.2" fill="#FEF08A" />
    </svg>
  );
};
