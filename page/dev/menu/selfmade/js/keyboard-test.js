// 이전화면 이동
document.querySelector(".back").addEventListener("click", () => movePageEvent.moveBack());

// Keydown 이벤트
document.addEventListener("keydown", (e) => {
	e.preventDefault(); // 브라우저 기능 방지

	let keyCode = e.code;

	// 오른쪽 Shift 키 처리
	if (keyCode == "" && e.key == "Shift") {
		keyCode = "ShiftRight";
	}

	const keys = document.querySelectorAll(".merge[data-value=" + keyCode);

	// 병합키 처리
	if (keys.length > 1) {
		keys.forEach((key) => {
			key.classList.add("active", "check");
		});
		printLog(keyCode);

	// 일반키 처리
	} else {
		const key = document.querySelector("div[data-value=" + keyCode + "]");
		if (key) {
			key.classList.add("active", "check");
			printLog(keyCode);
		}

		// 왼쪽 Windows 키 처리
		if (keyCode == "MetaLeft")
			key.classList.remove("active");
	}
});

// Keyup 이벤트
document.addEventListener("keyup", (e) => {
	let keyCode = e.code;

	// 오른쪽 Shift 키 처리
	if (keyCode == "" && e.key == "Shift") {
		keyCode = "ShiftRight";
	}

	const keys = document.querySelectorAll(".merge[data-value=" + keyCode);

	// 병합키 처리
	if (keys.length > 1) {
		keys.forEach((key) => {
			key.classList.remove("active");
		});

	// 일반키 처리
	} else {
		// 오른쪽 Shift 키 처리
		if (keyCode == "" && e.key == "Shift")
			keyCode = "ShiftRight";

		const key = document.querySelector("div[data-value=" + keyCode + "]");
		if (key) {
			key.classList.remove("active");
		}

		// PrintScreen 키 처리
		if (keyCode == "PrintScreen") {
			key.classList.add("check");
			printLog(keyCode);
		}
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