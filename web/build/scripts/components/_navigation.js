var app = app || {};
(function($){
  app.navigation = {
// when menu icon clicked, show navigation menu, darken the rest of content
    initiateOverlay : function () {
      app.navigation.els.menuIcon.click(function() {
        app.navigation.els.navBlock.css({ // display navigation
          'display' : 'block'
        });
        app.navigation.els.heroTagline.css({ // hide tagline
          'opacity' : '0',
          'transition' : '0.5s ease'
        });
        app.navigation.els.overlay.animate({ // darken window to show nav items
          "opacity" : 0.99,
          "transition" : "0s"
        });
        setTimeout(function() {
          app.navigation.els.navItems.each(function(i, el) { // fade in nav-items
            var el = $(el);
            el.css({
              'opacity': '1',
              'transition' : '0.8s ease all'
            });
          });
        }, 200);
      });
    },
    init : function() {
      app.navigation.els = {
        menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        navItems : $('.nav__item'),
        heroTagline : $('.hero__tagline h1'),
      };
      app.navigation.initiateOverlay();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
