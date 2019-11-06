(function (requestFrame) {

    var stop;

    var ContentTimer = Backbone.View.extend({

        el: $(".content-timer"),

        $resultsDiv: $(".results"),

        initialize: function () {
            _.bindAll(this, "checkTime");
        },

        events: {
            'keyup .input-num': 'updateTimer',
            'click .start': 'startTimer',
            'click .stop': 'stop'
        },

        stop: function () {
            stop = 'stop'
        },

        startTimer: function () {

            requestFrame(this.checkTime);

        },

        updateTimer: function (e) {
            // number input
            var num = parseFloat(e.target.value);

            num++;

            if (!isNaN(num)) {

                this.initTime = num;
                this.startTime = new Date();

            }
        },

        checkTime: function (e) {

            function formatTime(timeInSeconds) {
                var pad = function (num, size) { return ('000' + num).slice(size * -1); },
                    time = parseFloat(timeInSeconds).toFixed(3),
                    hours = Math.floor(time / 60 / 60),
                    minutes = Math.floor(time / 60) % 60,
                    seconds = Math.floor(time - minutes * 60),
                    milliseconds = time.slice(-3);

                return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 2);
            }

            var timeDiff = (new Date() - this.startTime) / 1000;

            this.$resultsDiv.text((formatTime(this.initTime - timeDiff)));





            if (stop === 'stop') {
                stop = 'continue';
            } else if (this.initTime > timeDiff) {
                requestFrame(this.checkTime);
            }
        }

    });

    var contentTimer = new ContentTimer();

}(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame));
