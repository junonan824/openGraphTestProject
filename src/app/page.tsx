import { Metadata } from 'next'
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: 'SEO 최적화 블로그',
  description: '검색 엔진 최적화와 Open Graph 태그에 대해 알아보는 블로그',
  openGraph: {
    title: 'SEO 최적화 블로그',
    description: '검색 엔진 최적화와 Open Graph 태그에 대해 알아보는 블로그',
    url: 'https://open-graph-test-project.vercel.app',
    siteName: 'SEO 블로그',
    images: [
      {
        url: 'https://open-graph-test-project.vercel.app/images/og/default.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/images/logo.png"
          alt="블로그 로고"
          width={150}
          height={50}
          priority
        />
      </header>
      <main className={styles.main}>
        <h1>SEO 최적화 블로그에 오신 것을 환영합니다</h1>
        <div className={styles.posts}>
          {/* 블로그 포스트 목록 */}
        </div>
      </main>
    </div>
  );
}
