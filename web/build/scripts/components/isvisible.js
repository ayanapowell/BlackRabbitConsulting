var app = app || {};
(function($){
  app.isVisible = {
   fadeIntoView : function () {
      setTimeout(function() {
        app.isVisible.els.tagline.addClass('show');
      }, 500);
   },
    init : function() {
      app.isVisible.els = {
    	  tagline : $('.container__hero-tagline'),
      };
      app.isVisible.fadeIntoView();
    }
  };
  jQuery(document).ready(function() {
    app.isVisible.init();
  });
}(jQuery));
