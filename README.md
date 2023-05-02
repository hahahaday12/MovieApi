
## 🎞MovieApi Web Page🎞

## 배포 주소
-> https://web-movieapi-6g2llffebnui.sel3.cloudtype.app/

## 예시 사이트 
-> https://stupefied-hodgkin-d9d350.netlify.app/#/


## 📌 유의사항 
-> 모든 디바이스의 최적화 되어있지 않습니다.<br/>

## 📜 프로젝트 소개
->  영화 Api를 이용한 영화 웹페이지 만들기 과제입니다. 
기본틀은 주어진 예시 사이트와 같게 만들었으며 필요한 추가 적인 기능 구현 하였습니다. 


## 시작 가이드
### Requirements
For building and running the application you need:

- [Npm 8.19.3](https://www.npmjs.com/package/npm/v/8.19.3)


### Installation
``` bash
$ git clone git@github.com:KDT1-FE/KDT5-M2.git
$ cd KDT5-M2
```

#### Frontend
```
$ cd KDT5-M2
$ npm install 
$ npm run dev
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=Vite&logoColor=white)

---
## 화면 구성 📺
| 메인 페이지  | 
| :-------------------------------------------: |
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235584049-e1311998-715c-445b-9df1-3d82d2d100c8.png">| 
| 검색 결과| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235588693-cf602881-0fb2-4529-86b0-62e86efc0f24.png">| 
| 상세 페이지(이전에 보던 포스터가 없을때 기본으로 보이는 상세페이지 )| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235585598-0363a2a3-4343-459d-b67c-cd3349b94597.png">| 
| 상세 페이지(검색 결과에 나온 포스터를 클릭후 보이는 상세페이지 )| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235586832-37958fcc-f1cc-4456-86dc-6b1267aea50f.png">|
| About 페이지| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235586925-5e214b27-a9fa-4cd5-a603-0c121daf2c70.png">| 
---
## 🎈필수 요구사항🎈

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

---

## 🎈선택 요구사항🎈

- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] API 기본 사용법

---

## ✨ 요구사항 활용 ✨

### ⭐️ 1) `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.

<img width="437" alt="image" src="https://user-images.githubusercontent.com/101441685/229598172-e785b36e-bf73-4e38-abd4-7a71d68f2089.png">

-> 메인 페이지에 최상단에 있는 category 부분을 header 의 구역으로 잡았습니다. 
-> 메인페이지 스크롤이 내려 가면서 바뀌는 색의 영역, 내용의 영역을 각각의 section 으로 잡았습니다. 따라,  총 7개의 section 구역으로 나누었습니다. 

### ⭐️ 2) 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.


<img width="437" alt="image" src="https://user-images.githubusercontent.com/101441685/229599788-00155963-33f0-4f0b-ba40-17862788954e.png">
-> header 와 main menu 등 수평정렬이 필요한 부분에서 flex 를 사용하였습니다. 

<img width="282" alt="image" src="https://user-images.githubusercontent.com/101441685/229601109-a7bbc2c6-8092-49ff-bdf5-4650fa9d1a41.png">
->  각각의 칸안에 있는 사진의 경우 grid 를 사용하였습니다. 


### ⭐️ 3 JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
-> 헤더 아래 메인페이지의 사진 부분은 일정초가 지날때마다 사진도 같이 바뀝니다.  따라 해당 부분을 js로 구현해보았습니다. 
1) html에 class의 name으로 처음 active 할곳을 지정해 주었습니다. 
<img width="286" alt="image" src="https://user-images.githubusercontent.com/101441685/229733084-c5a5e0db-7521-419c-a1a6-6408d5489261.png">

2) scss에 active 가 있는곳은   opacity:1; 를 주었고 그 외 나머지 곳들은  opacity: 0; 으로 보이지 않게 처리해 주었습니다. <br/>

