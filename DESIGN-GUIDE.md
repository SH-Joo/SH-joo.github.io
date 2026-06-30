# 디자인 시안 편집 가이드 (`design-draft.html`)

이 문서는 흑백 신문형 시안([design-draft.html](design-draft.html))의 **콘텐츠를 직접 추가·수정**하는 방법을 정리합니다.
모든 콘텐츠는 한 파일(`design-draft.html`) 안에 들어 있으며, 아래 스니펫을 복사해 해당 위치에 붙여넣으면 됩니다.

> 빌드/설치 불필요 — 파일을 브라우저로 열면 바로 반영됩니다. (확정 후 React 앱으로 이식 예정)

---

## 0. 공통 규칙

| 항목 | 값 |
|---|---|
| 강조색(네이비) | `#1f3a5f` (CSS 변수 `--accent`) |
| 종이색 / 잉크 | `#f7f4ed` / `#1b1b1b` |
| 이미지 경로 | `src/images/…` (로고·프로필) 또는 `public/blog/…` (그림) |
| 페이지 구성 | 1면 Front · 2면 Profile(+Publications) · 3면~ Projects |
| 칩 색 | 일반 = 네이비(`chip`), 수상/Best = 검정(`chip hl`) |

- 모든 이미지는 자동으로 **흑백 처리**됩니다(`filter:grayscale`).
- 본인 이름은 저자 표기에서 `<b>Siheon Joo</b>`로 감싸면 **볼드** 처리됩니다.
- 각 페이지는 **화면 높이에 꽉 차게** 설계되어 있습니다. 항목을 너무 많이 넣어 한 화면을 넘기면, 해당 열이 내부 스크롤되거나(왼쪽 열·뉴스) 가로 스크롤됩니다(논문). 자세히는 각 절 참고.

---

## 1. News (1면) — 짧은 기사 추가

위치: `<div class="col-news">` 안. 항목 순서 = **킥커 → 제목 → 이미지 → 본문**. 이미지는 기사마다 위치를 바꿉니다.

**이미지 왼쪽(기본):**
```html
<div class="news">
  <div class="news-kicker">2026 · 학회</div>
  <div class="news-head">기사 제목</div>
  <img class="news-img" src="public/blog/날짜/사진.png" alt="" />
  <div class="news-text">본문 한두 문장.</div>
</div>
```

- **이미지 오른쪽**: `<div class="news right">`
- **가로로 긴 사진(열 전체 폭)**: `<div class="news wide">`
- **이미지 없음**: `<img>` 줄을 빼면 됩니다.

> 뉴스는 2단으로 흐릅니다. 많아지면 News 칸이 세로 스크롤됩니다. 학회·수상·개인 소식(결혼 등) 무엇이든 짧은 기사로 추가하세요.

---

## 2. Publications (2면 우측) — 논문 추가

위치: `<div class="publist" id="publist">` 안. 한 논문 = `.pub` 블록 하나.

```html
<div class="pub" data-type="journal" data-year="2025" data-idx="11">
  <div class="pub-no">01</div>
  <div>
    <div class="pub-title">논문 제목</div>
    <div class="pub-authors"><b>Siheon Joo</b>, 공저자들</div>
    <div class="pub-meta">2025 · 저널/학회명 · 비고 · <span class="pub-cite">Cited <b>0</b></span></div>
    <div class="pub-links">
      <span class="chip">SOTA</span>
      <a class="lnk" href="DOI_또는_링크" target="_blank">Paper</a>
    </div>
  </div>
</div>
```

규칙:
- `data-type` = `journal` | `conference` | `preprint` (필터 버튼이 이 값으로 분류)
- `data-year` = 정렬용 연도, `data-idx` = 고유 번호(아무 숫자나, 중복만 피하면 됨)
- `pub-no`는 **자동 번호 매김**되므로 값은 신경 안 써도 됩니다.
- 수상 논문: `<span class="chip hl">Best Paper</span>` / 프로젝트 페이지가 있으면 `<a class="lnk" onclick="navTo('projects')">Project</a>`
- 추가 후 상단 **필터 버튼의 개수**(`All · 10` 등)를 직접 갱신하세요.
- 인용수(`Cited 0`)는 추후 OpenAlex 자동 동기화 예정. 지금은 수동.

> 논문이 늘면 우측 영역에서 **가로 스크롤**(단이 오른쪽으로 추가)됩니다.

---

## 3. Projects (3면) — 프로젝트 추가

프로젝트는 ① 왼쪽 목록(`.proj-item`)과 ② 오른쪽 기사(`.proj-doc`) **두 곳**에 추가하며, `id`로 연결됩니다.

