$(document).ready(function () {
    var weather = new Weather();

    


   
        var weatherView = new WeatherView({ model: weather });
        $("body").append(weatherView.render().$el);

    return weather;
   
});