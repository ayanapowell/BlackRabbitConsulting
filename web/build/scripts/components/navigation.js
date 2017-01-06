var app = app || {};
(function($){
  app.navigation = {
// when menu icon clicked, show navigation menu, darken the rest of content
    toggleNavOld : function () {
      app.navigation.els.test.click(function() {
        app.navigation.els.overlay.removeClass('hide-block');
        $(this).toggleClass('active'); // from menu to x button
        app.navigation.els.navBlock.toggleClass('show-block'); // display navigation
        app.navigation.els.heroTagline.toggleClass('hide-block'); // hide tagline
        app.navigation.els.overlay.toggleClass('show-block');// darken window to show nav items
        $('img.hero__logo').css({
          'z-index': 10
        })
        setTimeout(function() {
          app.navigation.els.navItems.each(function(i, el) { // fade in nav-items
            var el = $(el);
            el.toggleClass('show-block-slow');
          });
        }, 200);
      });
    },
    toggleNav : function () { // when menu icon clicked, show navigation menu, darken the rest of content
      app.navigation.els.showNavButton.on('click', function() {
        app.navigation.els.hideNavButton.toggleClass('active'); // changes menu button to close button
        app.navigation.els.navBlock.toggleClass('show');
      });
    },
    init : function() {
      app.navigation.els = {
        menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        navItems : $('.nav__item'),
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
