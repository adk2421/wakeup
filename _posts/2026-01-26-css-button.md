---
layout: post
categories: [dev, css]
title: "CSS 버튼 템플릿"
author: 김지성
date: 2026-01-26 10:45:40 +0900
thumbnail: /page/dev/menu/css/images/thumbnail-css.png
link-type: link
---

<link rel="stylesheet" href="{{ "/page/dev/menu/css/css/css-button.css" | relative_url }}">

#### 버튼 기본 스타일
{% highlight css %}
button { padding: 10px 20px; cursor: pointer; }
{% endhighlight %}

#### 버튼 1
<div class="view-code-box">
	<div class="view-box">
		<div class="box-title">
			<span>View</span>
		</div>
		<div class="view-box-content">
			<div class="button-box">
				<button type="button" class="button_1">버튼 1</button>
			</div>
		</div>
	</div>
	<div class="code-box">
		<div class="box-title">
			<span>Code</span>
		</div>
		<div class="code-box-content">
			{% highlight html %}
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
			<div class="button-box">
				<button type="button" class="button_2">버튼 2</button>
			</div>
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