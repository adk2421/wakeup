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
				movePageEvent.page(clickLink);

			// 새 창 열기
			} else if (el.closest(".blank")) {
				e.preventDefault(); // 페이지 새로고침 방지

				const clickLink = el.closest(".blank");
				movePageEvent.singlePage(clickLink);

			// 이미지 확대
			} else if (el.closest("img") && el.closest(".post-img")) {
				const clickImage = el.closest("img");
				popupEvent.dimImage(clickImage);
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
	 * [ movePageEvent.home ]
	 * : 홈 이동
	 */
	home: () => {
		const menuAll = document.querySelector(".menu-all");
		menuAll.click();
	},

	/**
	 * [ movePageEvent.page ]
	 * : 페이지 이동
	 */
	page: (clickLink) => {
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
	 * [ movePageEvent.singlePage ]
	 * : 단일 페이지 이동
	 */
	singlePage: (clickLink) => {
		const url = clickLink.getAttribute("data-link");
		location.href = url;
	},

	/**
	 * [ movePageEvent.back ]
	 * : 이전 페이지 이동
	 */
	back: () => {
		history.back();
	}
}

/**
 * [ popupEvent ]
 * : 팝업 이벤트
 * 
 * @author adk2421
 * @since 2026-03-19
 */
const popupEvent = {
	/**
	 * [ popupEvent.dimImage ]
	 * : Dim 이미지 팝업
	 */
	dimImage: (image) => {
		const dim = document.querySelector(".dim");

		// dim 위에 표시할 이미지 추가
		const imageDiv = document.createElement("div");
		imageDiv.classList.add("dim-img");
		imageDiv.insertAdjacentElement("afterbegin", image.cloneNode(false));

		// dim 화면 출력 및 스크롤 비활성화 적용
		dim.style.display = "block";
		dim.insertAdjacentElement("afterbegin", imageDiv);
		document.querySelector("body").style.overflow = "hidden";

		// 다시 화면을 눌렀을 때 dim 화면 숨김 및 스크롤 활성화
		dim.addEventListener("click", () => {
			dim.style.display = "none";
			imageDiv.remove();
			document.querySelector("body").style.overflow = "auto";
		})
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