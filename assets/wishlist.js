(function ($) {
  'use strict';
  var body = $('body');

  geckoShopify.Wishlist = function () {
    $script(JSNTT4.data('wishlist'), function () {
      body.on('click', '.addRecentlyProduct', function (e) {
        e.preventDefault();
        console.log($(this), 'this');

        localStorage.setItem('recent_view', e);
      });
    });
  };

  geckoShopify.wishlistLocal = function () {
    if (!sp_nt_storage || nt_settings.wishlist_type != '1') return;

    var limit = 80;

    // add wishlist
    body.on('click', '.wishlistadd', function (e) {
      e.preventDefault();
      var _this = $(this),
        dt_id = _this.data('id') || '',
        id = 'id:' + dt_id,
        ls = localStorage.getItem('nt_wis');

      // check id exit
      if (id.length < 6) return;
      _this.addClass('pe_none');

      if (ls != null && ls.length > 0) {
        var arrls = ls.split(',');
        arrls.unshift(id);
      } else {
        var arrls = new Array();
        arrls.unshift(id);
      }
      arrls = arrls.filter(onlyUnique);

      if (arrls.length > limit) {
        arrls = arrls.splice(0, limit);
      }
      localStorage.setItem('nt_wis', arrls.toString());

      //_this.removeClass('pe_none wishlistadd').addClass('wis_added').find('.tt_txt').text(txt_view);
      $('.wishlistadd[data-id="' + dt_id + '"]')
        .removeClass('pe_none wishlistadd')
        .addClass(cl_w1)
        .find('.tt_txt')
        .text(txt_view);
      geckoShopify.wishlistUpdate(1);
    });

    // triger click
    body.on('click', '.wis_added,.js_link_wis', function (e) {
      e.preventDefault();
      if (wis_atc_added == '2' && !$(this).hasClass('js_link_wis')) return;
      // console.log('wis_added');
      $ld.trigger('ld_bar_star');
      setTimeout(function () {
        $ld.trigger('ld_bar_end');
      }, 300);
      window.location.href = wis_ntjs.attr('href');
    });

    // remove wishlist
    body.on('click', cl_w2, function (e) {
      e.preventDefault();
      var _this = $(this),
        dt_id = _this.data('id'),
        id = 'id:' + dt_id,
        ls = localStorage.getItem('nt_wis'),
        un_wis_added = !_this.hasClass('wis_added');

      _this.addClass('pe_none wishlistadd');
      var arrls = ls.split(','),
        index = arrls.indexOf(id);
      // console.log(arrls);
      if (index > -1) {
        arrls = arrls.splice(0, limit + 1);
        arrls.splice(index, 1);
      } else {
        arrls = arrls.splice(0, limit);
      }
      // console.log(arrls);
      localStorage.setItem('nt_wis', arrls.toString());
      if (un_wis_added) {
        _this.closest('.nt_pr').remove();
      } else {
        // update when remove wislist on quickview
        $('.wis_added[data-id="' + dt_id + '"]')
          .removeClass('wis_remve wis_added')
          .addClass('wishlistadd')
          .find('.tt_txt')
          .text(txt_add);
      }
      _this.removeClass('pe_none wis_remve wis_added');
      geckoShopify.wishlistUpdate(1);
      if (arrls.toString() == '' && un_wis_added) {
        window.location.href = wis_ntjs.attr('href');
      }
    });
  };
})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
  geckoShopify.Wishlist();
});
