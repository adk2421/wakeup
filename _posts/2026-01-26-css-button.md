---
layout: post
title: "CSS 버튼 템플릿"
author: 김지성
date: 2026-01-26 10:45:40 +0900
categories: jekyll update
---

<style>
button { margin-right: 8px; padding: 10px 20px; cursor: pointer; }

.button_1 {
	background-color: #2c6ca4;
	color: #fdfdfd;
	border: none;
	border-radius: 5px;
}
.button_1:hover {
	background-color: #3686cc;
}

.button_2 {
	color: #333;
	border: none;
	box-shadow: 1px 1px 4px #333;
}
.button_2:hover {
	box-shadow: inset 1px 1px 4px #333;
}
</style>

<button type="button" class="button_1">버튼 1</button>
<button type="button" class="button_2">버튼 2</button>


{% highlight html %}
<style>
button { margin-right: 8px; padding: 10px 20px; cursor: pointer; }

.button_1 {
	background-color: #2c6ca4;
	color: #fdfdfd;
	border: none;
	border-radius: 5px;
}
.button_1:hover {
	background-color: #3686cc;
}

.button_2 {
	color: #333;
	border: none;
	box-shadow: 1px 1px 4px #333;
}
.button_2:hover {
	box-shadow: inset 1px 1px 4px #333;
}
</style>

<button type="button" class="button_1">버튼 1</button>
<button type="button" class="button_2">버튼 2</button>
{% endhighlight %}


<script>
	document.querySelector(".post-content").addEventListener("click", (e) => {
		const el = e.target;

		if (el.type === "button") {
			alert(el.innerText + " 클릭");
		}
	});
</script>
