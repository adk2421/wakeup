
window.addEventListener("load", () => {
	codeFormat.tab();
});

// Code Format
const codeFormat = {
	tab: () => {
		if (document.querySelector("code")) {
			console.log("Tab Formatter");
			(document.querySelectorAll("pre")[2].textContent.split("\n")[0].match(/\t/g) || []).length;
			document.querySelectorAll("pre code")[2].innerHTML = document.querySelectorAll("pre code")[2].innerHTML.replaceAll("\n\t\t", "\n");
		}
	}
}