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
		customEvent.click();
	},

	/**
	 * [ customEvent.popstate ]
	 * : 뒤로가기 이벤트
	 */
	popstate: () => {
		window.addEventListener("popstate", () => {
			location.reload();
		});
	},

	/**
	 * [ customEvent.click ]
	 * : 클릭 이벤트
	 */
	click: () => {
		document.addEventListener("click", (e) => {
			const el = e.target;

			// 페이지 이동
			if (el.closest(".link")) {
				e.preventDefault(); // 페이지 새로고침 방지
				
				const clickLink = el.closest(".link");
				movePageEvent.movePage(clickLink);

			// 새 창 열기
			} else if (el.closest(".blank")) {
				e.preventDefault(); // 페이지 새로고침 방지

				const clickLink = el.closest(".blank");
				movePageEvent.moveSinglePage(clickLink);
			}
		});
	}
}

/**
 * [ movePageEvent ]
 * : 페이지 이동 이벤트
 * 
 * @author adk2421
 * @since 2026-02-02
 */
const movePageEvent = {
	/**
	 * [ movePageEvent.moveHome ]
	 * : 홈 이동
	 */
	moveHome: () => {
		const menuAll = document.querySelector(".menu-all");
		menuAll.click();
	},

	/**
	 * [ movePageEvent.movePage ]
	 * : 페이지 이동
	 */
	movePage: (clickLink) => {
		const url = clickLink.getAttribute("data-link");
		history.pushState(null, "", url);

		fetch(url)
			.then(response => response.text())
			.then(html => {
				const parser = new DOMParser();
				const linkDoc = parser.parseFromString(html, "text/html");
				const linkContent = linkDoc.querySelector(".content").innerHTML;

				const page = document.querySelector(".content");
				page.animate([
					{ opacity: 1, transform: "translateY(0)" },
					{ opacity: 0, transform: "translateY(-8px)" }
				], { duration: 200 }).onfinish = () => {
					page.innerHTML = linkContent;
					codeFormatter.tab();
					page.animate([
						{ opacity: 0, transform: "translateY(-8px)" },
						{ opacity: 1, transform: "translateY(0)" }
					], { duration: 300 });
				};

				window.scrollTo(0, 0);
				document.title = linkDoc.title;
			})
			.catch(err => console.error("Error loading page:", err));
	},

	/**
	 * [ movePageEvent.moveSinglePage ]
	 * : 단일 페이지 이동
	 */
	moveSinglePage: (clickLink) => {
		const url = clickLink.getAttribute("data-link");
		location.href = url;
	},

	/**
	 * [ movePageEvent.moveBack ]
	 * : 이전 페이지 이동
	 */
	moveBack: () => {
		history.back();
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
				let targetCode = code.querySelector(".lineno") ? code.querySelector("td.code pre") : code;
				let replaceCodeHtml = targetCode.innerHTML;

				// 양 끝의 줄바꿈 및 탭 제거
				replaceCodeHtml = replaceCodeHtml.replace(/^\s*\n/, "").replace(/\s+$/, "");

				// 첫 줄을 기준으로 탭 개수 계산
				const prefixTabCnt = (replaceCodeHtml.split("\n")[0].match(/\t/g) || []).length;

				targetCode.innerHTML = replaceCodeHtml
											.replace("\t".repeat(prefixTabCnt), "")					// 첫 줄 앞부분 탭 제거
											.replaceAll("\n" + "\t".repeat(prefixTabCnt), "\n")		// 전체 앞부분 탭 제거

				// 라인번호가 존재하는 경우, 라인번호 개수 조정
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