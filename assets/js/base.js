---
layout: none
---

let posts = [];

async function initPosts() {
	try {
		const response = await fetch("{{ '/assets/data/post.json' | relative_url }}");
		if (!response.ok) throw new Error("네트워크 응답에 문제가 있습니다.");

		posts = await response.json();

		console.log("데이터 로드 완료:", posts);

	} catch (error) {
		console.error("데이터를 가져오는 중 오류 발생:", error);
	}
}
initPosts();

// 뒤로가기 시, 화면 로드
window.addEventListener("popstate", () => {
	localStorage.setItem("backEvent", true);
	location.reload();
});
// 새로고침 시, 화면 유지
window.addEventListener("beforeunload", (e) => {
	localStorage.setItem("beforeunload_body", document.body.innerHTML);
});
window.onload = () => {
	if (localStorage.getItem("backEvent")) {
		localStorage.removeItem("backEvent");
		location.reload();

	} else if (localStorage.getItem("beforeunload_body")) {
		document.body.innerHTML = localStorage.getItem("beforeunload_body");
		localStorage.removeItem("beforeunload_body");
	}
};