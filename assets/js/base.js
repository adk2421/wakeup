/**
 * =================================================================
 * [ base.js ]
 * : 기본 스크립트
 * 
 * @author adk2421
 * @since 2026-02-02
 * =================================================================
 */

// 페이지 로드 후 최초 실행
window.onload = () => {
	customEvent.init();
	codeFormatter.tab();
};

/**
 * [ customEvent ]
 * : 커스텀 이벤트
 * 
 * @author adk2421
 * @since 2026-02-02
 */
const customEvent = {
	/**
	 * [ customEvent.init ]
	 * : 이벤트 초기화
	 */
	init: () => {
		customEvent.popstate();
	},

	/**
	 * [ customEvent.popstate ]
	 * : 뒤로가기 이벤트
	 */
	popstate: () => {
		window.addEventListener("popstate", () => {
			location.reload();
		});
	}
}

/**
 * [ codeFormatter ]
 * : 코드 포매터
 * 
 * @author adk2421
 * @since 2026-02-02
 */
const codeFormatter = {
	/**
	 * [ codeFormatter.tab ]
	 * : 탭 포매터
	 */
	tab: () => {
		const codeList = document.querySelectorAll("code");

		if (codeList) {
			codeList.forEach((code) => {
				const codePre = code.querySelector(".lineno") ? code.querySelector("td.code pre") : code.closest("pre");
				const replaceHtml = code.querySelector(".lineno") ? codePre : code;

				const prefixTabCnt = (codePre.textContent.split("\n")[0].match(/\t/g) || []).length;
				replaceHtml.innerHTML = replaceHtml.innerHTML
												.replace("\t".repeat(prefixTabCnt), "")
												.replaceAll("\n" + "\t".repeat(prefixTabCnt), "\n")
												.replace(/\n*\t*$/, "");

				if (code.querySelector(".lineno")) {
					const lineNoCnt = code.querySelector("td.code pre").innerHTML.split("\n").length + 1;
					let lineNoText = "";

					for (let i = 1; i < lineNoCnt; i++) {
						lineNoText += i + "\n";
					}

					code.querySelector(".lineno").innerHTML = lineNoText;
				}
			});
		}
	}
}