const submit_btn = document.querySelector('.submit-btn');
const card_content_1 = document.querySelector('.first-section');
const card_content_2 = document.querySelector('.thank-you-section');
const ratingBtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let stars_score;

submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
    card_content_1.classList.add('hide');
    score.textContent = stars_score;
    card_content_2.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    
    stars_score = event.target.textContent;
    
}

