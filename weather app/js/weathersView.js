var WeathersView = Backbone.View.extend({

    className: "weathers",

    render: function () {

        var self = this;


        this.model.each(function (weather) {
            var view = new WeatherView({ model: weather });
            self.$el.append(view.render().$el);


        });

        return this;
    }
});