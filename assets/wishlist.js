(function ($) {
  'use strict';
  var body = $('body');

  geckoShopify.Wishlist = function () {
    $script(JSNTT4.data('wishlist'), function () {
      body.on('click', '.addRecentlyProductBtn', function (e) {
        e.preventDefault();
        const nt_recent = localStorage.getItem('nt_recent');
        console.log(nt_recent, 'nt_recent');
      });
    });
  };
})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
  geckoShopify.Wishlist();
});
