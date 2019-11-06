
var Weather = Backbone.Model.extend({
    defaults: {
        currentCity: "",
        appKey: "d55f3ca3bf70980db194df109cf24a53",
        today: "",
        tomorrow: "",
        otherday: "",
    },

    urlRoot: function () {
        return "http://api.openweathermap.org/data/2.5/forecast?q=" + this.attributes.currentCity + "&appid=" + this.attributes.appKey + "&units=metric"
        
    },

    initialize: function () {

        _.bindAll(this, 'fetch_success');
        this.bind('change', this.fetch_success);
    },

    fetch_success: function (message) {
        
    }
})






