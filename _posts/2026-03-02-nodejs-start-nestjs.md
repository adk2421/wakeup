---
layout: post
categories: [dev, nodejs]
title: "NestJS 시작하기"
author: 김지성
date: 2026-03-01 00:05:00 +0900
thumbnail: /page/dev/menu/nodejs/images/thumbnail-nestjs.png
link-type: link
---

## 개요
**NestJS**는 `Node.js`를 기반으로 한 서버 어플리케이션 프레임워크다. 프레임워크는 일종의 가이드라인 역할을 하며, 정해진 구조 안에서 개발을 하기 때문에 협업 진행 시 코드 분석 속도 향상에 도움이 될 수 있다.

Node.js가 설치된 상태에서 Windows, VS Code 기준으로 [NestJS Docs](https://docs.nestjs.com/)를 참고하여 설치부터 서버 실행까지 진행해보겠다.

<br/>

## NestJS 설치
1. VS Code에서 새 창을 열고 `Ctrl` + `Shift` + `` `(백틱)``을 눌러 터미널을 실행한다.
![start-nestjs-1]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-1.png)

2. 프로젝트 폴더를 위치시킬 경로로 이동해 아래 명령어를 입력한다.
```
npm i -g @nestjs/cli
```
![start-nestjs-2]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-2.png)
<span class="emphasis">*</span> 위 오류가 발생하면 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`를 입력하고 다시 진행한다.
![start-nestjs-3]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-3.png)

3. 정상적으로 설치됐다면 아래 명령어를 입력해 프로젝트를 생성한다. (패키지 매니저 선택 질문에 `npm`을 선택한다.)
```
nest new test-project
```
![start-nestjs-4]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-4.png)

4. 프로젝트 생성 완료
![start-nestjs-5]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-5.png)

<br/>

## NestJS 서버 실행
1. 이제 VS Code에서 [File] - [Open Folder...]로 들어가 생성한 프로젝트 폴더를 열어준다.
![start-nestjs-6]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-6.png)

2. 서버를 실행하는 명령어를 입력한다.
```
npm run start
```
![start-nestjs-7]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-7.png)

3. 웹 브라우저를 켜서 주소창에 `localhost:3000`를 입력하고 아래 화면처럼 나온다면 서버 실행 완료
![start-nestjs-8]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-8.png)

4. src 폴더의 app.service.ts 파일을 열어 'Hello World!' 문구를 수정한 다음 서버를 다시 시작해본다.
![start-nestjs-9]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-9.png)

5. 수정 완료
![start-nestjs-10]({{ site.baseurl }}/page/dev/menu/nodejs/images/start-nestjs-10.png)

<br/>

## 참고 문서
---

NestJS Docs : [https://docs.nestjs.com/](https://docs.nestjs.com/)