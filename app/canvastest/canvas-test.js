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

	  	//get params and canvas ID
	  	scope.paramOne = attrs.paramOne
	  	scope.paramTwo = attrs.paramTwo
	  	scope.canvasid = attrs.canvasid
	  	//in canvas backgroundcolor
	  	scope.color = randomRGBcolor()

			/*$timeout(function(){console.log(scope.canvasid)},100)
			$timeout(function(){
			scope.canvasData.generateImagesA(scope.canvasid, scope.paramOne, scope.paramTwo)}, 100)
*/
	  	scope.param1=40
	  	scope.param2=30
	  	scope.param3=20
	  	scope.param4=70

			scope.canvasData.generateCanvas(scope.canvasid, scope.param1, scope.param2, scope.param3, scope.param4)








	  },
	  controller: function($scope, canvasData, $attrs) {
	  	var ct = this
	  }
	}
}])




.factory('canvasData', function(){
	var canvasData = {}

	canvasData.imageID = null;

	canvasData.generateCanvas = function(id, param1, param2, param3, params4){
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth="1.9";
			ctx.strokeStyle=randomRGBcolor();
			ctx.fillStyle = randomRGBcolor();
			ctx.fill();
			ctx.moveTo(0,40);
			ctx.lineTo(50,params3+params1);
			ctx.moveTo(param1,30);
			ctx.lineTo(params3+20,param2);
			ctx.moveTo(param2,params4);
			ctx.lineTo(230,param1);
			ctx.lineTo(params4+param1,param2);
			ctx.stroke();
	}
















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


	
	return canvasData

})