function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function () {
    $(".call-back-submit-btn").click(function(){
        // var name = $("#call-back-name").val();
        // var phone = $("#call-back-phone").val();
        // var source = "Заказать звонок";
        // $.ajax({
        //     type: "POST",
        //     url: "/assets/php/save.php",
        //     data: {
        //         name: name,
        //         phone: phone,
        //         source: source
        //     },
            // success: function () {
                $(".call-back-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".call-back-modal").removeClass("show-confirm"); 
                    $(".call-back-modal").hide(); 
                    }, 2000);
        //     }
        // });
    }); 

    $(".ask-submit-btn").click(function(){
        // var name = $("#ask-name").val();
        // var phone = $("#ask-phone").val();
        // var source = "Вопросы и ответы";
        // $.ajax({
        //     type: "POST",
        //     url: "../assets/php/save.php",
        //     data: {
        //         name: name,
        //         phone: phone,
        //         source: source
        //     },
        //     success: function () {
                $(".ask-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".ask-modal").removeClass("show-confirm"); 
                    $(".ask-modal").hide(); 
                    }, 2000);
        //     }
        // });
    }); 

    $(".call-master-btn").click(function(){
        // var phone = $("#call-master-input").val();
        // var source = "Бесплатный вызов мастера";
        // $.ajax({
        //     type: "POST",
        //     url: "../assets/php/save.php",
        //     data: {
        //         phone: phone,
        //         source: source
        //     },
        //     success: function () {
                $(".call-master").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".call-master").removeClass("show-confirm"); 
                    }, 2000);
            // }
        // });
    }); 

    $(".presentation-submit-btn").click(function(){
        // var name = $("#presentation-name").val();
        // var phone = $("#presentation-phone").val();
        // var source = "Записаться на просмотр";
        // $.ajax({
            // type: "POST",
            // url: "../assets/php/save.php",
            // data: {
            //     name: name,
            //     phone: phone,
            //     source: source
            // },
            // success: function () {
                $(".presentation-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".presentation-modal").removeClass("show-confirm"); 
                    $(".presentation-modal").hide(); 
                    }, 2000);
        //     }
        // });
    }); 

    $(".social-call-back").click(function(){
        // var name = $(".social-call-back-name").val();
        // var phone = $(".social-call-back-phone").val();
        // var source = "Пакет Социальный";
        // $.ajax({
        //     type: "POST",
        //     url: "../assets/php/save.php",
        //     data: {
        //         name: name,
        //         phone: phone,
        //         source: source
        //     },
        //     success: function () {
                $(".social-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".social-modal").removeClass("show-confirm"); 
                    $(".social-modal").hide(); 
                    $('body').removeClass('locked');
                    }, 2000);
        //     }
        // });
    }); 

    $(".family-call-back").click(function(){
        // var name = $(".family-call-back-name").val();
        // var phone = $(".family-call-back-phone").val();
        // var source = "Пакет Семейный";
        // $.ajax({
        //     type: "POST",
        //     url: "../assets/php/save.php",
        //     data: {
        //         name: name,
        //         phone: phone,
        //         source: source
        //     },
        //     success: function () {
                $(".family-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".family-modal").removeClass("show-confirm"); 
                    $(".family-modal").hide(); 
                    $('body').removeClass('locked');
                    }, 2000);
        //     }
        // });
    }); 

    $(".family-plus-call-back").click(function(){
        // var name = $(".family-plus-call-back-name").val();
        // var phone = $(".family-plus-call-back-phone").val();
        // var source = "Пакет Семейный+";
        // $.ajax({
        //     type: "POST",
        //     url: "../assets/php/save.php",
        //     data: {
        //         name: name,
        //         phone: phone,
        //         source: source
        //     },
            // success: function () {
                $(".family-plus-modal").addClass("show-confirm"); 
                setTimeout(function(){
                    $(".family-plus-modal").removeClass("show-confirm"); 
                    $(".family-plus-modal").hide(); 
                    $('body').removeClass('locked');
                    }, 2000);
        //     }
        // });
    }); 
});