```javascript
 .test.active {
  display: block;
  opacity:1;
  transition: opacity 2s ease-out 5s;
}
.test {
  position:absolute;
  top:0;
  left:0;
  opacity: 0;
  display: none;
  transition: opacity 1s ease-in-out;
}
```
3) test 가 있는 classname 을 [currentSlideIndex] 배열로  만들어 주고 . nextSlideIndex  라는 변수 안에 (currentSlideIndex + 1) % sliders.length; 계산한 값을
[nextSlideIndex]; 배열 안에 넣어 nextSlide 의 변수에  할당 해주었습니다. 
3초동안, ("active") 를 add해주면서, active가 발생할때 opacity 1 이 되는것이고, remove 될때는 opacity 0 이 되도록 구현하였습니다.

```javascript
document.addEventListener("DOMContentLoaded", function(){
const sliders = document.getElementsByClassName("test");
let currentSlideIndex = 0;
const intervalDuration = 3000; // 5 seconds

setInterval(() => {
  const currentSlide = sliders[currentSlideIndex];
  const nextSlideIndex = (currentSlideIndex + 1) % sliders.length;
  const nextSlide = sliders[nextSlideIndex];

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");

  currentSlideIndex = nextSlideIndex;
}, intervalDuration);
```


### ⭐️ 4) SCSS 등의 CSS 전처리도구를 도입해보세요.
-> scss 를 사용하여 스타일을 작성하였습니다.  
-> scss 의 를사용하여 ,  심플한 표기법으로 CSS를 구조화 함으로써 , 가독성과 재사용성을 높여주어 유지보수가 쉽도록 구현하였습니다. <br/>

✨scss 설치법 
```javascript
npm i -g sass --save-dev
```

| scss 사용후 |  scss -> css 변환후   |
| :-------------------------------------------: | :------------: |
| <img width="383" alt="image" src="https://user-images.githubusercontent.com/101441685/229776541-2381234c-9450-42f2-8703-b28ef953b75d.png">|<img width="382" alt="image" src="https://user-images.githubusercontent.com/101441685/229776722-6a922e9d-4f73-4cd5-9d57-15e2eb6895ef.png">|  

### ⭐️ 5) SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
-> webpack 보다 parcel 이 환경 세팅하기에 조금더 쉬운것 같아 parcel 을 사용하였습니다. 또한 큰 프로젝트가 아닌 작은 규모의 프로젝트 이기 때문에 해당 번들러를 사용하였습니다.<br/> 
-> 번들러는 단순히 자바스크립트 파일들 뿐만 아니라, 애플리케이션에 필요한 모든 종류의 파일들을 모듈 단위로 나누어 최소한의 파일 묶음(번들)으로 만들어 냅니다. 뿐만 아니라 자바스크립트 파일을 외부에서 알아 보기 힘들게 코드를 변환하는 작업 을 한다거나, 최신 문법의 자바스크립트를 모든 웹 브라우저에서 작동할 수 있게 ES5문법으로 변환(Transpile)하는 등 다양한 기능을 지원합니다. <br/>

<img width="280" alt="image" src="https://user-images.githubusercontent.com/101441685/229783798-6688552e-be01-41ec-8afc-d0ceb3cb0642.png">

---


##  🎇 느낀점 

-> 기존의 프로젝트에서는 styled-component 만 사용하였으나, 이번 기회에 scss를 사용해 보았습니다.  사실 styled-component  사용하는게 익숙해서 인지 scss 의 편리함에 대해 차이점을 잘 느끼지를 못하였으나, 이번 프로젝트에 적용하게 되면서  scss 의 편리함을 깨닫게 되었습니다. 번들러를 사용하며,  조금더 빠른 페이지 로딩을 볼수 있었습니다.<br/>
요구사항을 활용하여 조금더 세분화된 html의 구조를 잡을수 있게 되었습니다. 

##  🎇 아쉬운점 
-> BEM 방법론을 사용하지 못하였습니다. "BEM 방법론"을 사용하였다면 조금더 가독성이 좋을것 같았습니다. <br/>
-> 클래스 명이 조금 더 구체적이지 못한게 아쉽습니다. <br/>
-> 배포한 웹 페이지에 들어갔을때 사진이 바뀔때마다 깜빡 거리면서 사진이 늦게 로드 되는 현상이 있습니다. 로컬에서 테스트 했을때는 문제가 없었는데 배포된 사이트에서만 이런 형상이 나타나고 있습니다. 추후, 수정 예정입니다. 

-------

## 2023-04-09 1차 피드백 

