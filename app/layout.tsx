import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: '曜合 · 数字工具箱',
  description: '曜合数字工具箱 — 文档转换、图片下载、免费音乐、在线阅读',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-obsidian text-obsidian-50 font-body antialiased tracking-[-0.01em]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
