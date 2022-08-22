(function ($) {
  'use strict';
  var body = $('body');

  geckoShopify.Wishlist = function () {
    $script(JSNTT4.data('wishlist'), function () {
      body.on('click', '.addRecentlyProduct > a', function (e) {
        e.preventDefault();
        localStorage.setItem('wish', $(this));
      });
    });
  };
})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
  geckoShopify.Wishlist();
});
