var formProxy = {};
_.extend(formProxy, Backbone.Events);


var first;
var second;

var CardView = Backbone.View.extend({

    initialize: function () {
        formProxy.on('final', this.final, this);
    },

    events: {
        'click .card': 'onClick'
    },

    final: function () {

        if (first === second) {
            console.log("same")
        } else if (first !== second) {

 
            window.setTimeout(function () {
                $("button:contains('" + first + "')").text('Choose This');
                $("button:contains('" + second + "')").text('Choose This'); 
            }, 1000);

            $("button:contains('" + first + "')").css('background-color','white');
            $("button:contains('" + second + "')").css('background-color', 'white'); 

        }
    },

    onClick: function (event) {
        $(event.target).text(this.model.get("animal"));
        $(event.target).css('background-color', this.model.get("color"));
        compare(event)
        function compare(event) {
            var clicks = $(this).data('clicks');

            if (clicks) {
                console.log("second")
                second = $(event.target).text();
                formProxy.trigger("final");
            } else {
                console.log("first")
                first = $(event.target).text();
            }
            $(this).data("clicks", !clicks);
        }

        //  console.log(first, second);
    },

    render: function () {
        this.$el.html("<button class='card'>Choose This</button>");


        return this;
    }
});
