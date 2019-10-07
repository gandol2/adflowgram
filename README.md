# adflowgram
인스타그램 클론 (with Express + Prisma + React and React Native)

## User Stories


- [x] 계정생성 (nodemailer 인증 사용)
- [x] 비밀키 요청
- [x] 비밀키 확인(로그인)
- [x] 로그인 
- [x] 사진 Link/Unlike
- [x] 댓글
- [x] 사용자 검색
- [x] 위치 검색
- [ ] 프로필 보기
- [ ] 사용자 팔로우 / 언팔로우 
- [ ] 사진 확대
- [ ] 프로필 편집

- [ ] 사진 업로드
- [ ] 사진 수정 (삭제)
- [ ] 피드 확인




# setting

## graphql-yoga 설치
```
> yarn add graphql-yoga
> yarn add graphql-tools merge-graphql-schemas
```

## nodemon 설치
- 파일을 저장할때 마다 서버를 재실행 해주는 도구
```
> yarn add nodemon -D
```

## babel-node 설치
```
> yarn add babel-node
> yarn add babel-cli -D
> yarn add @babel/preset-env @babel/node @babel/core
```

## dotenv 설치
- 서버를 세우는 툴(?)
```
> yarn add dotenv
```

## morgan 설치
- morgan is logger helper
```
> yarn add morgan
```

## prisma 설치
[prisma](https://www.prisma.io/)
```
> npm install -g prisma
> prisma login -k <로그안KEY>
> prisma init
>> Demo server
>> Prisma JavaScript Client
> >prisma deploy
> yarn add prisma-client-lib
```

## nodemailer 설치
- 이메일 보내주는 모듈
```
> yarn add nodemailer
> yarn add nodemailer-sendgrid-transport
```

## passport 설치
```
> yarn add passport-jwt passport
> yarn add jsonwebtoken
```