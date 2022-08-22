class Wishlist {
  constructor(selector, listSelctor) {
    this.selector = selector;
    this.listSelctor = listSelctor;

    this.init();
  }

  init() {
    this._renderWishList();
  }

  _renderCatalogList () {
    console.log("2112 wishlist")
  }
}

window.addEventListener('DOMContentLoaded', function () {
  let wishlist = new Wishlist('#wishlist_wrap', 'item');
});
