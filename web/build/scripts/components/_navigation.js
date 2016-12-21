var app = app || {};
(function($){
  app.navigation = {
    modalShow : function () {
      app.navigation.els.menuIcon.click(function() {
        app.navigation.els.overlay.animate({
          "z-index" : 10,
          "opacity" : 1,
          "transition" : "0s"
        }, 800);
      });
   },
    init : function() {
      app.navigation.els = {
        menuIcon : $('img.hero__nav-btn'),
        overlay : $('div.hero__overlay'),
      };
      app.navigation.modalShow();
    }
  };
  jQuery(document).ready(function() {
    app.navigation.init();
  });
}(jQuery));
