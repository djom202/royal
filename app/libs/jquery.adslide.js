'use strict';

var $ = require('jquery');

require('jquery-ui');

$.widget('custom.adslide', {
	_create: function () {
		var self = this
		  , a = self.element.find("a.slide")
		  , len = a.length
		  , current = 0
		  , container = a.parent()
		;
		
		a.css({
			display: 'none'
		}).eq(0).css({
			display: 'block'
		});
		
		function animation () {
			a.eq(current).animate({
				left: -container.width(),
				opacity: 0
			}, 500, function () {
				a.eq(current).css({
					display: 'none'
				});
				
				current = (current + 1) % len;
				a.eq(current).css({
					display: 'block',
					opacity: 0,
					left: container.width()
				}).animate({
					left: 0,
					opacity: 1
				}, 500, function () {
					setTimeout(animation, 5000);
				});
			});
		}
		
		setTimeout(animation, 5000);
	}
});