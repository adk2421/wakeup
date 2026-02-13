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
		printLog(keyCode);
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
		printLog(keyCode);
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