---
layout: single-page
categories: [dev, selfmade]
title: "개발 용어 사전"
author: 김지성
date: 2026-03-24 18:25:00 +0900
thumbnail: /page/dev/menu/selfmade/images/thumbnail-dev-term-dictionary.jpg
link-type: blank
skills: [HTML, CSS, JAVASCRIPT]
---

<link rel="stylesheet" href="{{ "/page/dev/menu/selfmade/css/dev-term-dictionary.css" | relative_url }}">

<div class="center">
	<form class="search-form">
		<div class="search-box">
			<h2>키워드</h2>
			<div class="keyword-box">
				<input type="text" class="keyword" name="keyword">
				<div class="auto-complete">
					<p class='term-empty'>검색할 단어를 입력해주세요.</p>
				</div>
			</div>
		</div>
	</form>

	<div class="term-list">
		<div class="term-box">
			<p class="term-title">API (Application Programming Interface)</p>
			<p class="term-content">
				응용 프로그램 간에 데이터를 주고받기 위한 통로이자 규약입니다.
				서버의 기능을 외부에서 사용할 수 있도록 정해진 규칙에 따라 입출력을 처리하는 접점 역할을 합니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">DB (Database)</p>
			<p class="term-content">
				데이터를 효율적으로 관리하기 위해 구조화하여 저장한 데이터의 집합소입니다.
				여러 사용자가 동시에 접근하여 데이터를 검색, 삽입, 수정, 삭제할 수 있는 체계를 제공합니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">HTTP (HyperText Transfer Protocol)</p>
			<p class="term-content">
				웹 브라우저와 서버가 데이터를 주고받기 위해 사용하는 표준 통신 규약입니다.
				클라이언트가 요청(Request)을 보내면 서버가 응답(Response)하는 방식으로 동작합니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">IDE (Integrated Development Environment)</p>
			<p class="term-content">
				코드 작성, 디버깅, 빌드 등 개발에 필요한 모든 도구를 하나로 합친 통합 개발 환경입니다.
				대표적으로 IntelliJ, VS Code 등이 있으며 개발 생산성을 높여주는 다양한 편의 기능을 제공합니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">디버깅 (Debugging)</p>
			<p class="term-content">
				프로그램에서 발생하는 논리적 오류나 결함(버그)을 찾아내고 수정하는 작업입니다.
				코드의 실행 흐름을 단계별로 추적하며 원인을 파악하고 정상 작동하도록 개선하는 필수 과정입니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">환경 변수 (Environment Variable)</p>
			<p class="term-content">
				운영체제나 실행 환경에서 참조하는 동적인 설정값으로, 코드 외부에 저장됩니다.
				DB 비밀번호나 API 키 같은 민감한 정보를 코드에 노출하지 않고 관리할 때 주로 사용합니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">오픈 소스 (Open Source)</p>
			<p class="term-content">
				누구나 자유롭게 확인, 수정, 배포할 수 있도록 소스 코드가 공개된 소프트웨어입니다.
				커뮤니티의 협업으로 발전하며, 많은 프레임워크와 라이브러리가 이 형태로 관리됩니다.
			</p>
		</div>
		<div class="term-box">
			<p class="term-title">JSON (JavaScript Object Notation)</p>
			<p class="term-content">
				데이터를 저장하거나 전송할 때 사용하는 가볍고 읽기 쉬운 텍스트 기반의 데이터 형식입니다.
				키(Key)와 값(Value)의 쌍으로 이루어져 있어, 서로 다른 언어 간에도 데이터를 주고받기 편리합니다.
			</p>
		</div>
	</div>
</div>

<script src="/wakeup/page/dev/menu/selfmade/js/dev-term-dictionary.js"></script>