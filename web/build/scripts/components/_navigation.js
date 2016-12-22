var app = app || {};
(function($){
  app.navigation = {
// when menu icon clicked, show navigation menu, darken the rest of content
    toggleNav : function () {
      app.navigation.els.test.click(function() {
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

    init : function() {
      app.navigation.els = {
        menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        navItems : $('.nav__item'),
        heroTagline : $('.hero__tagline h1'),
        test : $('.interactive-menu-button a'),
      };
      app.navigation.toggleNav();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
