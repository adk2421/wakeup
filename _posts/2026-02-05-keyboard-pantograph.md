---
layout: post
categories: [TEMPLATE, CSS]
title: "87키 펜타그래프 키보드 CSS"
author: 김지성
date: 2026-02-05 16:30:00 +0900
thumbnail: /page/template/css/images/thumbnail-pantograph.jpg
---

<style>
.keyboard {
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 15px;
	background: linear-gradient(to right, #ececec, #fafafa, #ececec);
	border: 1px solid #e9e9e9;
	border-radius: 10px;
	box-shadow: inset 0 0 12px #f3f3f3, 0 12px 0 #bbb, 4px 12px rgba(0, 0, 0, 0.2), -4px 12px rgba(0, 0, 0, 0.2);
	overflow-x: auto;
}

.keyboard .line {
	display: flex;
}

.keyboard .key {
	position: relative;
	top: 0;
	width: 55px;
	height: 50px;
	align-content: center;
	text-align: center;
	border: 1px solid #d1d1d1;
	border-radius: 8px;
	margin: 5px 4px;
	background-color: #f5f5f5;
	font-size: 15px;
	font-weight: 700;
	box-shadow: 0 6px 0 #bbb, 0 8px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	user-select: none;
	transition: all 0.1s ease;
}

.keyboard .key:hover {
	background-color: #f9f9f9;
}

.keyboard .key:active {
	top: 4px;
	box-shadow: 0 2px 0 #bbb, 0 3px 5px rgba(0, 0, 0, 0.2);
}

.w-75 {
	width: 75px !important;
}

.w-90 {
	width: 90px !important;
}

.w-105 {
	width: 105px !important;
}

.w-137 {
	width: 137.5px !important;
}

.w-340 {
	width: 340px !important;
}

.mb-15 {
	margin-bottom: 15px !important;
}

.mr-20 {
	margin-right: 20px !important;
}

.mr-60 {
	margin-right: 60px !important;
}

.mr-85 {
	margin-right: 85px !important;
}
</style>

<div class="keyboard">
	<div class="line mb-15">
		<div class="key">Esc</div>
		<div class="mr-60"></div>
		<div class="key">F1</div>
		<div class="key">F2</div>
		<div class="key">F3</div>
		<div class="key">F4</div>
		<div class="mr-20"></div>
		<div class="key">F5</div>
		<div class="key">F6</div>
		<div class="key">F7</div>
		<div class="key">F8</div>
		<div class="mr-20"></div>
		<div class="key">F9</div>
		<div class="key">F10</div>
		<div class="key">F11</div>
		<div class="key">F12</div>
		<div class="mr-20"></div>
		<div class="key">PrtSc</div>
		<div class="key">ScrLk</div>
		<div class="key">Pause</div>
	</div>
	<div class="line">
		<div class="key">`</div>
		<div class="key">1</div>
		<div class="key">2</div>
		<div class="key">3</div>
		<div class="key">4</div>
		<div class="key">5</div>
		<div class="key">6</div>
		<div class="key">7</div>
		<div class="key">8</div>
		<div class="key">9</div>
		<div class="key">0</div>
		<div class="key">-</div>
		<div class="key">=</div>
		<div class="key w-90">Backspace</div>
		<div class="mr-20"></div>
		<div class="key">Ins</div>
		<div class="key">Home</div>
		<div class="key">PgUp</div>
	</div>
	<div class="line">
		<div class="key w-90">Tab</div>
		<div class="key">Q</div>
		<div class="key">W</div>
		<div class="key">E</div>
		<div class="key">R</div>
		<div class="key">T</div>
		<div class="key">Y</div>
		<div class="key">U</div>
		<div class="key">I</div>
		<div class="key">O</div>
		<div class="key">P</div>
		<div class="key">[</div>
		<div class="key">]</div>
		<div class="key">\</div>
		<div class="mr-20"></div>
		<div class="key">Del</div>
		<div class="key">End</div>
		<div class="key">PgDn</div>
	</div>
	<div class="line">
		<div class="key w-105">Caps Lock</div>
		<div class="key">A</div>
		<div class="key">S</div>
		<div class="key">D</div>
		<div class="key">F</div>
		<div class="key">G</div>
		<div class="key">H</div>
		<div class="key">J</div>
		<div class="key">K</div>
		<div class="key">L</div>
		<div class="key">;</div>
		<div class="key">'</div>
		<div class="key w-105">Enter</div>
	</div>
	<div class="line">
		<div class="key w-137">Shift</div>
		<div class="key">Z</div>
		<div class="key">X</div>
		<div class="key">C</div>
		<div class="key">V</div>
		<div class="key">B</div>
		<div class="key">N</div>
		<div class="key">M</div>
		<div class="key">,</div>
		<div class="key">.</div>
		<div class="key">/</div>
		<div class="key w-137">Shift</div>
		<div class="mr-85"></div>
		<div class="key">↑</div>
	</div>
	<div class="line">
		<div class="key w-75">Ctrl</div>
		<div class="key w-75">Win</div>
		<div class="key w-75">Alt</div>
		<div class="key w-340"></div>
		<div class="key w-75">Alt</div>
		<div class="key w-75">Fn</div>
		<div class="key w-75">Fn2</div>
		<div class="key w-75">Ctrl</div>
		<div class="mr-20"></div>
		<div class="key">←</div>
		<div class="key">↓</div>
		<div class="key">→</div>
	</div>
</div>