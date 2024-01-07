

   function examination() {
    let userCard = document.querySelector('#userCard').value.replace(/\s/g, '');
    const result = document.querySelector('#result');

    if (isNaN(userCard) || userCard === "") {
        result.innerHTML = '<p style="color: red">* Нужно ввести банковскую карту<i class="fa-solid fa-xmark" style="color: #db0000; margin-left: 10px"></i></p></br>';
        return;
    }

    userCard = userCard.split('').map((item) => +item);

    let cardType = 'Неизвестный тип карты';
    if (userCard[0] === 4) {
        cardType = 'Visa';
    } else if (userCard[0] === 5) {
        cardType = 'MasterCard';
    } else if ((userCard[0] === 3 && userCard[1] === 4) || (userCard[0] === 3 && userCard[1] === 7)) {
        cardType = 'American Express';
    }

    let sum = 0;
    for (let i = userCard.length - 2; i >= 0; i -= 2) {
        let num = userCard[i] * 2;
        sum += num > 9 ? num - 9 : num;
    }

    for (let i = userCard.length - 1; i >= 0; i -= 2) {
        sum += userCard[i];
    }

    if (sum % 10 === 0) {
        result.innerHTML = `<p style="color: green">Карта валидна<i class="fa-solid fa-check" style="color: #00963c; margin-left: 10px"></i></p></br>`;
        result.innerHTML += `<p style="margin-top: -35px">Карта: ${cardType}</p>`;
    } else {
        result.innerHTML = `<p style="color: red">* Карта не валидная, попробуйте ещё раз<i class="fa-solid fa-xmark" style="color: #db0000; margin-left: 10px"></i></p></br>`;
    }
}