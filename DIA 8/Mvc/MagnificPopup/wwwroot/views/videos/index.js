$(document).ready(function() {
	$("#YoutubePopup, #VimeoPopup, #MapsPopup").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        //mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
