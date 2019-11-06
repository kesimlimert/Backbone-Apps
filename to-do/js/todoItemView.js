
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	events : {
		"click #delete" : "onClickDelete"
	},

	onClickDelete: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.attr("id", this.model.id);
		this.$el.html(this.model.escape("description") + "<button id='delete'>Delete</button>");

		return this;
	}
});