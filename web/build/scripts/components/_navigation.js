var app = app || {};
(function($){
  app.navigation = {
    initiateOverlay : function () {
      app.navigation.els.menuIcon.click(function() {
        app.navigation.els.overlay.animate({
          "opacity" : 0.99,
          "transition" : "0s"
        }, 700);
        setTimeout(function() {
          app.navigation.slideNavItems();
        }, 900);
      });
   },

   slideNavItems : function () {
     app.navigation.els.navItems.each(function(i, el) {
      var el = $(el);
      setTimeout(function() {
        el.css({
          'align-self' : 'center',
        });
      }, 1000);
     });
   },
    init : function() {
      app.navigation.els = {
        menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        navItems : $('.nav__item'),
      };
      app.navigation.initiateOverlay();
      // app.navigation.slideNavItems();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
