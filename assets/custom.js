jQuery_T4NT(document).ready(function ($) {
  /**
   * Variant selection changed
   */
  $(document).on('variant:change', function (evt, variant) {
    //console.log( variant );
  });
});

function CouponPupop () {
  console.log(geckoShopify)
  if (
    $('.coupon_new_wrap').length == 0 ||
    ($('.mobile_new_false').length > 0 && $(window).width() < 768) ||
    (Cookies.get('kalles_age_verify') != 'confirmed' &&
      $('.popup_age_wrap').length > 0)
  )
    return;
  var popup = $('.coupon_new_wrap'),
    stt = popup.data('stt'),
    pp_version = stt.pp_version,
    shown = false,
    pages = Cookies.get('kalles_shown_pages');

  var showPopup = function () {
    console.log('123')
    $.magnificPopup.open({
      items: {
        src: '#shopify-section-newsletter_pp .coupon_new_wrap'
      },
      type: 'inline',
      removalDelay: 500, //delay removal by X to allow out-animation
      tClose: nt_settings.close,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = 'mfp-move-horizontal new_pp_wrapper';
        },
        open: function () {
          // Will fire when this exact popup is opened
          // this - is Magnific Popup object
        },
        beforeClose: function () {
          if ($('#new_check_show:checked').length > 0) {
            Cookies.set('kalles_popup_' + pp_version, 'shown', {
              expires: stt.day_next,
              path: '/'
            });
          }
        },
        close: function () {
          Cookies.set('kalles_popup_' + pp_version, 'shown', {
            expires: stt.day_next,
            path: '/'
          });
        }
      }
    });
  };

  var showPopup2 = function () {
    console.log($.magnificPopup, 'magnificPopup')
    if ($.magnificPopup.instance.isOpen) {
      $.magnificPopup.close();
      setTimeout(function () {
        showPopup();
      }, $.magnificPopup.instance.st.removalDelay + 10);
    } else {
      showPopup();
    }
  };

  $('.open_coupon').on('click', function (e) {
    e.preventDefault();
    showPopup2();
  });

  popup.on('open_newsletter', function () {
    showPopup2();
  });

  if (designMode) return;

  if (!pages) pages = 0;
  if (pages < stt.number_pages) {
    pages++;
    Cookies.set('kalles_shown_pages', pages, {
      expires: stt.day_next,
      path: '/'
    });
    return false;
  }

  if (Cookies.get('kalles_popup_' + pp_version) != 'shown') {
    if (stt.after == 'scroll') {
      $(window).scroll(function () {
        if (shown) return false;
        if ($(document).scrollTop() >= stt.scroll_delay) {
          showPopup2();
          shown = true;
        }
      });
    } else {
      setTimeout(function () {
        showPopup2();
      }, stt.time_delay);
    }
  }
}

CouponPupop();
