var app = app || {};
(function($){
  app.isVisible = {
   fadeIntoView : function () {
      setTimeout(function() {
        app.isVisible.els.tagline.addClass('show');
        app.isVisible.els.tagline2.addClass('show');
      }, 500);
   },
    init : function() {
      app.isVisible.els = {
    	  tagline : $('.container__hero-tagline'),
        tagline2 : $('.hero__punchline'),
      };
      app.isVisible.fadeIntoView();
    }
  };
  jQuery(document).ready(function() {
    app.isVisible.init();
  });
}(jQuery));
