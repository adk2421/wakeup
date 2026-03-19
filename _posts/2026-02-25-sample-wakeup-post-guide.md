---
layout: post
categories: [etc, sample]
title: "WakeUp Post Guide"
author: 김지성
date: 2026-02-25 10:10:00 +0900
link-type: link
---

Paragraphs
---------------

> **Default**
>> ABCDEFG, 가나다라마바사

<br/>

Headings
---------------

> **h1 [ # ]**
>> # ABCDEFG, 가나다라마바사

> **h2 [ ## ]**
>> ## ABCDEFG, 가나다라마바사

> **h3 [ ### ]**
>> ### ABCDEFG, 가나다라마바사

> **h4 [ #### ]**
>> #### ABCDEFG, 가나다라마바사

> **h5 [ ##### ]**
>> ##### ABCDEFG, 가나다라마바사

> **h6 [ ###### ]**
>> ###### ABCDEFG, 가나다라마바사

<br/>

Emphasis
---------------

> **Bold [ ** or __ ]**
>> **ABCDEFG, 가나다라마바사**

> **Italic [ * or _ ]**
>> *ABCDEFG, 가나다라마바사*

<br/>

Blockquotes
---------------

> **Blockquotes [ > ]**
>> Level 1
>>> Level 2
>>>> Level 3

<br/>

Lists
---------------

> **Ordered Lists [ 1. ]**
>> Subject
>> 1. Item 1
>> 2. Item 2
>> 3. Item 3

> **Unordered Lists [ - ]**
>> Subject
>> - Item 1
>> - Item 2
>> - Item 3

<br/>

Code Blocks
---------------

> **Inline [ ` ]**
>> `@GetMapping` is an annotation in Spring Boot.

> **Block [ ``` ]**
>> ```java
@GetMapping("/index")
public String index(LoginDto loginDto) {
	System.out.println(loginDto);
	return "index";
}
>> ```

<br/>

Horizontal Rules
---------------

> **hr [ --- ]**
>> # 인사
>> ---
>> 블로그에 오신 것을 환영합니다.

<br/>

Links
---------------

> **Site [ \[\]() or \[\][] ]**
>> 블로그 링크 1 : [Link](https://adk2421.github.io/wakeup/)  
>> 블로그 링크 2 : [ReferenceLink][blog-link]

> **Email [ <> ]**
>> 이메일 링크 : <adk24211@gmail.com>

[blog-link]: https://adk2421.github.io/wakeup/

<br/>

Images
---------------

> **Image [ !\[\]() ]**
>> Local
>> ![WakeUp](/wakeup/assets/images/post/test-image.png "Local")
>> <span class="caption">출처: [WakeUp](https://adk2421.github.io/wakeup/)</span>  
>> URL
>> ![WakeUp](https://adk2421.github.io/wakeup/assets/images/post/test-image.png "URL")
>> <span class="caption">출처: [WakeUp](https://adk2421.github.io/wakeup/)</span>

> **Link [ \[!\[\]()\]() ]**
>> [![WakeUp](https://adk2421.github.io/wakeup/assets/images/icon/favicon.png "link")](https://adk2421.github.io/wakeup/)  
>> 클릭 시, 홈으로 이동

<br/>

ETC
---------------

> **Line Break [ &nbsp;&nbsp; or \<br/> ]**
>> 첫 번째 줄  
>> 두 번째 줄  
>> 세 번째 줄

> **Tables [ | | | ]**
>> | header1     | header2         | header3         | header4         |
>> | ----------- | --------------- | :-------------: | --------------: |
>> | text1       | ABCDEFGHI       | ABCDEFGHI       | ABCDEFGHI       |
>> | text2       | 가나다라마바사아자 | 가나다라마바사아자 | 가나다라마바사아자 |

> **Definition Lists [ : ]**
>> Definition
>> : - (어떤 개념의) 의미[정의]
>> : - (특히 사전에 나오는 단어나 구의) 정의
>> : - 선명도
>>   : [전기·전자] 렌즈를 통하여 맺혀진 상(像)의 밝기나 세부(細部)를 분간할 수 있는 정도.
>>   : [정보·통신] 텔레비전이나 팩시밀리의 사진 전송 따위에 나타나는 화면의 산뜻하고 뚜렷한 정도.
