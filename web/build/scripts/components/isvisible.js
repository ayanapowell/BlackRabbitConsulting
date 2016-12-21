var app = app || {};
(function($){
  app.isVisible = {
   fadeIntoView : function () {
      setTimeout(function() {
        app.isVisible.els.tagline.animate({
          'margin-top' : '0'
        });
      }, 4800);
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
