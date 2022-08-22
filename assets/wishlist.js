(function ($) {
  'use strict';

  geckoShopify.Wishlist = function () {
    $script(JSNTT4.data('wishlist'), function () {
      console.log('wishlist 123');
    });
  };
})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
  geckoShopify.Wishlist();
  console.log('wishlist 123');
});
