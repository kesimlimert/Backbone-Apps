
$(document).ready(function () {
    var cards = new Cards([
        new Card({ animal: "hippo", color: "#DB7093" }),
        new Card({ animal: "bird", color: "#3CB371" }),
        new Card({ animal: "giraffe", color: "#FF6347" }),
        new Card({ animal: "hippo", color: "#DB7093" }),
        new Card({ animal: "lion", color: "#CD853F" }),
        new Card({ animal: "giraffe", color: "#FF6347" }),
        new Card({ animal: "lion", color: "#CD853F" }),
        new Card({ animal: "bird", color: "#3CB371" }),
    ]);

    var cardsView = new CardsView({ model: cards });
    $("body").append(cardsView.render().$el);
});