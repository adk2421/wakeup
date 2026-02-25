---
layout: post
categories: [etc, sample]
title: "Markdown Post Sample"
author: 김지성
date: 2026-02-25 10:10:00 +0900
link-type: link
---

Paragraphs
---------------

> <span class="marker">Default</span>
>> ABCDEFG, 가나다라마바사

<br/>

Headings
---------------

> <span class="marker">h1 [ # ]</span>
>> # ABCDEFG, 가나다라마바사

> <span class="marker">h2 [ ## ]</span>
>> ## ABCDEFG, 가나다라마바사

> <span class="marker">h3 [ ### ]</span>
>> ### ABCDEFG, 가나다라마바사

> <span class="marker">h4 [ #### ]</span>
>> #### ABCDEFG, 가나다라마바사

> <span class="marker">h5 [ ##### ]</span>
>> ##### ABCDEFG, 가나다라마바사

> <span class="marker">h6 [ ###### ]</span>
>> ###### ABCDEFG, 가나다라마바사

<br/>

Emphasis
---------------

> <span class="marker">Bold [ ** or __ ]</span>
>> **ABCDEFG, 가나다라마바사**

> <span class="marker">Italic [ * or _ ]</span>
>> *ABCDEFG, 가나다라마바사*

<br/>

Blockquotes
---------------

> <span class="marker">Blockquotes [ > ]</span>
>> Level 1
>>> Level 2
>>>> Level 3

<br/>

Lists
---------------

> <span class="marker">Ordered Lists [ 1. ]</span>
>> Subject
>> 1. Item 1
>> 2. Item 2
>> 3. Item 3

> <span class="marker">Unordered Lists [ - ]</span>
>> Subject
>> - Item 1
>> - Item 2
>> - Item 3

<br/>

Code Blocks
---------------

> <span class="marker">Inline [ ` ]</span>
>> `@GetMapping` is an annotation in Spring Boot.

> <span class="marker">Block [ ``` ]</span>
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

> <span class="marker">hr [ --- ]</span>
>> # 인사
>> ---
>> 블로그에 오신 것을 환영합니다.

<br/>

Links
---------------

> <span class="marker">Site [ \[\]() or \[\][] ]</span>
>> 블로그 링크 1 : [Link](https://adk2421.github.io/wakeup/)  
>> 블로그 링크 2 : [ReferenceLink][blog-link]

> <span class="marker">Email [ <> ]</span>
>> 이메일 링크 : <adk24211@gmail.com>

[blog-link]: https://adk2421.github.io/wakeup/

<br/>

Images
---------------

> <span class="marker">Image [ !\[\]() ]</span>
>> ![WakeUp](/wakeup/assets/images/icon/favicon.png "local")
>> ![WakeUp](https://adk2421.github.io/wakeup/assets/images/icon/favicon.png "Network")  

> <span class="marker">Link [ \[!\[\]()\]() ]</span>
>> [![WakeUp](https://adk2421.github.io/wakeup/assets/images/icon/favicon.png "link")](https://adk2421.github.io/wakeup/)

<br/>

ETC
---------------

> <span class="marker">Line Break [ &nbsp;&nbsp; or \<br/> ]</span>
>> 첫 번째 줄  
>> 두 번째 줄  
>> 세 번째 줄

<br/>

sss
: sadfasdfds

Tables


- [x] asdfasdfasd