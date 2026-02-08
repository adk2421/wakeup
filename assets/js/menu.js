/**
 * =================================================================
 * [ menu.js ]
 * : 메뉴 스크립트
 * 
 * @author adk2421
 * @since 2026-01-21
 * =================================================================
 */

// 메뉴 리사이즈 변수
let timer = null;
let beforeWidth = 0;

// 메뉴 리사이즈 이벤트 추가
window.addEventListener("resize", (e) => {
	const el = e.target;

	clearTimeout(timer);
	timer = setTimeout(() => {
		// 웹 사이즈 -> 모바일 사이즈
		if (el.innerWidth < 768 && beforeWidth >= 768) {
			document.querySelector(".menu-bar .menu").style.display = "none";
			document.querySelector(".menu-bar .menu-icon").classList.remove("active");

		// 모바일 사이즈 -> 웹 사이즈
		} else if (el.innerWidth >= 768 && beforeWidth < 768) {
			document.querySelector(".menu-bar .menu").style.display = "block";
			document.querySelector(".page").style.display = "flex";
		}

		beforeWidth = innerWidth;
	}, 100);
});

// 메뉴 클릭 이벤트 추가
document.addEventListener("click", (e) => {
	const el = e.target;

	// [home]
	if (el.closest(".home")) {
		e.preventDefault(); // 페이지 새로고침 방지

		movePageEvent.moveHome();
	}

	// [menu-icon]
	if (el.closest(".menu-icon")) {
		const menuIcon = el.closest(".menu-icon");
		menuEvent.toggleMenuIcon(menuIcon);
	}

	// [menu-all]
	if (el.closest(".menu-all")) {
		const menuAll = el.closest(".menu-all");
		menuEvent.clickMenuAll(menuAll);
	}

	// [menu-subject]
	if (el.closest(".menu-subject")) {
		const menuSubject = el.closest(".menu-subject");
		menuEvent.clickMenuSubject(menuSubject);
	}

	// [menu-item]
	if (el.closest(".menu-item")) {
		const menuItem = el.closest(".menu-item");
		menuEvent.clickMenuItem(menuItem);
	}
});

/**
 * [ menuEvent ]
 * : 메뉴 이벤트
 * 
 * @author adk2421
 * @since 2026-01-21
 */
const menuEvent = {
	/**
	 * [ menuEvent.toggleMenuIcon ]
	 * : 메뉴 아이콘 토글
	 */
	toggleMenuIcon: (menuIcon) => {
		const menu = document.querySelector(".menu-bar .menu");
		const page = document.querySelector(".page");

		if (!menuIcon.classList.contains("active")) {
			menuIcon.classList.add("active");
			menu.style.display = "block";
			page.style.display = "none";

		} else {
			menuIcon.classList.remove("active");
			menu.style.display = "none";
			page.style.display = "flex";
		}
	},

	/**
	 * [ menuEvent.closeMenuIcon ]
	 * : 메뉴 아이콘 닫기
	 */
	closeMenuIcon: () => {
		const nav = document.querySelector(".nav");

		if (nav.offsetWidth || nav.offsetHeight || nav.getClientRects().length) {
			document.querySelector(".menu-icon").classList.remove("active");
			document.querySelector(".menu-bar .menu").style.display = "none";
			document.querySelector(".page").style.display = "flex";
		}
	},

	/**
	 * [ menuEvent.clickMenuAll ]
	 * : All 메뉴 클릭
	 */
	clickMenuAll: (menuAll) => {
		const menuItemList = document.querySelectorAll(".menu-item");
		menuItemList.forEach((menuItem) => {
			menuItem.classList.remove("active");
		});

		menuAll.classList.add("active");
		menuEvent.closeMenuIcon();
	},

	/**
	 * [ menuEvent.clickMenuSubject ]
	 * : 메뉴 주제 클릭
	 */
	clickMenuSubject: (menuSubject) => {
		const isActive = menuSubject.classList.contains("active");

		if (!isActive) {
			menuSubject.classList.add("active");
			menuSubject.nextElementSibling.classList.add("visible");
			menuSubject.nextElementSibling.classList.remove("invisible");
			menuSubject.nextElementSibling.style.display = "block";

		} else {
			menuSubject.classList.remove("active");
			menuSubject.nextElementSibling.classList.remove("visible");
			menuSubject.nextElementSibling.classList.add("invisible");
			setTimeout(() => {
				menuSubject.nextElementSibling.style.display = "none";
			}, 200);
		}
	},

	/**
	 * [ menuEvent.clickMenuItem ]
	 * : 메뉴 항목 클릭
	 */
	clickMenuItem: (menuItem) => {
		const menuAll = document.querySelector(".menu-all");
		menuAll.classList.remove("active");

		const menuItemList = document.querySelectorAll(".menu-item");
		menuItemList.forEach((menu) => {
			menu.classList.remove("active");
		});

		menuItem.classList.add("active");
		menuEvent.closeMenuIcon();
	},
}