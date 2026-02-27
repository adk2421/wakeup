---
layout: post
categories: [language, markdown]
title: "마크다운(Markdown) 기본 구문"
author: 김지성
date: 2026-02-27 15:40:00 +0900
thumbnail: /page/language/menu/markdown/images/thumbnail-markdown.png
link-type: link
---

개요
---------------
사이트마다 형식이 다를 수 있으며, [Markdown Guide](https://www.markdownguide.org/basic-syntax/)를 참고하여 마크다운 기본 구문을 다룬다.

<br/>

제목
---------------
---

> <span class="marker">크기별 제목</span>
> ```
> # h1
> ## h2
> ### h3
> #### h4
> ##### h5
> ###### h6
> ```
> #### 출력
>> # h1
>> ## h2
>> ### h3
>> #### h4
>> ##### h5
>> ###### h6

<div class="pb-15"></div>

#### <span class="emphasis">*</span> `h1(#)`, `h2(##)`는 이렇게도 사용 가능하다.
> ```
> h1
> ===============
>
> h2
> ---------------
> ```
> #### 출력
>> h1
>> ===============
>>
>> h2
>> ---------------

<br/>

강조
---------------
---

> <span class="marker">굵은 글씨체</span>
> ```
> **Emphasis Bold**
> 
> 또는
> 
> __Emphasis Bold__
> ```
> #### 출력
>> **Emphasis Bold**

> <span class="marker">기울임 글씨체</span>
> ```
> *Emphasis Italic*
> 
> 또는
> 
> _Emphasis Italic_
> ```
> #### 출력
>> *Emphasis Italic*

<br/>

인용
---------------
---

> <span class="marker">인용구</span>
> ```
>> Blockquotes 1
>>> Blockquotes 2
>>>> Blockquotes 3
> ```
> #### 출력
>> Blockquotes 1
>>> Blockquotes 2
>>>> Blockquotes 3

<br/>

목록
---------------
---

> <span class="marker">숫자 목록</span>
> ```
> 1. Ordered Lists 1
> 2. Ordered Lists 2
> 	1. item 1
> 	2. item 2
> ```
> #### 출력
>> 1. Ordered Lists 1
>> 2. Ordered Lists 2
>> 	1. item 1
>> 	2. item 2

> <span class="marker">기호 목록</span>
> ```
> - Unordered Lists 1
> - Unordered Lists 2
> 	- item 1
> 	- item 2
> ```
> #### 출력
>> - Unordered Lists 1
>> - Unordered Lists 2
>> 	- item 1
>> 	- item 2

<br/>

코드
---------------
---

> <span class="marker">인라인 코드</span>
> ```
> `@GetMapping` is an annotation in Spring Boot.
> ```
> #### 출력
>> `@GetMapping` is an annotation in Spring Boot.

> <span class="marker">코드 블록</span>
> ```
	```java
	@GetMapping("/index")
	public String index(LoginDto loginDto) {
		System.out.println(loginDto);
		return "index";
	}
	```
> ```
<span class="caption"><span class="emphasis">*</span> 상단 백틱(`) 뒤에 사용하는 언어를 붙여주면 코드 하이라이트가 적용된다.</span>
> #### 출력
>> ```java
@GetMapping("/index")
public String index(LoginDto loginDto) {
	System.out.println(loginDto);
	return "index";
}
>> ```

<br/>

수평선
---------------
---

> <span class="marker">수평선</span>
> ```
> # Headings
> ---
> Contents
> ```
> #### 출력
>> # Headings
>> ---
>> Contents

<br/>

링크
---------------
---

> <span class="marker">사이트 링크</span>
> ```
> Link 1 : [Link](https://adk2421.github.io/wakeup/)  
> Link 2 : [Reference Link][blog-link]
> 
> [blog-link]: https://adk2421.github.io/wakeup/
> ```
<span class="caption"><span class="emphasis">*</span> 주소를 따로 선언하면 여러 번 재사용할 수 있다. </span>
> #### 출력
>> Link 1 : [Link](https://adk2421.github.io/wakeup/)  
>> Link 2 : [Reference Link][blog-link]
>> 
>> [blog-link]: https://adk2421.github.io/wakeup/

> <span class="marker">이메일 링크</span>
> ```
> Email : <adk24211@gmail.com>  
> ```
> #### 출력
>> Email : <adk24211@gmail.com>

<br/>

이미지
---------------
---

> <span class="marker">로컬 이미지</span>
> ```
> ![WakeUp](/wakeup/assets/images/icon/favicon.png)
> ```
> #### 출력
>> ![WakeUp](/wakeup/assets/images/icon/favicon.png)

> <span class="marker">URL 이미지</span>
> ```
> ![WakeUp](https://adk2421.github.io/wakeup/assets/images/icon/favicon.png)
> ```
> #### 출력
>> ![WakeUp](https://adk2421.github.io/wakeup/assets/images/icon/favicon.png)

> <span class="marker">링크 이미지</span>
> ```
> [![WakeUp](/wakeup/assets/images/icon/favicon.png)](https://adk2421.github.io/wakeup/)
> 
> 이미지 클릭 시, 링크로 이동.
> ```
> #### 출력
>> [![WakeUp](/wakeup/assets/images/icon/favicon.png)](https://adk2421.github.io/wakeup/)  
>> 이미지 클릭 시, 링크로 이동.

<br/>

ETC
---------------
---

> <span class="marker">줄바꿈 ( Line Break )</span>
> #### 문장의 맨 끝에 띄어쓰기를 두 번 해주면 줄바꿈이 된다.
> ```
> 첫 번째 줄  
> 두 번째 줄  
> 세 번째 줄
> ```
>> 첫 번째 줄  
>> 두 번째 줄  
>> 세 번째 줄

> <span class="marker">표 ( Table )</span>
> #### 테이블을 생성할 수 있고, 글자 정렬도 가능하다.
> ```
> | header1 | header2   | header3   | header4   |
> | ------- | --------- | :-------: | --------: |
> | text1   | ABCDEFGHI | ABCDEFGHI | ABCDEFGHI |
> | text2   | 12345     | 12345     | 12345     |
> ```
> #### 출력
>> | header1 | header2   | header3   | header4   |
>> | ------- | --------- | :-------: | --------: |
>> | text1   | ABCDEFGHI | ABCDEFGHI | ABCDEFGHI |
>> | text2   | 12345     | 12345     | 12345     |

> <span class="marker">정의 ( Definition )</span>
> #### 용어에 대한 정의를 입력할 수 있다.
> ```
> Definition
> : (어떤 개념의) 의미[정의]
> : (특히 사전에 나오는 단어나 구의) 정의
> ```
> #### 출력
>> Definition
>> : (어떤 개념의) 의미[정의]
>> : (특히 사전에 나오는 단어나 구의) 정의

<br/>

참고 문서
---------------
---

Markdown Guide : [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)
