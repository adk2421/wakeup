const keywordInput = document.querySelector(".keyword");
const autoCompleteDiv = document.querySelector(".auto-complete");

// Keyword Input 이벤트
keywordInput.addEventListener("input", (e) => {
	const keyword = e.target.value.replaceAll(" ", "").toLowerCase();

	// 자동완성 목록 초기화
	autoCompleteDiv.replaceChildren();

	// 키워드를 입력하지 않은 경우, 문구 출력
	if (keyword === "") {
		autoCompleteDiv.insertAdjacentHTML("afterbegin", "<p class='term-empty'>검색할 단어를 입력해주세요.</p>");

	// 키워드를 입력한 경우
	} else {
		let autoCompleteList = "";

		// 키워드가 포함되어 있는 단어 추출
		devTerm.forEach((data) => {
			const title = data.title.replaceAll(" ", "").toLowerCase();

			if (title.includes(keyword)) {
				autoCompleteList += `<p class='term-title'>${data.title}</p>`;
			}
		});

		// 포함 단어가 존재하지 않는 경우, 문구 출력
		if (autoCompleteList.length === 0) {
			autoCompleteDiv.insertAdjacentHTML("afterbegin", "<p class='term-empty'>조회된 단어가 없습니다.</p>");

		// 포함 단어가 존재하는 경우, 자동완성 목록 출력
		} else {
			autoCompleteDiv.insertAdjacentHTML("afterbegin", autoCompleteList);
		}
	}
});

// Keyword Focus 이벤트
keywordInput.addEventListener("focus", (e) => {
	autoCompleteDiv.style.display = "block";
});

// Keyword Blur 이벤트
keywordInput.addEventListener("blur", (e) => {
	autoCompleteDiv.style.display = "none";
});