var app = app || {};
(function($){
  app.preloader2= {
    hideHelix : function () { // hide animated helix
      setTimeout(function() {
        app.preloader2.els.helixLoader.animate({
          opacity : 0,
          transition: '1s ease',
        });
        app.preloader2.showLogo();
      }, 2400);
    },
    showLogo : function () { // fade in title
      setTimeout(function() {
        app.preloader2.els.helixText.animate({
          'opacity' : 1,
          'transition' : '1s ease',
        });
        app.preloader2.hidePreloader();
      }, 1000);
    },
    hidePreloader : function () { // Hide entire preloader div
      setTimeout(function() {
        app.preloader2.els.helixText.animate({ // hide text
          'opacity': '0',
          'transition': '1s ease'
        });
        app.preloader2.els.helixWrapper.animate({ // slide loader left and out
          'left' : '-100%',
          'opacity' : '0',
        }, 700);
        app.preloader2.els.overlay.addClass('hide-block') // fade in landing page
      }, 1800);
    },
    init :  function() {
      app.preloader2.els = {
        helixWrapper : $('.helix-wrapper'),
        helixLoader : $('.helix-preloader'),
        helixText : $('.msg'),
        overlay : $('.container__overlay'),
      };
      app.preloader2.hideHelix();
    }
  };
  window.onload = function() {
    app.preloader2.init();
  }
}(jQuery));
