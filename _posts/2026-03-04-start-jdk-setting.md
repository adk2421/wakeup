---
layout: post
categories: [dev, start]
title: "Java 환경변수 설정"
author: 김지성
date: 2026-03-04 16:35:00 +0900
thumbnail: /page/dev/menu/start/images/thumbnail-java.png
link-type: link
---

## 개요
**Java Application**을 개발하기 위해서는 Java 소스를 컴파일하고, 실행할 수 있도록 설정이 필요하다.

이 글에선 Windows의 Java 환경변수 설정을 간단하게 설명하면서 진행해보겠다.

<br/>

## JDK 설정
> #### 1. [Oracle Java Archive](https://www.oracle.com/java/technologies/downloads/archive/){:target="_blank"} 링크 접속 후, 사용하려는 Java 버전을 선택한다. ( 17 버전으로 진행 )
<span class="post-img size-lg">![start-jdk-setting-1]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-1.png)</span>
<br/>

> #### 2. Windows 항목에서 압축파일을 다운로드 받는다. ( 다운로드 시, Oracle 로그인 필요 )  
[OpenJDK](https://jdk.java.net/java-se-ri/17-MR1){:target="_blank"}에서도 다운로드가 가능하다.
<span class="post-img size-lg">![start-jdk-setting-2]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-2.png)</span>
<br/>

> #### 3. 다운로드가 완료되었다면 원하는 경로에 압축을 푼다.
<span class="post-img size-lg">![start-jdk-setting-3]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-3.png)</span>
<br/>

> #### 4. 먼저 압축을 푼 폴더에 들어가 경로를 복사하고, `내 PC` 마우스 우클릭 후, 속성 창을 연다.
<span class="post-img size-lg">![start-jdk-setting-4]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-4.png)</span>
<br/>

> #### 5. [ 시스템 > 정보 ] 화면에서 `고급 시스템 설정`을 누른다.
<span class="post-img size-lg">![start-jdk-setting-5]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-5.png)</span>
<br/>

> #### 6. `환경 변수`로 들어가서, 시스템 변수의 `새로 만들기` 버튼을 누른다.
<span class="post-img size-md">![start-jdk-setting-6]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-6.png)</span>
<span class="post-img size-md">![start-jdk-setting-7]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-7.png)</span>
<br/>

> #### 7. 변수 이름에 `JAVA_HOME`을 입력하고, 변수 값에 아까 복사한 `JDK 경로`를 넣는다.
<span class="post-img size-md">![start-jdk-setting-8]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-8.png)</span>
<br/>

> #### 8. 그 다음, 시스템 변수에서 `Path`를 찾아 편집으로 들어간다.
<span class="post-img size-md">![start-jdk-setting-9]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-9.png)</span>
<br/>

> #### 9. 편집 화면에서 `새로 만들기` 버튼을 누르고 `%JAVA_HOME%bin`을 입력한다.
<span class="post-img size-md">![start-jdk-setting-10]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-10.png)</span>
<br/>

> #### 10. 열려 있는 모든 창의 확인 버튼을 누르고 `시작` 버튼을 눌러 `cmd`를 입력하고 명령 프롬프트를 실행한다.
<span class="post-img size-md">![start-jdk-setting-11]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-11.png)</span>
<br/>

> #### 11. 명령 프롬프트에 `java -version`을 입력하고 설정이 완료되었는지 확인한다.
<span class="post-img size-md">![start-jdk-setting-12]({{ site.baseurl }}/page/dev/menu/start/images/start-jdk-setting-12.png)</span>
<br/>