**① 왼쪽 목록 항목** (`<div class="proj-list">` 안):
```html
<div class="proj-item" onclick="selectProject('myid', this)">
  <div class="pi-kicker">2025 · 저널/학회</div>
  <div class="pi-head">프로젝트 이름</div>
  <div class="pi-dek">한 줄 소개.</div>
</div>
```

**② 오른쪽 기사** (`<div class="proj-article">` 안). `id="proj-myid"`가 위 `selectProject('myid')`와 일치해야 함:
```html
<div class="proj-doc" id="proj-myid" style="display:none">
  <div class="proj-kicker">Project · 분야 · 저널</div>
  <h1 class="proj-headline">기사 헤드라인</h1>
  <p class="proj-stand">한 문장 요약(이탤릭).</p>
  <div class="proj-byline">By <b>Siheon Joo</b>, 공저자 · 저널 · 연도</div>
  <div class="proj-toprule">
    <span class="chip">칩</span>
    <a class="lnk" href="링크" target="_blank">Paper</a>
  </div>
  <figure class="proj-hero"><img src="그림" alt="" /><figcaption>캡션</figcaption></figure>
  <div class="proj-body">
    <p class="proj-lead">드롭캡이 들어가는 첫 문단.</p>
    <h2>소제목</h2>
    <p>본문…</p>
    <figure class="fig"><img src="그림" alt="" /><figcaption>캡션</figcaption></figure>
    <blockquote class="pull">"인용/풀쿼트"</blockquote>
    <!-- 결과 표가 필요하면 -->
    <table class="restable">
      <tr><th>Model</th><th>IoU</th></tr>
      <tr><td><b>Ours</b></td><td><b>0.66</b></td></tr>
    </table>
  </div>
</div>
```
- 기사 안에 **사이드 팩트박스**를 넣으려면 `proj-body` 맨 앞에 `<aside class="factbox">…</aside>` (FACS-Net 예시 참고).
- 새 기사는 `style="display:none"`로 두고, 기본으로 보일 것만 표시(목록 항목에 `class="proj-item on"`).

---

## 4. Honors & Awards (2면 좌측)

위치: `<div class="stacklist">` 안.
```html
<div class="brief">
  <div class="brief-kicker">Honor · 2026</div>
  <div class="brief-headline">수상명</div>
  <div class="brief-sub">수여 기관·대회 설명.</div>
</div>
```
많아지면 좌측 열이 세로 스크롤됩니다. 상단 통계의 **Awards 숫자**도 갱신하세요.

---

## 5. Education / Skills (2면 좌측)

- **학력**: `.edu-deg`(학위), `.edu-meta`(기관·기간), `.edu-sub`(부가) 텍스트만 수정.
- **스킬**: `<div class="skills">` 안에 `<span class="skill">항목</span>` 추가/삭제.

---

## 6. 통계 숫자 (1면 하단 `statbar`)

`<div class="statbar">` 안 각 `<span class="n">숫자</span>`를 수정 (Publications / Citations / Journal / Awards). 논문·수상 추가 시 함께 갱신.

---

## 7. 머리말 / 연락처 / 푸터

- **마스트헤드**: `.mh-name`(이름), `.mh-sub`(직함 라인), 좌측 로고 `src/images/logo_yonsei.png`, 우측 빠른 링크.
- **부제**: `.standfirst` 한 줄.
- **연락처**: 1면 검은 박스 `.darkbox` 안 `.crow`들 / 하단 고정 `.footbar` / 마스트헤드 우측 — 세 곳을 함께 맞추세요.

---

## 8. 인용수 연동 (예정)

확정 후 React 이식 시, GitHub Action이 주간으로 **OpenAlex**에서 DOI별 인용수를 받아 `citations.json`으로 저장→표시할 예정입니다. (Google Scholar는 공개 API가 없어 자동 연동 불가; 숫자는 OpenAlex 기준, 정확한 수치는 Scholar 링크 참조.) 그 전까지 `Cited n`은 수동.

---

## 9. 주의사항

- 한 페이지가 화면을 넘기면 스냅(휙 넘김)이 어색해집니다. 항목이 많아지면: 뉴스=세로 스크롤(자동), 논문=가로 스크롤(자동), 좌측 열=세로 스크롤(자동)로 처리되니 **고정 영역(머리말·통계)** 만 화면에 맞게 유지하세요.
- 이미지는 가능하면 가로 사진은 `news wide`, 세로 사진은 기본/`right`로.
- 색은 흑백 + 네이비 강조 한 가지 원칙을 지키면 톤이 무너지지 않습니다.
