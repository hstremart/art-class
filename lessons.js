/*
  수업 목록
  ─────────────────────────────────────────────
  새 수업을 추가하려면:
   1) lessons/ 아래에 새 폴더를 만들고 그 안에 index.html(과 images/)을 넣는다.
   2) 아래 목록에 항목을 하나 추가한다.

  항목 설명
   id       : lessons/ 안의 폴더 이름
   title    : 수업 제목
   area     : 영역 — '감상' | '표현' | '체험' 중 하나 (필터 버튼에 쓰임)
   unit     : 단원/주제 (짧게)
   period   : 차시 표시 (예: '1차시', '2~3차시')
   summary  : 카드에 보일 한두 문장 설명
   thumb    : 썸네일 이미지 경로 (없으면 비워 두기)
   ready    : true면 공개, false면 '준비 중'으로 표시(클릭 안 됨)
*/
window.LESSONS = [
  {
    id: 'anderson-critique',
    title: '그림과 대화하는 네 걸음',
    area: '감상',
    unit: '앤더슨 비평 4단계',
    period: '1차시',
    summary: '반응 · 기술 · 해석 · 평가 순서로 김홍도 〈씨름〉을 감상하고 나만의 감상문을 써요.',
    thumb: 'lessons/anderson-critique/images/ssireum.jpg',
    ready: true
  },
  {
    id: 'elements-principles',
    title: '미술의 언어 사전',
    area: '표현',
    unit: '조형 요소와 원리',
    period: '1차시',
    summary: '명화 카드로 조형 요소 8가지와 조형 원리 10가지를 익히고, 원리 탐정 퀴즈로 확인해요.',
    thumb: 'lessons/elements-principles/images/variety.jpg',
    ready: true
  },
  {
    id: 'chaekgeori',
    title: '책가도 속 숨은 이야기',
    area: '감상',
    unit: '책가도',
    period: '1차시',
    summary: '책가도에 그려진 물건들의 상징을 찾아보고, 나를 나타내는 물건을 골라 봐요.',
    thumb: '',
    ready: false
  },
  {
    id: 'sansuhwa',
    title: '산수화 속으로 들어가기',
    area: '감상',
    unit: '산수화',
    period: '1차시',
    summary: '삼원법(고원 · 심원 · 평원)으로 산수화 속 시점을 따라 걸어 봐요.',
    thumb: '',
    ready: false
  },
  {
    id: 'music-color',
    title: '음악을 색으로 그리기',
    area: '표현',
    unit: '음악 + 미술 추상',
    period: '1차시',
    summary: '색의 느낌과 연상을 익히고, 음악을 듣고 떠오르는 색과 선으로 추상화를 그려요.',
    thumb: '',
    ready: false
  }
];
