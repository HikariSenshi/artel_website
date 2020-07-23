/* Индекс слайда по умолчанию */
var slideGalleryIndex = 1;
showGallerySlides(slideGalleryIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusGallerySlide() {
    showGallerySlides(slideGalleryIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusGallerySlide() {
    showGallerySlides(slideGalleryIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentGallerySlide(n) {
    showGallerySlides(slideGalleryIndex = n);
}

/* Основная функция слайдера */
function showGallerySlides(n) {
    var i;
    var gallerySlides = document.getElementsByClassName("gallery-item");
    var galleryDots = document.getElementsByClassName("gallery-slider-dots_item");
    if (n > gallerySlides.length) {
      slideGalleryIndex = 1
    }
    if (n < 1) {
        slideGalleryIndex = gallerySlides.length
    }
    for (i = 0; i < gallerySlides.length; i++) {
        gallerySlides[i].style.display = "none";
    }
    for (i = 0; i < galleryDots.length; i++) {
        galleryDots[i].className = galleryDots[i].className.replace(" active-dot", "");
    }
    gallerySlides[slideGalleryIndex - 1].style.display = "block";
    galleryDots[slideGalleryIndex - 1].className += " active-dot";
}


/* Индекс слайда по умолчанию */
var slidePortfolioIndex = 1;
showPortfolioSlides(slidePortfolioIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusPortfolioSlide() {
    showPortfolioSlides(slidePortfolioIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusPortfolioSlide() {
    showPortfolioSlides(slidePortfolioIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentPortfolioSlide(n) {
    showPortfolioSlides(slidePortfolioIndex = n);
}

/* Основная функция слайдера */
function showPortfolioSlides(n) {
    var i;
    var portfolioSlides = document.getElementsByClassName("portfolio-item");
    var portfolioDots = document.getElementsByClassName("portfolio-slider-dots_item");
    if (n > portfolioSlides.length) {
      slidePortfolioIndex = 1
    }
    if (n < 1) {
        slidePortfolioIndex = portfolioSlides.length
    }
    for (i = 0; i < portfolioSlides.length; i++) {
        portfolioSlides[i].style.display = "none";
    }
    for (i = 0; i < portfolioDots.length; i++) {
        portfolioDots[i].className = portfolioDots[i].className.replace(" active-dot", "");
    }
    portfolioSlides[slidePortfolioIndex - 1].style.display = "block";
    portfolioDots[slidePortfolioIndex - 1].className += " active-dot";
}




// /* Индекс слайда по умолчанию */
// var slideOfferIndex = 1;
// showOfferSlides(slideOfferIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusOfferSlide() {
//     showOfferSlides(slideOfferIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusOfferSlide() {
//     showOfferSlides(slideOfferIndex -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentOfferSlide(n) {
//     showOfferSlides(slideOfferIndex = n);
// }

// /* Основная функция слайдера */
// function showOfferSlides(n) {
//     var i;
//     var offerSlides = document.getElementsByClassName("offer-item");
//     var offerDots = document.getElementsByClassName("offer-slider-dots_item");
//     if (n > offerSlides.length) {
//       slideOfferIndex = 1
//     }
//     if (n < 1) {
//         slideOfferIndex = offerSlides.length
//     }
//     for (i = 0; i < offerSlides.length; i++) {
//         offerSlides[i].style.display = "none";
//     }
//     for (i = 0; i < offerDots.length; i++) {
//         offerDots[i].className = offerDots[i].className.replace(" active-dot", "");
//     }
//     offerSlides[slideOfferIndex - 1].style.display = "block";
//     offerDots[slideOfferIndex - 1].className += " active-dot";
// }



/* Индекс слайда по умолчанию */
var slideFeedbackIndex = 1;
showFeedbackSlides(slideFeedbackIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusFeedbackSlide() {
    showFeedbackSlides(slideFeedbackIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusFeedbackSlide() {
    showFeedbackSlides(slideFeedbackIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentFeedbackSlide(n) {
    showFeedbackSlides(slideFeedbackIndex = n);
}

/* Основная функция слайдера */
function showFeedbackSlides(n) {
    var i;
    var feedbackSlides = document.getElementsByClassName("feedback-item");
    var feedbackDots = document.getElementsByClassName("feedback-slider-dots_item");
    if (n > feedbackSlides.length) {
      slideFeedbackIndex = 1
    }
    if (n < 1) {
        slideFeedbackIndex = feedbackSlides.length
    }
    for (i = 0; i < feedbackSlides.length; i++) {
        feedbackSlides[i].style.display = "none";
    }
    for (i = 0; i < feedbackDots.length; i++) {
        feedbackDots[i].className = feedbackDots[i].className.replace(" active-feedback-dot", "");
    }
    feedbackSlides[slideFeedbackIndex - 1].style.display = "flex"
    feedbackDots[slideFeedbackIndex - 1].className += " active-feedback-dot";
}


// let timerOffer = setInterval(() => plusOfferSlide(), 5000);
let timerGallery = setInterval(() => plusGallerySlide(), 5000);
let timerPortfolio = setInterval(() => plusPortfolioSlide(), 5000);
// let timerFeedback = setInterval(() => plusFeedbackSlide(), 3000);