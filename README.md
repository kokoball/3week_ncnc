# 목표는 취업이조 2팀

<br>

## 🚀 정보

- [배포주소 바로가기](https://3week-ncnc-nrc5qsatr-wanted2.vercel.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img alt="SCSS" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>  `Next.js`

<br/>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/3week_ncnc.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn dev
$ yarn build
```

<br>

## 🔥 프로젝트 과정 소개

| 실시간 회의                                                                                                          | Issue 트래킹 및 PR 분배                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![실시간회의](https://user-images.githubusercontent.com/68528752/154127816-a61aec1d-4184-4489-8836-b1c217e4b4f2.png) | ![역할분배](https://user-images.githubusercontent.com/68528752/154128116-5849d3da-7a31-4fa7-b9bd-de9b313146b2.png) |

| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52)                                                | [반복 최소화](./styles/font.ts)                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ![정보공유](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png) | ![반복 최소화](https://user-images.githubusercontent.com/68528752/154165034-04acc4b2-c218-4474-96b4-57841b0d1772.png) |

<br>

### ✨ 구현 사항 목록 
-   `Typescript`와 `Next.js` 사용
-    니콘내콘 모바일 웹 페이지와 같은 라우팅
-    base, domain, hooks, pages, styles, types, utils 으로 프로젝트 구조를 나눠 재사용에 용이하게 개발

-   [x] 헤더

    -   [x] 햄버거 버튼을 이용한 홈 메뉴 이동, 홈이 아닐 경우 왼쪽 상단에 뒤로가기 버튼 or 오른쪽 상단에 X 버튼 

-   [x] 홈 /main

    -   [x] 홈 Swiper 라이브러리 없이 랜덤 이미지로 직접 구현
    -   [x] API를 이용한 브랜드 메뉴, 땡처리 리스트 출력 (API)

-   [x] 브랜드 페이지 /categories

    -   [x] categoryId를 이용한 메뉴바는 페이지 이동
    -   [x] 브랜드 클릭 시 상세 페이지로 이동
    -   [x] 땡처리콘, 까페 등 각 카테고리 페이지 생성

-   [x] 상품 리스트 /brands

    -   [x] API를 이용한 각 상품 리스트 출력
    -   [x] 브랜드, 이미지, 상품명, 할인율, 할인가, ~~정가~~

-   [x] 상품 상세 /items

    -   [x] 옵션 선택 버튼 클릭 시 옵션 선택하기 창 노출
    -   [x] 옵션 미선택 시 구매하기 버튼 비활성화

-   [x] 고객 센터 /contacts
    -   [x] 홈 화면의 헤더 좌측 상단 햄버거 메뉴 클릭 시 고객 센터 페이지로 이동하는 메뉴 노출
    -   [x] 왼쪽에서 오른쪽으로 화면을 100% 덮는 애니메이션
    -   [x] 구매 / 판매 탭 구현 및 QnA 리스트 dropdown 구현



<br>
<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── api
│   └── index.ts
├── components
│   ├── base
│   └── domain
├── fileMock.js
├── hooks
│   ├── index.ts
│   ├── useAxios.ts
│   ├── useClickedId.tsx
│   ├── useOption.ts
│   ├── useSwipe.tsx
│   ├── useTabs.tsx
│   └── useWindowWidth.tsx
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── 404
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── brands
│   ├── categories
│   ├── contacts
│   ├── index.tsx
│   └── items
├── pagesStyle
│   ├── brandsStyle.ts
│   ├── categoriesStyle.ts
│   ├── contactStyle.ts
│   ├── homeStyle.ts
│   └── itemStyle.ts
├── public
│   ├── android-chrome-144x144.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── fonts
│   ├── images
│   ├── mock
│   ├── mstile-150x150.png
│   └── site.webmanifest
├── styleMock.js
├── styles
│   ├── commonCompo.tsx
│   ├── commonStyle.ts
│   ├── font.ts
│   ├── globalStyle.ts
│   ├── index.ts
│   ├── styled.d.ts
│   └── theme.ts
├── tsconfig.jest.json
├── tsconfig.json
├── types
│   ├── Brand.ts
│   ├── Category.ts
│   ├── ConItem.ts
│   ├── Nested.ts
│   ├── QaType.ts
│   ├── Qas.ts
│   ├── SoonItem.ts
│   ├── Swipe.ts
│   └── index.ts
├── utils
│   └── fucntions
├── yarn-error.log
└── yarn.lock
```
