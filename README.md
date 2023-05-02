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
## ✨필수 요구사항✨

- [X] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

---


## 🎈선택 요구사항🎈

- [X]  영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [X]  영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [X]  무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [X]  영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [X]  영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [X]  영화와 관련된 기타 기능도 고려해보세요.
- [X]  영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [X]  차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.

---

## ✨ 필수 요구사항 활용 ✨

#### ⭐️ 1) 영화 검색 기능 
-> SearchForm 컴포넌트의 input창에 검색 정보를 입력할때 handleChange 의 함수가 실행되고 button 을 클릭하면 props.setData 를 사용해 info 정보를 SearchResult 의 컴포넌트에 데이터를 받아오게 됩니다.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235608457-0b04464b-19b5-4a77-b354-14c6b98767ea.png">
<img width="482" alt="image" src="https://user-images.githubusercontent.com/101441685/235608980-000b77c9-144c-491c-adda-e7772627d8b1.png">


#### ⭐️ 2) 검색조건에 따른 영화 목록 출력
-> api 파라미터 조건 값으로 영화 조건이 검색 됩니다.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235610019-d0098b08-e864-45be-bb0e-61e68d3ed268.png">


#### ⭐️ 3) 영화 상세 정보 
-> 상세 정보의 api에 파라미터로 영화의 {id} 값을 받아오고 setMovie 로 (json) 데이터를 받아 왔습니다. 

<img width="364" alt="image" src="https://user-images.githubusercontent.com/101441685/235617685-5ec7fdff-fc12-425d-9c7c-fd8df3b55634.png">

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235614683-73c0dda1-feb0-4aef-ba5e-f0bcd657f00a.png">

->  movie(state) 에 담아져 있는 데이터를 이용해 아래와 같이 id 값으로 전달받은 영화 상세 정보를 나타내 주었습니다. 

<img width="710" alt="image" src="https://user-images.githubusercontent.com/101441685/235619756-f08c673c-dc93-44a6-a205-0814c0b6467a.png">

---

## ✨ 선택 요구사항 활용 ✨


#### ✨ 1) 영화 개봉연도로 검색할 수 있도록 만들어보세요. 

-> 검색창 , 연도와 , 시리즈를 선택할수 있는 select 의 부분을 한개의 SearchForm component 로 만들었습니다.  
개봉연도를 선택할수 있는 YearBox 라는 컴포넌트를 만들어 search component 안에 import 하였습니다.

<img width="500" alt="image" src="https://user-images.githubusercontent.com/101441685/235639809-b12eecd3-e165-4421-a858-d7411a84b6af.png">


->input창에 입력할때, select가 선택될때 객체의 이벤트가 일어나는 e.target. 이 공통으로 이뤄지기 때문에, 상위요소인 SearchForm 컴포넌트에 handleChange 의 함수를 생성하여 공통 이벤트 의 속성을 넣어 주었습니다.  < YearBox > 의 컴포넌트에도 동일하게 해당 이벤트를 주기 위하여,handleChange 의 함수를  props로 전달 하였습니다. 

📁Home<br/>
 <br/> L components
 <br/>   L search.jsx
  
<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235646133-0c6e18be-1b6a-4ec3-a2fb-c28f2f4749f4.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235646388-de9c17aa-25d6-4a26-b231-151d4f622020.png">
 
📁Home<br/>
 <br/> L section
 <br/>   L year.jsx
  
 <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235652502-34927fde-b7cd-4be8-b971-9e4bd41ec375.png">


#### ✨ 2) 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요. 
#### ✨ 3) 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
-> 구현모습 

![loadinggif](https://user-images.githubusercontent.com/101441685/235664702-916061df-773a-4309-9ee2-0db9cd45acef.gif)

-> MUI 에서 스켈레톤의 라이브러리를 사용하였습니다.<br/>
"스켈레톤 UI" 이란? <br/>
-> 유저가 원하는 데이터를 받아오는 동안 아무것도 표시되지 않으면  쉽게 지치고 지루함을 느낄수 있습니다. 따라 단순한 색으로 처리하는게 아닌, 
데이터를 가져오는 동안 콘텐츠를 표시하는 컴포넌트 , 데이터를 가져오고 있다는 것을 알려주는 사용자 친화적인 UI를 나타냅니다.<br/> 
스켈레톤 UI의 가장 일반적인 패턴은 흰색 배경과 반짝이는 CSS 애니메이션이 있는 작은 박스 입니다. 

#### 📌 스켈레톤 UI가 필요한 페이지 

1) 영화 검색 결과 노출 컴포넌트 (SearchResult)

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235713663-a606b8a8-5c5a-401b-8b6d-815f11a672f7.png">

-> 스켈레톤의 UI는 로딩중일때 적용이 되야 합니다. 영화데이터를 최대 10개씩 가져오기 때문에 new Array(10) 새로운 10개의 배열을 만들어 map으로 반복하게 만들어 주었습니다.
그후 movie? 의 데이터가 있을때와, 없을때 조건으로 나누었습니다. 
없을때는 설정해둔 적용된 컴포넌트의 모습이 보이게 하였습니다. 

2) 상세페이지 컴포넌트 (DetailPage)

-> 




#### ✨ 4) 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요. 

=

#### ✨ 5) 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)




---


##  🎇 느낀점 

->

##  🎇 아쉬운점 
-> 
-> 
-------

## 

