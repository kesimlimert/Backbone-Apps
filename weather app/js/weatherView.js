var WeatherView = Backbone.View.extend({

    initialize: function () {
        _.bindAll(this, "render");
        this.model.bind('change', this.render);

        
    },

    events: {
        'click .search': 'onClick'
    },

    onClick: function() {
        var city = $(".cityInput").val();
        var self = this;
        this.model.set("currentCity", city); 
        this.model.fetch({
            success: function() {
                self.model.set("currentCity", self.model.attributes.city.name)
                self.model.set("today", self.model.attributes.list[0].main.temp)
                self.model.set("tomorrow", self.model.attributes.list[7].main.temp)
                self.model.set("otherDay", self.model.attributes.list[15].main.temp)
            }
        }); 
        
    },

    render: function() {
        var source = $('#WeatherTemplate').html();
        var template = Handlebars.compile(source);
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }
   
})