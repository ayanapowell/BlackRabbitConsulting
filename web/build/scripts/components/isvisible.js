var app = app || {};
(function($){
  app.isVisible = {
   fadeIntoView : function () {
      setTimeout(function() {
        app.isVisible.els.tagline.animate({
          'margin-top' : '0px',
          'transition' : '0.5s ease all'
        });
      }, 1000);
   },
    init : function() {
      app.isVisible.els = {
    	  tagline : $('.container__hero-tagline div:first-child'),
      };
      app.isVisible.fadeIntoView();
    }
  };
  jQuery(document).ready(function() {
    app.isVisible.init();
  });
}(jQuery));
