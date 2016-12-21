var app = app || {};
(function($){
  app.isVisible = {
   fadeIntoView : function () {
      setTimeout(function() {
        app.isVisible.els.tagline.animate({
          'margin-top' : '0',
          'transition' : '0.5s ease all'
        });
      }, 4400);
   },
    init : function() {
      app.isVisible.els = {
    	  tagline : $('.hero__tagline div:first-child'),
      };
      app.isVisible.fadeIntoView();
    }
  };
  jQuery(document).ready(function() {
    app.isVisible.init();
  });
}(jQuery));
