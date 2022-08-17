let nCard;

while (nCard%2 != 0 || nCard < 4 || nCard > 14) {
    nCard = prompt("Escolha a quantidade de cartas que deseja jogar \n (um número PAR e entre 4 e 14 cartas");
}

addCards();

function addCards() {
    const element = document.querySelector(".backgroundGame");
    for (let i = 0; i < nCard; i++) {
        //cria uma array com cartas (aleatorias na parte de baixo)
        //insere cartas p/ baixo
        element.innerHTML = element.innerHTML + `
            <div class="card">
                <img class="cardDown" src="./uteis/front.png" />
                <img class="cardUp" src="" />
            </div>
    `;
    }
}