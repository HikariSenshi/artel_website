$(".call-back-btn").click(function() {
    $(".call-back-modal").show(); 
});

$(".call-back-mobile-img").click(function() {
    $(".call-back-modal").show(); 
});

$(".bottom-mobile-call-back").click(function() {
    $(".call-back-modal").show(); 
});

$(".call-back-mobile-menu").click(function() {
    $(".call-back-modal").show(); 
});

$(".additionally-see-more").click(function() {
    $(".call-back-modal").show(); 
});

$(".call-back-modal-exit").click(function() {
    $(".call-back-modal").hide(); 
});

$(".viewing-btn").click(function() {
    $(".presentation-modal").show(); 
});

$(".presentation-modal-exit").click(function() {
    $(".presentation-modal").hide(); 
});

$(".bottom-scroll-ask").click(function() {
    $(".ask-modal").show(); 
});

$(".ask-modal-exit").click(function() {
    $(".ask-modal").hide(); 
});

$(function(){
    $("#call-back-phone").mask("+38 (099) 99 99 999", {placeholder: "-" });
});

$(function(){
    $("#presentation-phone").mask("+38 (099) 99 99 999", {placeholder: "-" });
});

$(function(){
    $("#ask-phone").mask("+38 (099) 99 99 999", {placeholder: "-" });
});



$('.see-more-social').click(function(){
	$('body').addClass('locked');
	$('.social-modal').show();
});

$('.see-more-family').click(function(){
	$('body').addClass('locked');
	$('.family-modal').show();
});

$('.see-more-family-plus').click(function(){
	$('body').addClass('locked');
	$('.family-plus-modal').show();
});

$('#social-package-img').click(function(){
	$('body').addClass('locked');
	$('.social-modal').show();
});

$('#family-package-img').click(function(){
	$('body').addClass('locked');
	$('.family-modal').show();
});

$('#family-plus-package-img').click(function(){
	$('body').addClass('locked');
	$('.family-plus-modal').show();
});

$('.social-modal-close').click(function(){
	$('body').removeClass('locked');
	$('.social-modal').hide();
});

$('.family-modal-close').click(function(){
	$('body').removeClass('locked');
	$('.family-modal').hide();
});

$('.family-plus-modal-close').click(function(){
	$('body').removeClass('locked');
	$('.family-plus-modal').hide();
});


$(function(){
    $('input[name="phone-social"]').mask("+38 (099) 99 99 999", {placeholder: "-" });
});

$(function(){
    $('input[name="phone-family"]').mask("+38 (099) 99 99 999", {placeholder: "-" });
});

$(function(){
    $('input[name="phone-family-plus"]').mask("+38 (099) 99 99 999", {placeholder: "-" });
});


