var quizApp = quizApp || {}

quizApp.MultiQuestionView = Backbone.View.extend({
	tagName: 'div',
	template: $("#multiQuestionTemplate").html(),
	
	initialize: function(){
		
	},
	
	events: {
		'click .selection': 'checkResults',
		'click .nextQuestion': 'nextQuestion'
	},
	
	render: function(){
		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));
		return this;
	},

	checkResults: function(e){
		var selected = $(e.target).val();
		var score = (selected === this.model.get('answer') ? 1 : 0);
		this.model.set({
			score: score,
			possibleScore: 1
		});

		if(selected === this.model.get("answer")) {
			$(e.target).css("background-color","green");
		} else if(selected !== this.model.get("answer")) {
			$(e.target).css("background-color","red");
		}

		this.$el.find('.status').html(score === 1 ? 'Correct!' : 'Incorrect!');
		this.$el.find('.answerCtn').fadeIn();
		
		this.$el.find('.buttons button').each(function(){
			$(this).toggle();
		});
	},
	
	nextQuestion: function(){
		this.trigger('nextQuestion');
	},
	

	close: function(){
		this.unbind();
		this.undelegateEvents();
		this.stopListening();
		this.$el.empty();
	},
	
});