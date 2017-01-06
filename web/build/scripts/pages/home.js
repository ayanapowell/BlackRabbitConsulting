var app = app || {};
(function($){
  app.home = {
  	linkToServicesPage : function () {
      console.log("here");
      app.home.els.heroButton.on('click', function() {
        console.log('clicked');
        $(this).addClass('no-hover');
        $(this).addClass('active');
      });
  	},
    init : function() {
      app.home.els = {
        heroButton: $('.animated-button'),
      };
      app.home.linkToServicesPage();
    }
  };
  jQuery(document).ready(function() {
    console.log("sup");
// Check to see we are on the correct page, if so, fire.
  	if ( $('body').hasClass('home') ) {
	    app.home.init();
  	}
  });
}(jQuery));
