var app = app || {};
(function($){
  app.navigation = {
// when menu icon clicked, show navigation menu, darken the rest of content
    toggleNav : function () { // when menu icon clicked, show navigation menu, darken the rest of content
      app.navigation.els.showNavButton.on('click', function() {
        app.navigation.els.hideNavButton.toggleClass('active'); // changes menu button to close button
        app.navigation.els.navBlock.toggleClass('show');
        app.navigation.els.overlay.toggleClass('dim');
        app.navigation.els.wrapperOverlay.toggleClass('dim');
      });
    },
    init : function() {
      app.navigation.els = {
        overlay : $('div.container__overlay'),
        navBlock : $('nav'),
        showNavButton : $('.menu-icon__wrapper'),
        hideNavButton : $('.menu-icon__button'),
        container1 : $('.container'),
        container2 : $('.hero'),
        header : $('header'),
        wrapperOverlay: $('.wrapper__overlay'),
        grid : $('.brc-expertise'),
      };
      app.navigation.toggleNav();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
