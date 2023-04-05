function getCard() {
    var numCards = document.getElementById("numCards").value;
    var cardValue = document.getElementById("cardValue").value;
    var cardSuit = document.getElementById("cardSuit").value;
    
    var apiURL = "https://deckofcardsapi.com/api/deck/new/draw/?count=" + numCards;
    
    if (cardValue != "ANY") {
      apiURL += "&cards=" + cardValue + "_" + cardSuit;
    }
    
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        var cards = data.cards;
        
        var output = "";
        for (var i = 0; i < cards.length; i++) {
          output += "<img src='" + cards[i].image + "' />";
        }
        
        document.getElementById("cards").innerHTML = output;
      });
  }
  