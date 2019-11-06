
$(document).ready(function(){
	var todoItems = new TodoItems([]);
	var todoItemsView = new TodoItemsView({ model: todoItems });
	$("body").append(todoItemsView.render().$el);
});