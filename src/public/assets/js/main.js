function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(window).scroll(function(){
    if ($(window).scrollTop() > 220) {
        $('.header-scroll').addClass('show-scroll');
        $('.bottom-scroll').addClass('show-scroll');
        $('.bottom-mobile-scroll').addClass('show-mobile-scroll');
        $('.body').addClass('body-offset');
        if ($(window).scrollTop() > 8200) {
            $('.bottom-scroll').removeClass('show-scroll');
            $('.bottom-mobile-scroll').removeClass('show-mobile-scroll');
        }
        else {
            $('.bottom-scroll').addClass('show-scroll');
            $('.bottom-mobile-scroll').addClass('show-mobile-scroll');
        }
    }
    else {
        $('.header-scroll').removeClass('show-scroll');
        $('.bottom-scroll').removeClass('show-scroll');
        $('.bottom-mobile-scroll').removeClass('show-mobile-scroll');
    }
});

$(".menu-img").click(function() {
    if($(".menu-img").hasClass("menu-active")){
        $(".top-panel").removeClass("show-menu"); 
        $("body").removeClass("body-offset"); 
        $(".scroll-menu-img").removeClass("menu-active");
        $(".menu-img").removeClass("menu-active");
    }else{
        $(".top-panel").addClass("show-menu"); 
        $("body").addClass("body-offset"); 
        $(".scroll-menu-img").addClass("menu-active");
        $(".menu-img").addClass("menu-active");
    }
});

$(".scroll-menu-img").click(function() {
    if($(".scroll-menu-img").hasClass("menu-active")){
        $(".top-panel").removeClass("show-menu"); 
        $("body").removeClass("body-offset"); 
        $(".scroll-menu-img").removeClass("menu-active");
        $(".menu-img").removeClass("menu-active");
    }else{
        $(".top-panel").addClass("show-menu"); 
        $("body").addClass("body-offset"); 
        $(".scroll-menu-img").addClass("menu-active");
        $(".menu-img").addClass("menu-active");
    }
});

$(".menu-item").click(function() {
    $(".top-panel").removeClass("show-menu"); 
    $("body").removeClass("body-offset"); 
    $(".scroll-menu-img").removeClass("menu-active");
    $(".menu-img").removeClass("menu-active");
});

$(function(){
    $("#call-master-input").mask("+38 (099) 99 99 999", {placeholder: "-" });
});