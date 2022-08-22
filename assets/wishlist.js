class Wishlist {
  constructor(selector, listSelctor) {
    this.selector = selector;
    this.listSelctor = listSelctor;

    this.init();
  }

  init() {
    this._renderWishList();
  }

  _renderCatalogList() {}
}

window.addEventListener('DOMContentLoaded', function () {
  let wishlist = new Wishlist('#wishlist_wrap', 'item');
});
