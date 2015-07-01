'use strict';

var $ = require('jquery')
  , _ = require('lodash')
;

require('jquery-ui');

$.widget('custom.slider', {
	options: {
		slides: []
	},
	_create: function () {
		var self = this
		  , container = self.element
		  , ul = $("<ul />", {
				  class: 's-container'
			  }).css({
				  width: container.width(),
				  height: container.height()
			  })
		  , nav = $("<ul />", {
			  class: 's-nav'
		  })
		;
		
		//-- Generate a list item
		function create_slide (slide) {
			var li = $("<li />", {
				class: 's-slide'
			}).css({
				width: container.width(),
				height: container.height()
			}).append(
				$("<img />", {
					class: 's-header-img',
					src: slide.header
				}).css({
					width: container.width(),
					height: container.height()
				})
			);
			
			if(slide.title) {
				var words = slide.title.split(' ')
				  , middle = Math.ceil(words.length / 2)
			  	;
				
				li.append(
					$("<div />", {
						class: 's-left-panel'
					}).append(
						$("<h2 />").html(
							words.slice(0, middle).join(' ')
						).append(
							$("<span />").html(
								words.slice(middle, words.length).join(' ')
							)
						)
					)
				);
			}
			
			return li;
		}
		
		//-- Add to the list
		ul.append(function () {
			return _.map(self.options.slides, function (slide) {
				return create_slide(slide);
			});
		});
		
		var li = ul.find('li')
		  , timmer_animation = null
		  , current = 0
		  , next = (current + 1) % li.length;
		;
		
		//-- Create nav
		nav.append(function () {
			return _.map(self.options.slides, function (slide, i) {
				return $("<li />").css({
					height: Math.floor(container.height() / li.length) - 10 
				}).on('click', function (e) {
					clearTimeout(timmer_animation);
					if(i != current) {
						next = i;
						animation();
					}
				});
			});
		});
		
		nav.find("li").eq(0).addClass(
			'selected'
		);
		
		function animation () {
			li.css({
				'z-index': 0
			});
			
			var _current = li.eq(current).css({
				'z-index': 1
			})
			  , _next = li.eq(next).css({
				'z-index': 1,
				left: container.width()
			});
			
			_current.animate({
				left: -container.width()
			}, {
				duration: 500,
				step: function (now) {
					_next.css({
						left: container.width() + now
					});
				},
				complete: function () {
					current = next;
					next = (next + 1) % li.length;
					nav.find("li").removeClass(
						'selected'
					).eq(current).addClass(
						'selected'
					);
					
					timmer_animation = setTimeout(animation, 10000);
				}
			});
		}
		
		timmer_animation = setTimeout(animation, 10000);
		
		//-- Add the ul to the container
		container.addClass(
			'jquery-slider'
		).append(
			ul
		).append(
			nav
		);
	}
});