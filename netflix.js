document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');

            const cart_rotate=document.querySelector('.cart-img');
            cart_rotate.classList.toggle('rotate')
            
            // Скрытие других открытых ответов (необязательно)
            questions.forEach((otherQuestion) => {
                if (otherQuestion !== question) {
                    otherQuestion.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});

//function rotate(){
//    let cart_rotate=document.querySelector('.cart-img')
//    cart_rotate.style.transform='rotate(45deg)'
//    cart_rotate.style.transition=' transform 0.3s ease'
//}
//let show=document.querySelector('.faq-question')
//show.addEventListener('click',rotate)