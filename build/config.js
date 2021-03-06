(function(){
	"use strict";

	module.exports = {
		dist: {
			zepto: {
				path: '_src/core/zepto/',
				files: 'polyfill zepto detect event ajax form fx',
				dest: 'dist/zepto.js',
				banner: '/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */'
			},
			gmu: {
				path: '_src',
				src: ['core/*.js', 'widget/**.js'],
				dest: 'dist/gmu.js'
			}
		}
	}
})();