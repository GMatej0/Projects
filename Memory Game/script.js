const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');
const msg = document.querySelector('#msg');
const result = document.querySelector('#result');


shuffleImage()
clicking()

function shuffleImage() {


    card.forEach(c => {

        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random() * card.length);

        c.style.order = num[random];
    })
}


function clicking() {

    for (let i = 0; i < card.length; i++) {

        card[i].addEventListener('click', () => {

            front[i].classList.add('flip');
            const filppedCard = document.querySelectorAll('.flip');

            if (filppedCard.length == 2) {

                container.style.pointerEvents = 'none';

                setInterval(() => {

                    container.style.pointerEvents = 'all';
                }, 700);

                match(filppedCard[0], filppedCard[1]);
            }
        })
    }
}




function match(cardOne, cardTwo) {

    if (cardOne.dataset.index == cardTwo.dataset.index) {

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');


        cardOne.classList.add('match');
        cardTwo.classList.add('match');


    } else {

        setTimeout(() => {

            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        }, 700);
    }

    if (result.innerHTML == 6) {
        msg.innerHTML = 'Congratulations you won!';
        msg.style.color = '#2ba828';
        msg.style.fontSize = '1.5rem';
        msg.classList.add('victory-shake');
        let congrats = new Audio('css/audio/congrats.mp3');
        congrats.play();
    }
}