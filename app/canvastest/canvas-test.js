angular.module('canvasTest',[])

.directive('mxCanvasTest', ['testData', 'canvasData', '$timeout', '$interval', function(testData, canvasData, $timeout, $interval){
	return {
		restrict: 'E',
	  templateUrl: 'canvastest/canvas-test.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "ct",
	  link: function(scope,element,attrs){
	  	scope.canvasData = canvasData
	  	scope.threads = testData.threads

	  	scope.paramOne = attrs.paramOne
	  	scope.paramTwo = attrs.paramTwo

	  	scope.canvasid = attrs.canvasid

	  	scope.color = randomRGBcolor()

	  	var length = scope.threads.length

	  	/*console.log(attrs.canvasid)
	  	console.log(scope.canvasid)*/

	  	$timeout(function(){console.log(scope.canvasid)},100)
			$timeout(function(){
				scope.canvasData.generateImagesA(scope.canvasid, scope.paramOne, scope.paramTwo)}, 100)

/*	  	scope.canvasData.generateImagesA(scope.canvasid)
*/

	  	
	  },
	  controller: function($scope, canvasData, $attrs) {
	  	var ct = this



	  	$interval(function(){}, 100)





	  	// ct.canvasid = $attrs.canvasid
	  	// console.log(ct.canvasid)


/*	  	canvasData.generateImagesA(ct.canvasid)
*/


	  	/*ct.canvasData = canvasData;
	  	console.log('test')*/

/*	  	var test = [1,2,3]
	  	ct.canvasData.generateImages(test)
*/
	  }
	}
}])




.factory('canvasData', function(){
	var canvasData = {}

	canvasData.imageID = null;

	canvasData.generateImagesA = function(id, param1, param2){
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth="1.9";
			ctx.strokeStyle=randomRGBcolor();
			ctx.fillStyle = randomRGBcolor();
			ctx.fill();
			ctx.moveTo(0,40);
			ctx.lineTo(50,30+20);
			ctx.moveTo(param1,30);
			ctx.lineTo(150+20,param2);
			ctx.moveTo(param2,100);
			ctx.lineTo(230,param1);
			ctx.lineTo(60+param1,param2);
			ctx.stroke();
	}


	canvasData.generateImages = function(myArrayLength, param1, param2){
		for (var i=0; i<myArrayLength; i++){
	  	var canvas = document.getElementsByClassName("canvasTest")[i];
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth="1.9";
			ctx.strokeStyle=randomRGBcolor();
			ctx.fillStyle = randomRGBcolor();
			ctx.fill();
			ctx.moveTo(0,param1);
			ctx.lineTo(50,30+param2);
			ctx.moveTo(123,param2);
			ctx.lineTo(150+param1,150);
			ctx.moveTo(param1,param2);
			ctx.lineTo(230,230);
			ctx.lineTo(60-param1,170);
			ctx.stroke();
		}
	}
	
	return canvasData

})