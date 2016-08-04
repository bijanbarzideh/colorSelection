//app.controller.home.js
angular.module('ColorAPI')
    .controller('homeController', [
        '$http',
        homeController
    ])

function homeController($http) {
    var hCtrl = this;
    hCtrl.userColor = '';

    hCtrl.colorInfo = [];

    hCtrl.welcomeMessage = 'The only place for delicious nougat.';
    var autoColor = [];
    //get function that retrieves information from our server
    //once the information is retrieved , it is then pushed to an array called "hCtrl.colorInfo"
    hCtrl.getTheColors = function() {

        $http.get('/api/colors')
            .then(function(response) {
                // console.log(response);
                response.data.forEach(function(item) {
                        hCtrl.colorInfo.push(item);
                        autoColor.push(item.name);


                        // console.log(autoColor)
                    })
                    // console.log(hCtrl.colorInfo);
            });

        console.log('Such colors! Much wow!');

    }

    hCtrl.getTheColors();

    hCtrl.userColor = '';

    hCtrl.titleColor = '';

    hCtrl.titleBackground = '';


    console.log(hCtrl.autoColor)

    //matchTheValues takes in the values that are inputed into the text fields and set to variables
    hCtrl.matchTheColor = function() {
        // console.log(hCtrl.userColor);
        var color = hCtrl.userColor.toLowerCase();
        var hex = hCtrl.hexValues;
        var rgb = hCtrl.rgbValues;

        console.log(color, hex, rgb);
        //once the inputs have values, then use the for each method on our colorInfo array to compare the input value to the array value
        hCtrl.colorInfo.forEach(function(item) {
            if (color == item.name.toLowerCase()) {
                console.log('Success!', item);
                hCtrl.hexValues = "#" + item.hex;
                hCtrl.rgbValues = item.rgb.r + ", " + item.rgb.g + ", " + item.rgb.b;
                hCtrl.titleColor = hCtrl.userColor;

                var luminosity = hCtrl.userColor;
                if (luminosity == 'white') {
                    hCtrl.titleBackground = '#757575';
                    console.log("Light Color")
                } else {
                    hCtrl.titleBackground = 'white';
                };
            } else {}
        })

    };

    hCtrl.matchTheHex = function() {
        var color = hCtrl.userColor.toLowerCase();
        var hex = hCtrl.hexValues.toUpperCase();
        var rgb = hCtrl.rgbValues;

        console.log(color, hex, rgb);

        hCtrl.colorInfo.forEach(function(item) {
            if (hex == item.hex || hex == '#' + item.hex) {
                console.log('Success!', item);
                hCtrl.userColor = item.name;
                hCtrl.hexValues = "#" + item.hex;
                hCtrl.rgbValues = item.rgb.r + ", " + item.rgb.g + ", " + item.rgb.b;
                hCtrl.titleColor = hCtrl.hexValues;

                var luminosity = hCtrl.hexValues;
                if (luminosity == '#FFFFFF') {
                    hCtrl.titleBackground = '#757575';
                    console.log("Light Color")
                } else {
                    hCtrl.titleBackground = 'white';
                };
            } else {}

        })
    };
    //rgb color selector put on backburner
    //
    // hCtrl.matchTheRGB = function() {
    //     var color = hCtrl.userColor.toLowerCase();
    //     var hex = hCtrl.hexValues;
    //     var rgb = hCtrl.rgbValues;
    //
    //     console.log(color, hex, rgb);
    //
    //     hCtrl.colorInfo.forEach(function(item) {
    //         if (rgb == item.rgb) {
    //             console.log('Success!', item);
    //             hCtrl.userColor = item.name;
    //             hCtrl.hexValues = "#" + item.hex;
    //             hCtrl.rgbValues = item.rgb.r + ", " + item.rgb.g + ", " + item.rgb.b;
    //             hCtrl.titleColor = hCtrl.hexValues;
    //             console.log(hCtrl.rgbValues)
    //         }
    //     })
    // };

    $(function() {
        $("#tags").autocomplete({
            source: autoColor
        });
    });
}
