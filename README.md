# SEO 최적화 블로그 프로젝트

[![Deployed on Vercel](https://vercel.com/button)](https://open-graph-test-project.vercel.app)

Next.js를 활용한 SEO 최적화 블로그 프로젝트입니다. 이 프로젝트는 검색 엔진 최적화(SEO)와 소셜 미디어 공유를 위한 최적의 설정을 포함하고 있습니다.

## 주요 기능

- 📱 반응형 디자인
- 🔍 SEO 최적화
- 📊 Open Graph 태그 지원
- 🗺 자동 사이트맵 생성
- 🔒 보안 최적화
- 🌏 한국어 지원

## 시작하기

### 설치

```bash
# 프로젝트 클론
git clone [repository-url]

# 종속성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx        # 메인 페이지
│   └── layout.tsx      # 레이아웃 컴포넌트
├── components/         # 재사용 가능한 컴포넌트
├── styles/            # 스타일 파일
└── utils/             # 유틸리티 함수
```

## SEO 구현사항

- 메타데이터 자동 생성
- Open Graph 프로토콜 지원
- 동적 사이트맵 생성
- 이미지 최적화
- 페이지별 메타 태그 설정

## 기술 스택

- Next.js 14
- TypeScript
- CSS Modules
- next/font (Geist 폰트)

## 메타데이터 확인 방법

1. 개발자 도구(F12) 열기
2. Elements 탭에서 `<head>` 태그 확인
3. 소셜 미디어 공유 테스트:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 배포

이 프로젝트는 [Vercel Platform](https://vercel.com/new)을 통해 쉽게 배포할 수 있습니다.

자세한 배포 방법은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

## 추가 자료

- [Next.js 문서](https://nextjs.org/docs)
- [Next.js 학습 가이드](https://nextjs.org/learn)
- [Next.js GitHub 저장소](https://github.com/vercel/next.js)

## 라이선스

MIT License

## 기여하기

프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요. 모든 기여를 환영합니다!
