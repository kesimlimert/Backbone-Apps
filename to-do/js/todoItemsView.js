
var TodoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "todoItems", 

	initialize: function(options){
		if (!(options && options.model))
            throw new Error("model is not specified.");
            
            this.model.on("add", this.onAddTodoItem,this);
            this.model.on("remove", this.onRemoveTodoItem, this);
    },

    onRemoveTodoItem: function(todoItem) {
        this.$("li#" + todoItem.cid).remove();
    },

    onAddTodoItem: function (todoItem) {
        var view = new TodoItemView({model: todoItem , id: todoItem.cid});
        this.$el.append(view.render().$el);
    },
    
    events: {
       "click #add": "onClickAdd" 
    },

    onClickAdd: function() {
        var $textBox = this.$("#newTodoItem");

        if($textBox.val()){

            var todoItem = new TodoItem({ description: $textBox.val() });
            this.model.add(todoItem);

            $textBox.val("");
        }

    },

	render: function(){
        var self = this;
        
        this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")
        this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(todoItem){
			var view = new TodoItemView({ model: todoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});