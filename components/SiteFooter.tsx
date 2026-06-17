'use client';

import { useTheme } from '@/app/theme-context';

export default function SiteFooter() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer
      className="mt-16 pt-8"
      style={{
        borderTop: isLight
          ? '1px solid rgba(180, 150, 100, 0.12)'
          : '1px solid rgba(232, 168, 73, 0.08)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-2">
        <img
          src="/nuovisa-logo.svg"
          alt="江苏诺维萨科技有限公司"
          width={36}
          height={36}
          className="flex-shrink-0"
        />
        <p
          className="text-xs sm:text-sm font-medium tracking-wide text-center"
          style={{
            color: isLight ? 'rgba(44, 36, 24, 0.65)' : 'rgba(245, 240, 235, 0.55)',
          }}
        >
          江苏诺维萨科技有限公司
        </p>
      </div>
    </footer>
  );
}
