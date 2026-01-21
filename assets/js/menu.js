
// Click event
document.addEventListener("click", (e) => {

	// 'menu-all'
	if (e.target.closest(".menu-all")) {
		const clickMenuAll = e.target.closest(".menu-all");

		const menuSubjectList = document.querySelectorAll(".menu-subject");
		menuSubjectList.forEach((el) => {
			el.classList.remove("active");
			if (el.nextElementSibling) {
				el.nextElementSibling.style.display = "none";
			}
		});

		clickMenuAll.classList.add("active");
	}

	// 'menu-subject'
	if (e.target.closest(".menu-subject")) {
		const clickMenuSubject = e.target.closest(".menu-subject");
		const isActive = clickMenuSubject.classList.contains("active");

		const clickMenuAll = document.querySelector(".menu-all");
		clickMenuAll.classList.remove("active");

		const menuSubjectList = document.querySelectorAll(".menu-subject");
		menuSubjectList.forEach((el) => {
			el.classList.remove("active");
			if (el.nextElementSibling) {
				el.nextElementSibling.style.display = "none";
			}
		});
		
		if (!isActive) {
			clickMenuSubject.classList.add("active");
			clickMenuSubject.nextElementSibling.style.display = "block";

		} else {
			clickMenuSubject.nextElementSibling.style.display = "none";
		}
	}

});