# 1학년 미술 수업실

중학교 1학년 미술 수업 웹 콘텐츠 모음입니다. 첫 화면에서 수업을 골라 들어갑니다.

- 사이트: https://hstremart.github.io/art-class/

## 구조

```
index.html          수업 목록(첫 화면)
lessons.js          수업 목록 데이터
lessons/<수업이름>/  수업 하나 = 폴더 하나 (index.html, images/)
```

## 새 수업 추가하기

1. `lessons/` 아래에 새 폴더를 만들고 `index.html`을 넣습니다.
2. `lessons.js`에 항목을 하나 추가합니다. (`ready: false`면 '준비 중'으로 표시)
3. 수업 페이지에서 목록으로 돌아가는 링크는 `../../` 입니다.

## 수업

| 폴더 | 수업 |
|---|---|
| `anderson-critique` | 앤더슨 비평 4단계로 김홍도 〈씨름〉 감상 (감상 1차시) |
| `elements-principles` | 미술의 언어 사전 — 조형 요소·원리 카드와 원리 탐정 퀴즈 (교과서 32~35쪽, 1차시) |
| `elements-lab` | 조형 실험실 — 사과 원리 미션, 비례·색·선 바꾸기, 대칭 그리기, 명화 속 원리 찾기 (교과서 34~37쪽, 2~3차시) |

작품 이미지는 Wikimedia Commons의 퍼블릭 도메인 이미지입니다.
