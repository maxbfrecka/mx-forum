angular.module('canvasTest',[])

.directive('mxCanvasTest', ['testData', 'canvasDataTest', '$timeout', '$interval', function(testData, canvasDataTest, $timeout, $interval){
	return {
		restrict: 'E',
	  templateUrl: 'canvastest/canvas-test.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "ct",
	  link: function(scope,element,attrs){
	  	scope.canvasDataTest = canvasDataTest

	  	//get params and canvas ID
	  	scope.paramOne = attrs.paramOne
	  	scope.paramTwo = attrs.paramTwo
	  	scope.canvasid = attrs.canvasid
	  	//in canvas backgroundcolor
	  	scope.cbgc = attrs.cbgc

	  	//

			var limit1 = 20
			var limit2 = 10

	  	scope.param1=getRandomNumber(0,limit1)
	  	scope.param2=getRandomNumber(0,limit1)
	  	scope.param3=getRandomNumber(0,limit1)
	  	scope.param4=getRandomNumber(0,limit1)
	  	scope.param5=getRandomNumber(0,limit2)

	  	scope.rep1=getRandomNumber(5,30)
	  	scope.rep2=getRandomNumber(5,30)

	  	scope.paramAdd1=getRandomNumber(0,5)
	  	scope.paramAdd2=getRandomNumber(0,5)


	  	console.log('wtf')
	  	$timeout(function(){
				scope.canvasDataTest.generateCanvasB(scope.canvasid, scope.param1, scope.param2, scope.param3, scope.param4, scope.param5, scope.rep1, scope.rep2, scope.paramAdd1, scope.paramAdd2)
				}, 100)







	  },
	  controller: function($scope, canvasDataTest, $attrs) {
	  	var ct = this
	  }
	}
}])




.factory('canvasDataTest', function(){
	var canvasDataTest = {}

	canvasDataTest.imageID = null;




	canvasDataTest.generateCanvasA = function(id, param1, param2, param3, param4, param5, rep1, rep2, add1, add2){
			console.log('huh?')
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth=".5";


			var draw1 = function(){
				ctx.moveTo(param3,param2);
				ctx.lineTo(param1,param3+param1);
				ctx.moveTo(param1,param4);
				ctx.lineTo(param3+param3,param2);
				ctx.moveTo(param2,param4);
				ctx.lineTo(param3,param1);
				ctx.lineTo(param4+param1,param2);
				ctx.strokeStyle=randomRGBcolor();
				ctx.fillStyle = randomRGBcolor();
				}

			var draw2 = function(){
				for (var i=0; i<rep1; i++){
					draw1()
					param1=param1+add1
					param2=param2+add1+1
					param3=param3+add1+add1*.5
					param4=param4+add1+add1
				}
			}

			var draw3 = function(){
				for (var i=0; i<rep2; i++){
					draw2()
					param1=param1+add2
					param2=param2+add2+1
					param3=param3+add2+add2*.5
					param4=param4+add2+add2
					ctx.stroke();
					ctx.fill()
				}
			}




			draw3()


			
	}





	canvasDataTest.generateCanvasB = function(id, param1, param2, param3, param4, param5, rep1, rep2, add1, add2){
		console.log('huh?')

		var draw0 = function(){
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			

			var draw1a = function(){
				ctx.beginPath(); 
				ctx.lineWidth=getRandomNumber(.5,3);
				ctx.moveTo(param3,param2);
				ctx.lineTo(param1,param3+param1);
				ctx.moveTo(param1,param4);
				ctx.lineTo(param3+param3,param2);
				ctx.arcTo(param1,param2,param3,param4,param5)
				ctx.moveTo(param2,param4);
				ctx.lineTo(param3,param1);
				ctx.lineTo(param4+param1,param2);
				ctx.strokeStyle=randomRGBcolor();
				ctx.fillStyle = randomRGBcolor();
				ctx.stroke()
				ctx.fill()
				ctx.closePath()
				ctx.scale(.8,.8)
			}
			draw1a()
			

			var draw1b = function(){
				ctx.beginPath(); 
				ctx.lineWidth=getRandomNumber(.5,3);
				ctx.moveTo(param1,param3);
				ctx.lineTo(param2,param4+param5);
				ctx.moveTo(param2,param5);
				ctx.lineTo(param5+param5,param1);
				ctx.arcTo(param5,param4,param1,param3,param5)
				ctx.moveTo(param2,param4);
				ctx.lineTo(param3,param1);
				ctx.lineTo(param5+param1,param3);
				ctx.strokeStyle=randomRGBcolor();
				ctx.fillStyle = randomRGBcolor();
				ctx.stroke()
				ctx.fill()
				ctx.closePath()
				ctx.scale(1.245,1.245)
			}
			draw1b()
		}

		var draw2 = function(){

			for (var i=0; i<rep1; i++){
				draw0()
				param1=param1+add1
				param2=param2+add1+1
				param3=param3+add1+add1*.5
				param4=param4+add1+add1
			}
		}

		var draw3 = function(){
				for (var i=0; i<rep2; i++){
					draw2()
					param1=param1+add2
					param2=param2+add2+1
					param3=param3+add2+add2*.5
					param4=param4+add2+add2
				}
			}




		draw3()
	}













		canvasDataTest.generateImagesA = function(id, param1, param2){
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
















	canvasDataTest.generateImagesA = function(id, param1, param2){
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


	
	return canvasDataTest

})