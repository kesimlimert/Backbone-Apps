var CardsView = Backbone.View.extend({

    className: "cards",

    render: function() {

        var self = this;
        

        this.model.each(function(card){
			var view = new CardView({ model: card });
            self.$el.append(view.render().$el);
            
            
        });
        
        return this;
    }
});