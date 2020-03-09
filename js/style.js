


(function () {

	window.onscroll = function() {scrollPageNavbarFunction()};
	window.onresize = function() {scrollPageNavbarFunction(); pageNavbarLogo();};
	
	function scrollPageNavbarFunction(){

		console.log(document.getElementById("navbarOption").childNodes[1]);
		
		if(document.documentElement.scrollTop >= document.getElementById("intro").clientHeight - 95 || document.body.offsetWidth <= 576){
		
			document.getElementById("mainNavbar").classList.remove("dr-color-background-transparent");
			document.getElementById("mainNavbar").classList.add("dr-color-background-dark-blue");
			document.getElementById("mainNavbar").classList.remove("justify-content-center");
			
			document.getElementById("navLogo").style.display = "block";

			document.getElementById("navbarOption").childNodes[1].classList.remove("mx-auto");
			document.getElementById("navbarOption").childNodes[1].classList.add("ml-auto");
			
		}
		else {
			document.getElementById("mainNavbar").classList.remove("dr-color-background-dark-blue");
			document.getElementById("mainNavbar").classList.add("dr-color-background-transparent");
			document.getElementById("mainNavbar").classList.add("justify-content-center");

			document.getElementById("navbarOption").childNodes[1].classList.add("mx-auto");
			document.getElementById("navbarOption").childNodes[1].classList.remove("ml-auto");
			document.getElementById("navLogo").style.display = "none";
		}

		
	};


	function pageNavbarLogo() {
		
		if(document.body.offsetWidth <= 576){
			document.getElementById("dr-nav").classList.add("sticky-top");
			document.getElementById("dr-nav").classList.remove("fixed-top");
			document.getElementById("mainNavbar").classList.add("px-3");
			document.getElementById("mainNavbar").classList.remove("px-5");
		}
		else {
			document.getElementById("dr-nav").classList.add("fixed-top");
			document.getElementById("dr-nav").classList.remove("sticky-top");
			document.getElementById("mainNavbar").classList.add("px-5");
			document.getElementById("mainNavbar").classList.remove("px-3");
		}	
	};
})();