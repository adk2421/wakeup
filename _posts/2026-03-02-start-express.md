---
layout: post
categories: [dev, start]
title: "Express 시작하기"
author: 김지성
date: 2026-03-02 16:00:00 +0900
thumbnail: /page/dev/menu/start/images/thumbnail-express.png
link-type: link
---

## 개요
**Express**는 `Node.js`를 기반으로 최소한의 기능만 갖춘 웹 프레임워크다. 정해진 구조가 없어 자유롭게 구성이 가능하지만, 필요한 기능들은 일일이 추가해야하는 번거로움이 있다. `JavaScript`를 기본으로 사용하지만, 설정을 통해 `TypeScript`로도 사용 가능하다.

<br/>
[Node.js](https://nodejs.org/ko/download)는 링크 페이지에서 설치 가능하며, Windows의 VS Code 기준으로 [Express](https://expressjs.com/)를 참고하여 설치부터 서버 실행까지 진행해보겠다.

<br/>

## Express 설치
1. <span class="bold-lg">VS Code에서 새 창을 열고 `Ctrl` + `Shift` + `` `(백틱)``을 눌러 터미널을 실행한다.</span>
<span class="post-img size-lg">![start-express-1]({{ site.baseurl }}/page/dev/menu/start/images/start-express-1.png)</span>
<br/>

2. <span class="bold-lg">프로젝트 폴더를 위치시킬 경로로 이동해 아래 명령어를 입력한다.</span>  
```
npm init
```
<span class="emphasis">*</span> 설정 관련해서 물어볼텐데 나중에 수정할 수 있으니 package name만 입력하고 전부 엔터를 누른다.
<span class="post-img size-lg">![start-express-2]({{ site.baseurl }}/page/dev/menu/start/images/start-express-2.png)</span>
<br/>

3. <span class="bold-lg">폴더에 `package.json` 파일이 추가되어 있는 것을 확인하고, Express 설치 명령어를 입력한다.</span>
```
npm i express
```
<span class="post-img size-lg">![start-express-3]({{ site.baseurl }}/page/dev/menu/start/images/start-express-3.png)</span>
<br/>

4. <span class="bold-lg">Express 설치가 완료되면 `node_modules`와 `package-lock.json`이 생성된다.</span>
<span class="post-img size-lg">![start-express-4]({{ site.baseurl }}/page/dev/menu/start/images/start-express-4.png)</span>

<br/>
<hr/>
<br/>

## Express 서버 실행
1. <span class="bold-lg">이제 VS Code에서 [File] - [Open Folder...]로 들어가 생성한 프로젝트 폴더를 열어준다.</span>
<span class="post-img size-lg">![start-express-5]({{ site.baseurl }}/page/dev/menu/start/images/start-express-5.png)</span>
<br/>

2. <span class="bold-lg">프로젝트 폴더 루트에 `index.js` 파일을 생성한 후, 아래 내용을 붙여넣는다.</span>
   ```javascript
   const express = require('express')
   const app = express()
   const port = 3000

   app.get('/', (req, res) => {
      res.send('Hello World!')
   })

   app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
   })
   ```
<span class="post-img size-lg">![start-express-6]({{ site.baseurl }}/page/dev/menu/start/images/start-express-6.png)</span>
<br/>

3. <span class="bold-lg">터미널에서 아래 명령어를 실행한 다음, 웹 브라우저 주소창에 `localhost:3000`를 입력하고 아래 화면처럼 나온다면 서버 실행 완료</span>
```
node index.js
```
<span class="post-img size-lg">![start-express-7]({{ site.baseurl }}/page/dev/menu/start/images/start-express-7.png)</span>
<br/>

4. <span class="bold-lg">`index.js`파일의 'Hello World!' 문구를 수정한 다음, 서버를 다시 시작해본다. ( 터미널에서 `Ctrl` + `c`를 누르면 서버를 내릴 수 있다 )</span>
<span class="post-img size-lg">![start-express-8]({{ site.baseurl }}/page/dev/menu/start/images/start-express-8.png)
<br/>

5. <span class="bold-lg">수정 완료</span>
<span class="post-img size-lg">![start-express-9]({{ site.baseurl }}/page/dev/menu/start/images/start-express-9.png)</span>

<br/>
<br/>

## 참고 문서
---
ExpressJS : [https://expressjs.com/](https://expressjs.com/)