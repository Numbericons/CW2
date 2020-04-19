function Card(suit, rank) {
  this.suit = suit[0];
  this.rank = rank;
  this.face_card = rank > 10;
}

Card.SPADES = "S";
Card.HEARTS = "H";
Card.DIAMONDS = "D";
Card.CLUBS = "C";

Card.prototype = {
  toString: function () {
    const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const suits = { S: "Spades", H: "Hearts", D: "Diamonds", C: "Clubs" }
    return `${values[this.rank - 1]} of ${suits[this.suit]}`;
  }
};

function Deck() {
  this.cards = [];
  let suits = ["Spades", "Hears", "Diamonds", "Clubs"];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < 14; j++) {
      this.cards.push(new Card(suits[i],j+1));
    }
  }
}

Deck.prototype = {
  count: function () {
    return this.cards.length;
  },
  draw: function (n) {
    return this.cards.pop();
  },
  shuffle: function () {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let k = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[k]] = [this.cards[k], this.cards[i]];
    }
    return this.cards;
  }
};