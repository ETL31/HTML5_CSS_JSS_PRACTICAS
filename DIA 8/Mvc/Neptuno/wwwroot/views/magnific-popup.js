"use strict";

$(document).ready(function() {
	$("#YoutubeLnk, #VimeoLnk, #GmapsLnk").magnificPopup({
		disableOn: 700,
		type: "iframe",
		preloader: false,
		fixedContentPos: false
	});
});
