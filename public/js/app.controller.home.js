function homeController ($http) {
	var hCtrl = this;
	hCtrl.userColor = '';

	hCtrl.colorInfo = [];

	hCtrl.welcomeMessage = 'The only place for delicious nougat.';

	hCtrl.getTheColors = function (){

		$http.get('/api/colors')
			.then(function(response){
				 console.log(response);
				 response.data.forEach (function(item){
				 	hCtrl.colorInfo.push(item);
				 })
				 console.log(hCtrl.colorInfo);
			});

		console.log('Such colors! Much wow!');

	}

	hCtrl.getTheColors();

	hCtrl.userColor = '';

	hCtrl.matchTheValues = function() {
		// console.log(hCtrl.userColor);
		var color = hCtrl.userColor.toLowerCase();
		var hex = hCtrl.hexValues;
		var rgb = hCtrl.rgbValues;

		console.log(color,hex,rgb);

	// 	if (color == )

	// }

}
};
