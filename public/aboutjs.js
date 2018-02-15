//Reference
//https://codepen.io/dudleystorey/pen/RRwryd


function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).scroll(function(){
    if(isScrolledIntoView($(".skillset"))){
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
    }
    scrollFunction();
    if (window.pageYOffset > 0) {

        $(".bgimage").css("opacity", 1 - $(window).scrollTop() / 700);
        
        
  }
	
});



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
//From w3c School
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}