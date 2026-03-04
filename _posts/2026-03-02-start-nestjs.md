---
layout: post
categories: [dev, start]
title: "NestJS 시작하기"
author: 김지성
date: 2026-03-02 16:30:00 +0900
thumbnail: /page/dev/menu/start/images/thumbnail-nestjs.png
link-type: link
---

## 개요
**NestJS**는 `Node.js`의 `Express`를 기반으로 한 서버 어플리케이션 프레임워크다. 프레임워크는 일종의 가이드라인 역할을 하며, 정해진 구조 안에서 개발을 하기 때문에 협업 진행 시 코드 분석 속도 향상에 도움이 될 수 있다. 또한, TypeScript로 설계되어 타입 체킹 기능으로 런타임 에러도 줄일 수 있다.

그럼 Node.js가 설치된 상태에서 Windows, VS Code 기준으로 [NestJS Docs](https://docs.nestjs.com/)를 참고하여 설치부터 서버 실행까지 진행해보겠다.

<br/>

## NestJS 설치
1. <span class="marker">VS Code에서 새 창을 열고 `Ctrl` + `Shift` + `` `(백틱)``을 눌러 터미널을 실행한다.</span>
![start-nestjs-1]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-1.png)
<br/>

2. <span class="marker">프로젝트 폴더를 위치시킬 경로로 이동해 아래 명령어를 입력한다.</span>
```
npm i -g @nestjs/cli
```
![start-nestjs-2]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-2.png)
<br/>
<span class="marker"><span class="emphasis">*</span> 위 오류가 발생하면 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`를 입력하고 다시 진행한다.</span>
![start-nestjs-3]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-3.png)
<br/>

3. <span class="marker">정상적으로 설치됐다면 아래 명령어를 입력해 프로젝트를 생성한다. ( 패키지 매니저 선택 질문에 `npm`을 선택한다. )</span>
```
nest new test-project
```
![start-nestjs-4]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-4.png)
<br/>

4. <span class="marker">프로젝트 생성 완료</span>
![start-nestjs-5]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-5.png)

<br/>
<br/>

## NestJS 서버 실행
1. <span class="marker">이제 VS Code에서 [File] - [Open Folder...]로 들어가 생성한 프로젝트 폴더를 열어준다.</span>
![start-nestjs-6]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-6.png)
<br/>

2. <span class="marker">서버를 실행하는 명령어를 입력한다.</span>
```
npm run start
```
![start-nestjs-7]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-7.png)
<br/>

3. <span class="marker">웹 브라우저를 켜서 주소창에 `localhost:3000`를 입력하고 아래 화면처럼 나온다면 서버 실행 완료</span>
![start-nestjs-8]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-8.png)
<br/>

4. <span class="marker">src 폴더의 app.service.ts 파일을 열어 'Hello World!' 문구를 수정한 다음, 서버를 다시 시작해본다. ( 터미널에서 `Ctrl` + `c`를 누르면 서버를 내릴 수 있다 )</span>
![start-nestjs-9]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-9.png)
<br/>

5. <span class="marker">수정 완료</span>
![start-nestjs-10]({{ site.baseurl }}/page/dev/menu/start/images/start-nestjs-10.png)

<br/>
<br/>

## 참고 문서
---

NestJS Docs : [https://docs.nestjs.com/](https://docs.nestjs.com/)