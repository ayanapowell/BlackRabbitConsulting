var app = app || {};
(function($){
  app.home = {
    slideToGrid : function () {
      app.home.els.button.on('click', function() {
        $('html, body').animate({
          scrollTop: app.home.els.button.offset().top
        }, 'slow');
      });
    },
    init : function() {
      app.home.els = {
        button : $('a.animated-button'),
        grid : $('.brc-expertise'),
      };
      app.home.slideToGrid();
    }
  };
  jQuery(document).ready(function() {
  	if ( $('body').hasClass('home') ) {
	    app.home.init();
  	}
  });
}(jQuery));
