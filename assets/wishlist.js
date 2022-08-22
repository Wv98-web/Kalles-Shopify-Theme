(function ($) {
  'use strict';
  var body = $('body');

  geckoShopify.Wishlist = function (sl) {
    $script(JSNTT4.data('wishlist'), function () {
      var el = sl || $('#recently_wrap');

      body.on('click', '.wishlist_delete', function (e) {
        e.preventDefault();

        var $this = $(this),
          pid = $this.data('pid'),
          ls = localStorage.getItem('nt_recent'),
          id = t_name == 'product' ? el.data('id') : '19041994',
          Sectionid = el.data('sid'),
          get = el.data('get'),
          unpr = el.data('unpr'),
          limit = el.data('limit');

        if (ls != null) {
          var arrls = ls.split(','),
            index = arrls.indexOf(id);

          if (index > -1) {
            arrls = arrls.splice(0, limit + 1);
            arrls.splice(index, 1);
          } else {
            arrls = arrls.splice(0, limit);
          }
          // console.log(index);
          console.log(arrls);
          console.log(pid);

          arrls.filter(function (item, index) {
            console.log(item.includes(pid), 'item');
            return item.includes(pid) == false;
          });
          console.log(arrls, 'filter');

          if (arrls.length == 0) {
            el.slideUp();
            return false;
          }

          var arr_list = arrls.toString(),
            uri = arr_list.replace(/,/g, ' OR '),
            res = encodeURI(uri);
          console.log(res);

          $.ajax({
            url:
              get +
              '?section_id=' +
              Sectionid +
              '&type=product&options[unavailable_products]=' +
              unpr +
              '&q=' +
              res,
            dataType: 'html',
            type: 'GET',
            success: function (section) {
              //console.log(section)
              var recentlyMarkup = designMode
                ? $($(section)[2]).html()
                : $(section).html();
              try {
                recentlyMarkup.trim();
              } catch (err) {
                recentlyMarkup = $(section).html();
              }

              if (recentlyMarkup.trim() !== '') {
                //console.log(responsive);
                el.html(recentlyMarkup);

                var seat = el.find('.pr_animated:not(.done)');
                geckoShopify.class_sequentially(seat);

                var $this = el.find('.nt_products_holder');
                geckoShopify.refresh_flickity($this);
                geckoShopify.flickityt4sResposition(false, $this);
                geckoShopify.recalculateSwatches();

                geckoShopify.InitCountdown();
                //currency
                body.trigger('refresh_currency');
                //product review
                geckoShopify.review();
                // wishlist
                geckoShopify.lazyWishUpdate();
              }
            },
            error: function () {
              _this.hide();
            },
            complete: function () {}
          });
        } else {
          el.html('');
          var arrls = new Array();
        }
      });

      body.on('click', '.addRecentlyProductBtn', function (e) {
        e.preventDefault();

        var ls = localStorage.getItem('nt_recent'),
          id = t_name == 'product' ? el.data('id') : '19041994',
          Sectionid = el.data('sid'),
          get = el.data('get'),
          unpr = el.data('unpr'),
          limit = el.data('limit');

        if (ls != null) {
          var arrls = ls.split(','),
            index = arrls.indexOf(id);

          if (index > -1) {
            arrls = arrls.splice(0, limit + 1);
            arrls.splice(index, 1);
          } else {
            arrls = arrls.splice(0, limit);
          }
          // console.log(index);
          // console.log(arrls);

          if (arrls.length == 0) {
            el.slideUp();
            return false;
          }

          var arr_list = arrls.toString(),
            uri = arr_list.replace(/,/g, ' OR '),
            res = encodeURI(uri);
          // console.log(res);

          $.ajax({
            url:
              get +
              '?section_id=' +
              Sectionid +
              '&type=product&options[unavailable_products]=' +
              unpr +
              '&q=' +
              res,
            dataType: 'html',
            type: 'GET',
            success: function (section) {
              //console.log(section)
              var recentlyMarkup = designMode
                ? $($(section)[2]).html()
                : $(section).html();
              try {
                recentlyMarkup.trim();
              } catch (err) {
                recentlyMarkup = $(section).html();
              }

              if (recentlyMarkup.trim() !== '') {
                //console.log(responsive);
                el.html(recentlyMarkup);

                var seat = el.find('.pr_animated:not(.done)');
                geckoShopify.class_sequentially(seat);

                var $this = el.find('.nt_products_holder');
                geckoShopify.refresh_flickity($this);
                geckoShopify.flickityt4sResposition(false, $this);
                geckoShopify.recalculateSwatches();

                geckoShopify.InitCountdown();
                //currency
                body.trigger('refresh_currency');
                //product review
                geckoShopify.review();
                // wishlist
                geckoShopify.lazyWishUpdate();
              }
            },
            error: function () {
              _this.hide();
            },
            complete: function () {}
          });
        } else {
          el.html('');
          var arrls = new Array();
        }
      });
    });
  };
})(jQuery_T4NT);

jQuery_T4NT(document).ready(function ($) {
  geckoShopify.Wishlist();
});
