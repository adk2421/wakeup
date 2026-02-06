---
layout: post
categories: [TEMPLATE, CSS]
title: "키보드 테스트"
author: 김지성
date: 2026-02-05 16:30:00 +0900
thumbnail: /page/template/css/images/thumbnail-pantograph.jpg
---

<style>
.monitor {
	padding: 15px;
	margin: 20px;
	background: #f6f3ec;
	border: 2px solid #cacaca;
	border-radius: 10px;
}

.monitor .log {
	width: 60vw;
	height: 240px;
	padding: 15px 20px;
	background: #444;
	border: 1px solid #e9e9e9;
	border-radius: 5px;
	color: #e9e9e9;
}

.monitor .log .cursor {
	width: 5px;
	height: 20px;
	background: #e9e9e9;
	animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
	0% { opacity: 1; }
	100% { opacity: 0; }
}

.monitor .mark {
	display: flex;
    align-items: center;
    justify-content: center;
	padding-top: 15px;
}

.monitor .mark img {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}

.monitor .mark span {
	font-size: 13px;
	font-weight: 700;
}

.keyboard {
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 15px;
	margin: 20px;
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

.keyboard .key.active {
	top: 4px;
	background-color: #79beff !important;
	box-shadow: 0 2px 0 #bbb, 0 3px 5px rgba(0, 0, 0, 0.2);
}

.keyboard .key.check {
	background-color: #999;
}

.w-80 {
	width: 80px !important;
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

.w-395 {
	width: 395px !important;
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

<div class="item-box">
	<div class="monitor">
		<div class="log">
			<div>[ Keyboard Test ]</div>
			<div>Press any key..</div>
			<div class="cursor"></div>
		</div>
		<div class="mark">
			<img src="{{ site.settings.url.img | relative_url }}/icon/favicon.png" alt="네임아이콘">
			<span>WakeUp</span>
		</div>
	</div>
	<div>
		<div class="keyboard">
			<div class="line mb-15">
				<div class="key" data-value="Escape">Esc</div>
				<div class="mr-60"></div>
				<div class="key" data-value="F1">F1</div>
				<div class="key" data-value="F2">F2</div>
				<div class="key" data-value="F3">F3</div>
				<div class="key" data-value="F4">F4</div>
				<div class="mr-20"></div>
				<div class="key" data-value="F5">F5</div>
				<div class="key" data-value="F6">F6</div>
				<div class="key" data-value="F7">F7</div>
				<div class="key" data-value="F8">F8</div>
				<div class="mr-20"></div>
				<div class="key" data-value="F9">F9</div>
				<div class="key" data-value="F10">F10</div>
				<div class="key" data-value="F11">F11</div>
				<div class="key" data-value="F12">F12</div>
				<div class="mr-20"></div>
				<div class="key" data-value="PrintScreen">PrtSc</div>
				<div class="key" data-value="ScrollLock">ScrLk</div>
				<div class="key" data-value="Pause">Pause</div>
			</div>
			<div class="line">
				<div class="key" data-value="Backquote">`</div>
				<div class="key" data-value="Digit1">1</div>
				<div class="key" data-value="Digit2">2</div>
				<div class="key" data-value="Digit3">3</div>
				<div class="key" data-value="Digit4">4</div>
				<div class="key" data-value="Digit5">5</div>
				<div class="key" data-value="Digit6">6</div>
				<div class="key" data-value="Digit7">7</div>
				<div class="key" data-value="Digit8">8</div>
				<div class="key" data-value="Digit9">9</div>
				<div class="key" data-value="Digit0">0</div>
				<div class="key" data-value="Minus">-</div>
				<div class="key" data-value="Equal">=</div>
				<div class="key w-90" data-value="Backspace">Backspace</div>
				<div class="mr-20"></div>
				<div class="key" data-value="Insert">Ins</div>
				<div class="key" data-value="Home">Home</div>
				<div class="key" data-value="PageUp">PgUp</div>
			</div>
			<div class="line">
				<div class="key w-90" data-value="Tab">Tab</div>
				<div class="key" data-value="KeyQ">Q</div>
				<div class="key" data-value="KeyW">W</div>
				<div class="key" data-value="KeyE">E</div>
				<div class="key" data-value="KeyR">R</div>
				<div class="key" data-value="KeyT">T</div>
				<div class="key" data-value="KeyY">Y</div>
				<div class="key" data-value="KeyU">U</div>
				<div class="key" data-value="KeyI">I</div>
				<div class="key" data-value="KeyO">O</div>
				<div class="key" data-value="KeyP">P</div>
				<div class="key" data-value="BracketLeft">[</div>
				<div class="key" data-value="BracketRight">]</div>
				<div class="key" data-value="Backslash">\</div>
				<div class="mr-20"></div>
				<div class="key" data-value="Delete">Del</div>
				<div class="key" data-value="End">End</div>
				<div class="key" data-value="PageDown">PgDn</div>
			</div>
			<div class="line">
				<div class="key w-105" data-value="CapsLock">Caps Lock</div>
				<div class="key" data-value="KeyA">A</div>
				<div class="key" data-value="KeyS">S</div>
				<div class="key" data-value="KeyD">D</div>
				<div class="key" data-value="KeyF">F</div>
				<div class="key" data-value="KeyG">G</div>
				<div class="key" data-value="KeyH">H</div>
				<div class="key" data-value="KeyJ">J</div>
				<div class="key" data-value="KeyK">K</div>
				<div class="key" data-value="KeyL">L</div>
				<div class="key" data-value="Semicolon">;</div>
				<div class="key" data-value="Quote">'</div>
				<div class="key w-105" data-value="Enter">Enter</div>
			</div>
			<div class="line">
				<div class="key w-137" data-value="ShiftLeft">Shift</div>
				<div class="key" data-value="KeyZ">Z</div>
				<div class="key" data-value="KeyX">X</div>
				<div class="key" data-value="KeyC">C</div>
				<div class="key" data-value="KeyV">V</div>
				<div class="key" data-value="KeyB">B</div>
				<div class="key" data-value="KeyN">N</div>
				<div class="key" data-value="KeyM">M</div>
				<div class="key" data-value="Comma">,</div>
				<div class="key" data-value="Period">.</div>
				<div class="key" data-value="Slash">/</div>
				<div class="key w-137" data-value="ShiftRight">Shift</div>
				<div class="mr-85"></div>
				<div class="key" data-value="ArrowUp">↑</div>
			</div>
			<div class="line">
				<div class="key w-80" data-value="ControlLeft">Ctrl</div>
				<div class="key w-80" data-value="MetaLeft">Win</div>
				<div class="key w-80" data-value="AltLeft">Alt</div>
				<div class="key w-395" data-value="Space"></div>
				<div class="key w-80" data-value="AltRight">Alt</div>
				<div class="key w-80" data-value="ContextMenu">Menu</div>
				<div class="key w-80" data-value="ControlRight">Ctrl</div>
				<div class="mr-20"></div>
				<div class="key" data-value="ArrowLeft">←</div>
				<div class="key" data-value="ArrowDown">↓</div>
				<div class="key" data-value="ArrowRight">→</div>
			</div>
		</div>
	</div>
</div>

<script>
	// Keydown 이벤트
	document.addEventListener("keydown", (e) => {
		e.preventDefault(); // 브라우저 기능 방지

		let keyCode = e.code;

		// 오른쪽 Shift 키 처리
		if (keyCode == "" && e.key == "Shift")
			keyCode = "ShiftRight";

		const clickKey = document.querySelector("div[data-value=" + keyCode + "]");
		if (clickKey) {
			clickKey.classList.add("active", "check");
			printLog(e.key);
		}

		// 왼쪽 Windows 키 처리
		if (keyCode == "MetaLeft")
			clickKey.classList.remove("active");
	});

	// Keyup 이벤트
	document.addEventListener("keyup", (e) => {
		let keyCode = e.code;

		// 오른쪽 Shift 키 처리
		if (keyCode == "" && e.key == "Shift")
			keyCode = "ShiftRight";

		const clickKey = document.querySelector("div[data-value=" + keyCode + "]");
		if (clickKey) clickKey.classList.remove("active");

		// PrintScreen 키 처리
		if (keyCode == "PrintScreen") {
			clickKey.classList.add("check");
			printLog(e.key);
		}
	});

	// Contextmenu 기능 비활성화
	window.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	});

	// log 출력
	const printLog = (text) => {
		const log = document.querySelector(".log");
		const logCnt = log.children.length;
		const logMaxCnt = 10;

		if (logCnt >= logMaxCnt) {
			log.children[0].remove();
		}
		
		const logText = document.createElement("div");
		logText.textContent = "> 입력 키 : " + text;

		const cursor = document.querySelector(".cursor");
		cursor.before(logText)
	}
</script>