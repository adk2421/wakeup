
// Click event
document.addEventListener("click", (e) => {
	const el = e.target;

	// 'menu-all'
	if (el.closest(".menu-all")) {
		const clickMenuAll = el.closest(".menu-all");
		menuClickEvent.menuAll(clickMenuAll);
	}

	// 'menu-subject'
	if (el.closest(".menu-subject")) {
		const clickMenuSubject = el.closest(".menu-subject");
		menuClickEvent.menuSubject(clickMenuSubject);
	}

	// 'menu-item'
	if (el.closest(".menu-item")) {
		const clickMenuItem = el.closest(".menu-item");
		menuClickEvent.menuItem(clickMenuItem);
	}
});

const menuClickEvent = {
	menuAll: (clickMenuAll) => {
		const menuItemList = document.querySelectorAll(".menu-item");
		menuItemList.forEach((menuItem) => {
			menuItem.classList.remove("active");
		});

		clickMenuAll.classList.add("active");
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
	},
}