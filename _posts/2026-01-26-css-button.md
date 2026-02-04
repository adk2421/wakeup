---
layout: post
categories: TEMPLATE CSS
title: CSS 버튼 템플릿
author: 김지성
date: 2026-01-26 10:45:40 +0900
thumbnail: /assets/images/post/post-thumbnail-css.png
---

<style>
button { margin: 20px; padding: 10px 20px; cursor: pointer; }

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
.button_2:active {
	box-shadow: inset 1px 1px 4px #333;
}
</style>

#### 버튼 기본 스타일
{% highlight css %}
button { margin-right: 8px; padding: 10px 20px; cursor: pointer; }
{% endhighlight %}

#### 버튼 1
<div class="view-code-box">
	<div class="view-box">
		<div class="box-title">
			<span>View</span>
		</div>
		<div class="view-box-content">
			<button type="button" class="button_1">버튼 1</button>
		</div>
	</div>
	<div class="code-box">
		<div class="box-title">
			<span>Code</span>
		</div>
		<div class="code-box-content">
			{% highlight html linenos %}
				<style>
				.button_1 {
					background-color: #2c6ca4;
					color: #fdfdfd;
					border: none;
					border-radius: 5px;
				}
				.button_1:hover {
					background-color: #3686cc;
				}
				</style>
				<button type="button" class="button_1">버튼 1</button>
			{% endhighlight %}
		</div>
	</div>
</div>

#### 버튼 2
<div class="view-code-box">
	<div class="view-box">
		<div class="box-title">
			<span>View</span>
		</div>
		<div class="view-box-content">
			<button type="button" class="button_2">버튼 2</button>
		</div>
	</div>
	<div class="code-box">
		<div class="box-title">
			<span>Code</span>
		</div>
		<div class="code-box-content">
			{% highlight html %}
				<style>
				.button_2 {
					color: #333;
					border: none;
					box-shadow: 1px 1px 4px #333;
				}
				.button_2:active {
					box-shadow: inset 1px 1px 4px #333;
				}
				</style>
				<button type="button" class="button_2">버튼 2</button>
			{% endhighlight %}
		</div>
	</div>
</div>

<script>
	document.querySelector(".post-content").addEventListener("click", (e) => {
		const el = e.target;

		if (el.type === "button") {
			alert(el.innerText + " 클릭");
		}
	});
</script>
