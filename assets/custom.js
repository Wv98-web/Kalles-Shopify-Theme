jQuery_T4NT(document).ready(function ($) {
  /**
   * Variant selection changed
   */
  $(document).on('variant:change', function (evt, variant) {
    //console.log( variant );
  });
});

function CouponPupop() {
  var showPopup = function () {
    $.magnificPopup.open({
      items: {
        src: '.coupon_pupop_content'
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
        // e.t.c.
      }
    });
  };
  $('.coupon_pupop').on('click', function (e) {
    e.preventDefault();
    showPopup();
  });
}
