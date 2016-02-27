/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function transition(){}

	window.onload = function() {
	  var vid = $("#bgvid");
	  var whiteout = $("#whiteout_layer");
	  
	  whiteout.addClass('animated fadeOut');
	  
	  $("#bgbtn").on("click",function(e){
	    $('#bgvid source').attr('src', "bg/video/bright.mp4");
	    whiteout.removeClass('fadeOut');
	    whiteout.addClass('fadeIn');
	    whiteout.one('animationend', function(){
	      vid[0].load();
	      whiteout.removeClass('fadeIn');
	      whiteout.addClass('fadeOut');
	    });
	    
	  })
	};


/***/ }
/******/ ]);