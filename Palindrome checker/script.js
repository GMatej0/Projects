let btnCheck = document.querySelector('#check');
let msg = document.querySelector('.message');
let success = new Audio('audio/success.mp3');
let failure = new Audio('audio/failure.mp3');

btnCheck.addEventListener('click', () => {
    let wordValue = document.querySelector('#word').value;
    let word = wordValue.replace(/\W|_/g, '').toLowerCase();
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    if (reversedWord == word) {
        document.querySelector('#word').value = '';
        msg.textContent = 'Word is a palindrome!';
        msg.style.color = '#2ba828';
        success.play();
    } else {
        document.querySelector('#word').value = '';
        msg.textContent = 'Word is not a palindrome!';
        msg.style.color = '#FF2400';
        failure.play();
    }

    if (reversedWord == '') {
        msg.textContent = `ERROR: Can't check an empty input field!`;
        msg.style.color = '#000000';
        success.pause();
    }
});

