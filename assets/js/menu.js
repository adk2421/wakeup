/* menu.js */

// Click event
document.addEventListener("click", (e) => {
	const el = e.target;

	// [home]
	if (el.closest(".home")) {
		e.preventDefault(); // 페이지 새로고침 방지

		movePageEvent.moveHome();
	}

	// [link]
	if (el.closest(".link")) {
		e.preventDefault(); // 페이지 새로고침 방지
		
		const clickLink = el.closest(".link");
		movePageEvent.movePage(clickLink);
	}

	// [menu-icon]
	if (el.closest(".menu-icon")) {
		const clickMenuIcon = el.closest(".menu-icon");
		clickMenuEvent.toggleMenuIcon(clickMenuIcon);
	}

	// [menu-all]
	if (el.closest(".menu-all")) {
		const clickMenuAll = el.closest(".menu-all");
		clickMenuEvent.menuAll(clickMenuAll);
	}

	// [menu-subject]
	if (el.closest(".menu-subject")) {
		const clickMenuSubject = el.closest(".menu-subject");
		clickMenuEvent.menuSubject(clickMenuSubject);
	}

	// [menu-item]
	if (el.closest(".menu-item")) {
		const clickMenuItem = el.closest(".menu-item");
		clickMenuEvent.menuItem(clickMenuItem);
	}
});

const movePageEvent = {
	moveHome: () => {
		const menuAll = document.querySelector(".menu-all");
		menuAll.click();
	},

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
	}
}

const clickMenuEvent = {
	toggleMenuIcon: (clickMenuIcon) => {
		const menu = document.querySelector(".menu-bar .menu");
		const page = document.querySelector(".page");

		if (!clickMenuIcon.classList.contains("active")) {
			clickMenuIcon.classList.add("active");
			menu.style.display = "block";
			page.style.display = "none";

		} else {
			clickMenuIcon.classList.remove("active");
			menu.style.display = "none";
			page.style.display = "flex";
		}
	},

	closeMenuIcon: () => {
		const nav = document.querySelector(".nav");

		if (nav.offsetWidth || nav.offsetHeight || nav.getClientRects().length) {
			document.querySelector(".menu-icon").classList.remove("active");
			document.querySelector(".menu-bar .menu").style.display = "none";
			document.querySelector(".page").style.display = "flex";
		}
	},

	menuAll: (clickMenuAll) => {
		const menuItemList = document.querySelectorAll(".menu-item");
		menuItemList.forEach((menuItem) => {
			menuItem.classList.remove("active");
		});

		clickMenuAll.classList.add("active");
		clickMenuEvent.closeMenuIcon();
	},

	menuSubject: (clickMenuSubject) => {
		const isActive = clickMenuSubject.classList.contains("active");

		if (!isActive) {
			clickMenuSubject.classList.add("active");
			clickMenuSubject.nextElementSibling.classList.add("visible");
			clickMenuSubject.nextElementSibling.classList.remove("invisible");
			clickMenuSubject.nextElementSibling.style.display = "block";

		} else {
			clickMenuSubject.classList.remove("active");
			clickMenuSubject.nextElementSibling.classList.remove("visible");
			clickMenuSubject.nextElementSibling.classList.add("invisible");
			setTimeout(() => {
				clickMenuSubject.nextElementSibling.style.display = "none";
			}, 200);
		}
	},

	menuItem: (clickMenuItem) => {
		const clickMenuAll = document.querySelector(".menu-all");
		clickMenuAll.classList.remove("active");

		const menuItemList = document.querySelectorAll(".menu-item");
		menuItemList.forEach((menuItem) => {
			menuItem.classList.remove("active");
		});

		clickMenuItem.classList.add("active");
		clickMenuEvent.closeMenuIcon();
	},
}

let timer = null;
let beforeWidth = 0;

// Resize event
window.addEventListener("resize", (e) => {
	const el = e.target;

	clearTimeout(timer);
	timer = setTimeout(() => {
		// Web -> Mobile
		if (el.innerWidth < 768 && beforeWidth >= 768) {
			document.querySelector(".menu-bar .menu").style.display = "none";
			document.querySelector(".menu-bar .menu-icon").classList.remove("active");

		// Mobile -> Web
		} else if (el.innerWidth >= 768 && beforeWidth < 768) {
			document.querySelector(".menu-bar .menu").style.display = "block";
			document.querySelector(".page").style.display = "flex";
		}

		beforeWidth = innerWidth;
	}, 100);
});