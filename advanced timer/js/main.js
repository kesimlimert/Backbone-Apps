(function (requestFrame) {


    var className;
    var hour = 0;
    var minute = 0;
    var second = 0;
    var stop;
    



    var AdvancedTimer = Backbone.View.extend({

        el: $(".app"),

        $resultsDiv: $(".results"),

        initialize: function () {
            _.bindAll(this, "checkTime");
        },

        events: {
            'click .numberButton': 'setTime',
            'click .start': 'start',
            'click .hour': 'hourClass',
            'click .minute': 'minuteClass',
            'click .second': 'secondClass',
            'click .stop': 'stop',
        },

        stop: function () {
            stop = 'stop'
        },

        start: function () {

            if (stop === 'continue') {
                requestFrame(this.checkTime.bind(this));
            } else {
                requestFrame(this.updateTimer.bind(this));
            }
        },



        hourClass: function () {
            className = 'hour'
        },

        minuteClass: function () {
            className = 'minute'
        },

        secondClass: function () {
            className = 'second'
        },

        setTime: function (e) {
            if (className === 'hour') {

                if (hour > 0) {

                    hour += $(e.target).text();
                    $('.hour').val(hour);

                } else {

                    hour = $(e.target).text();
                    $('.hour').val(hour);

                }
            }

            if (className === 'minute') {

                if (minute > 0) {

                    minute += $(e.target).text();
                    $('.minute').val(minute);

                } else {

                    minute = $(e.target).text();
                    $('.minute').val(minute);

                }
            }

            if (className === 'second') {

                if (second > 0) {

                    second += $(e.target).text();
                    $('.second').val(second);

                } else {

                    second = $(e.target).text();
                    $('.second').val(second);

                }
            }

        },

        updateTimer: function () {

            var tempHour = parseFloat(hour) * 3600;
            var tempMinute = parseFloat(minute) * 60;
            var tempSecond = parseFloat(second);

            var num = tempHour + tempMinute + tempSecond;

            if (!isNaN(num)) {

                this.initTime = num;
                this.startTime = new Date();



                requestFrame(this.checkTime);
            }

        },

        checkTime: function (e) {

        
            function sec2time(timeInSeconds) {
                var pad = function (num, size) { return ('000' + num).slice(size * -1); },
                    time = parseFloat(timeInSeconds).toFixed(3),
                    hours = Math.floor(time / 60 / 60),
                    minutes = Math.floor(time / 60) % 60,
                    seconds = Math.floor(time - minutes * 60),
                    milliseconds = time.slice(-3);

                return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ':' + pad(milliseconds, 2);
            }

           
            var timeDiff = (new Date() - this.startTime) / 1000;
            this.$resultsDiv.text(sec2time(this.initTime - timeDiff));
           

            if (stop === 'stop') {
                stop = 'continue';
            } else if (this.initTime > timeDiff) {
                requestFrame(this.checkTime);
            }



            // if (this.initTime > timeDiff) {

            //     requestFrame(this.checkTime);
            // } else {
            //     this.$resultsDiv.text("0");
            // }
        }

    });

    var advancedTimer = new AdvancedTimer();

}(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame));



