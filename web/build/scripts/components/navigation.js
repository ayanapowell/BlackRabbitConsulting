var app = app || {};
(function($){
  app.navigation = {
// when menu icon clicked, show navigation menu, darken the rest of content
    toggleNav : function () { // when menu icon clicked, show navigation menu, darken the rest of content
      app.navigation.els.showNavButton.on('click', function() {
        app.navigation.els.hideNavButton.toggleClass('active'); // changes menu button to close button
        app.navigation.els.navBlock.toggleClass('show');
        app.navigation.els.overlay.css({
            'opacity': '0.8'
        });
      });
    },

    init : function() {
      app.navigation.els = {
        // menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        // navItems : $('.nav__item'),
        heroTagline : $('.hero__tagline h1'),
        showNavButton : $('.header__interactive-menu-button-wrapper'),
        hideNavButton : $('.interactive-menu-button'),
      };
      app.navigation.toggleNav();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
