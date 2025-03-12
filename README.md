### 2차 수정
 Pagination 방식을 무한 스크롤 방식으로 변경(25.03.12)
https://velog.io/@workmakerdaily/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4

---

### 프로젝트 컨셉 및 디자인 방향
API의 내용물과 페이지 구성을 보았을 때 포켓몬 관련 웹 사이트 제작이라는 생각으로 만들었습니다.  
API의 포켓몬 사진들이 픽셀의 느낌과 잘 어울려 전체적인 느낌을 살짝 고전(포켓몬스터 골드 같은)으로 잡고 진행하였습니다.  
또한 example8.png 사진을 참고하여 화면을 구성하였습니다.


---

# 2025년 위팩토리 프론트엔드 개발자 채용 테스트

위팩토리 프론트엔드 개발자 채용 1차 온라인 테스트에 참여해주셔서 감사합니다.
온라인 테스트는 아래 표기된 기간동안 진행되며 지원자분께서 제출해주신 과제를 검토 후 합격하신 분들께는 `2차 오프라인 테스트 및 면접` 일정을 안내해드리도록 하겠습니다.

<br />

전체 면접 일정이 종료된 이후 해당 repository는 비공개 처리 될 예정이며 1차 테스트에 지원해주신 모든 분들께 순차적으로 제출해주신 과제에 대한 피드백을 드리고자 하니 포기하지 마시고 적극적인 참여 부탁드립니다.

<br />
<br />

진행 방식

- 해당 repository를 개인 github으로 fork하여 아래 요구사항들을 적용합니다.

<br />
<br />

## 1. 라우팅 구성 정확도 ( 10점 )

### 1-1. 아래 URL로 접속 가능한 페이지들을 구성하세요. ( 5점 )

[참고 문서: https://nextjs.org/docs/app/getting-started/layouts-and-pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)

- /
- /sign-in
- /sign-up
- /pokemons
- /admin
- /admin/users

<br />

### 1-2. 아래 그룹별로 서로 다른 레이아웃을 적용하세요. ( 5점 )

[참고 문서: https://nextjs.org/docs/app/building-your-application/routing/route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

- Group 1
  - /
  - /pokemons
- Group 2
  - /sign-in
  - /sign-up
- Group 3

  - /admin
  - /admin/users

<br />

- 결과 예시

  ![example1](public/example1.png) <br />
  ![example2](public/example2.png) <br />
  ![example3](public/example3.png) <br />
  ![example4](public/example4.png) <br />
  ![example5](public/example5.png) <br />
  ![example6](public/example6.png)

<br />
<br />

## 2. 상태관리 및 Rest API 호출 적절성 ( 40점 )

### 2-1. state 사용 테스트 ( 10점 )

- number 타입의 `count` state를 구현하세요. ( 2점 )

- `count`값을 1 증가시키는 버튼을 구현하세요. ( 4점 )

  - count 값이 10 초과 하지 않게 합니다.

- `count`값을 1 감소시키는 버튼을 구현하세요. ( 4점 )
  - count 값이 0 미만이 되지 않게 합니다.

<br />

### 2-2. zustand로 전역 상태 관리 ( 15점 )

- 2-1. 문항에서 만든 `count`값이 5 이상일때 다크모드, 5 미만일때 라이트모드 될 수 있게 구현하세요. ( 5점 )

  - 다크모드에서는 화면에 보이는 ui요소들의 배경색, 글자색이 반전되게 합니다.

- localStorage를 활용하여 `count`값과 다크모드, 라이트모드 상태를 새로고침 후에도 유지되게 구현합니다. ( 10점 )
  - `count` 상태를 zustand로 변경하지 않습니다.

<br />

### 2-3. http 호출 및 응답 데이터 상태 관리 ( 15점 )

> 제약사항 1. page.tsx, layout.tsx에 'use client' 지시어를 사용하지 않습니다.

### REST API 명세

1\) 엔드포인트

- URL: http://localhost:3000/api/pokemon

2\) 요청 파라미터
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| limit | number | 20 | 가져올 포켓몬 개수(1 이상 권장) |
| offset | number | 0 | 이미 확인한 포켓몬 수(시작 지점) |

예\) GET http://localhost:3000/api/pokemon?limit=20&offset=0

---

위 REST API 명세를 바탕으로 데이터를 호출하는 custom hook을 구현하고 /pokemons 페이지에 예시와 같이 ui를 구현합니다.

![example7](public/example7.png)
