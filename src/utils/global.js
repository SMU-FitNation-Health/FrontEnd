//너비 1440고정 전역함수 

export const PAGE_WIDTH = 1440;

export function global(opts = {}) {
  const { center = true, className = '', style = {} } = opts;
  return {
    className: `${center ? 'mx-auto' : ''} ${className}`.trim(),
    style: { width: PAGE_WIDTH, ...style },
  };
}
