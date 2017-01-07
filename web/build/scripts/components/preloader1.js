var app = app || {};
(function($){
  app.preloader = {
  	fadeTitle2 : function () {
      window.onload = function() {
        // setTimeout(function() { // Hide animated circle, display company name
          app.preloader.els.message.animate({
            'opacity' : 1
          });
          app.preloader.els.preloaders.animate({
            'opacity' : '0'
          }, 600);
        // }, 1800);

        setTimeout(function() { // remove css animation
          app.preloader.els.preloaderTitle.css({
            'animation':'none'
          });
          app.preloader.els.preloaderTitle.animate({
            'opacity': '0'
          });
          app.preloader.els.preloaderParent.animate({
            'width' : '0',
            'opacity': '0'
          }, 700);
          app.preloader.els.overlay.animate({
            'opacity' : '0',
            'z-index' : '-1'
          });
        }, 1400);
      }
  	},
    fadeTitle : function () {
      window.onload = function() {
        app.preloader.els.message.animate({
          'opacity' : 1
        });
        app.preloader.els.preloaders.animate({
          'opacity' : '0'
        }, 600);
        app.preloader.els.preloaderParent.animate({
          'width' : '0',
          'opacity': '0'
        }, 700);
        app.preloader.els.overlay.animate({
          'opacity' : '0',
          'z-index' : '-1'
        });
      }
    },
    init : function() {
      app.preloader.els = {
    	  preloaderParent : $('#preloader'),
        preloaders : $('.preloader1, .preloader2'),
        preloaderTagline : $('.preloader2'),
        preloaderTitle : $('h1.msg'),
        message : $('.preloader3'),
        overlay : $('.hero__overlay'),
      };
      app.preloader.fadeTitle();
    }
  };
  jQuery(document).ready(function() {
    // app.preloader.init();
  });
}(jQuery));
