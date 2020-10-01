let suits = ["Hearts","Clubs","Diamond","Spades"],values =["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
//let playerCount=prompt("how many player are there?");
//let playerCount;


let deck,
    dealerCards,
    player1Cards;

//Register click  event to game-button.
let newGameBtn = document.getElementById('new-game-button');
let serveBtn = document.getElementById('serve-button');
let hitBtn = document.getElementById('hit-button');
let stayBtn = document.getElementById('stay-button');




hitBtn.addEventListener('click', hitAnotherCard);
function hitAnotherCard(){

    let newCard = getTopCard
}
hitAnotherCard
newGameBtn.addEventListener('click',function(){
    newGameBtn.className= "hide";
    serveBtn.className = "show";

});

serveBtn.addEventListener('click',serveCards);

function serveCards(){
    deck=[];
    dealerCards=[];
    player1Cards=[];
    deck = createDeck();
    suffleDeck(deck);

    manageButton();
    //serve Two Cards for each
    player1Cards.push(getTopCard());
    dealerCards.push(getTopCard());
    player1Cards.push(getTopCard());
    dealerCards.push(getTopCard());

    let pMy= document.getElementById('myCards');
    let pYour= document.getElementById('yourCards');
    let dealerTitle = "<br/><b>Dealer Hand:</b>";
    let yourTitle = "<br/><b>Your Hand:</b>";
    let pVal = document.getElementById('value');

    //Render cards for each
    displayCards(pMy, dealerCards, dealerTitle);
    displayCards(pYour, player1Cards, yourTitle);

    let add = getNumValue(player1Cards);
    displayValue(pVal,add);

}


function getHandSum(cards){
    let sum = 0;
    for(let i =0; i < cards.length; i++){

        sum = sum + getNumValue(cards[i].values);

        //Aces contributes 1 or 11 to sum depending on which benefits us most

        if (cards[i].value === 'Ace' && sum + 10 <= 21){
            sum += 10;
        }

    }
    return sum;
}
function getNumValue(valueString){
    let num =0;
    switch(valueString){
        case 'Ace':
            num = 1;
            break;
        case 'Two':
            num = 2;
            break;
        case 'Three':
            num = 3;
            break;
        case 'Four':
            num = 4;
            break;

        case 'Five':
            num = 5;
            break;
        case 'Six':
            num = 6;
            break;
        case 'Seven':
            num = 7;
            break;
        case 'Eight':
            num = 8;
            break;
        case 'Nine':
            num = 9;
            break;
        case 'Ten':
        case 'Jack':
        case 'Queen':
        case 'King':
            num = 10;
            break;
    }

    return num;

}

function manageButton(){
    serveBtn.className = 'hide';
    hitBtn.className = 'show';
    stayBtn.className = 'show';
}
function getTopCard(){
    return (deck.shift());
}
function createDeck(){
    let deck = [];
    for(let suitsIndex = 0; suitsIndex < 4; suitsIndex++){
        for(let valueIndex = 0; valueIndex < 13; valueIndex++)
        {
                //console.log("Your hand");
            let card= {
                Suit :suits[suitsIndex],
                Value :values[valueIndex]
            }
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card){
    return card.Value + " of " + card.Suit;
}

function suffleDeck(deck){
    for(let i = 0; i<deck.length; i++){
        let swapIndex = Math.trunc(Math.random()*deck.length);

        let tmp = deck[swapIndex];
        deck[swapIndex]= deck[i];
        deck[i]=tmp;
    }
}


function displayCards(renderTo, card ,title){

    let cardsString = title + "<br/>";
    for(let i = 0; i<card.length ;i++){
        cardsString += getCardString(card[i])+"<br/>";


    }
    renderTo.innerHTML = cardsString;
}

