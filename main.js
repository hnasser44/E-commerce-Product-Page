const Dialog = document.querySelector('dialog');
const MainModelImage = document.querySelector('.main-model-img');
const SubModelImages = document.querySelectorAll('.sub-model-img');
const PrevModalButton = document.querySelector('.prev');
const NextModalButton = document.querySelector('.next');
const CloseModalButton = document.querySelector('.close-modal-btn');
const header = document.querySelector('header');
const Menu = document.querySelector('.menu');
const OpenMenuIcon = document.querySelector('.open-menu-icon');
const CloseMenuIcon = document.querySelector('.close-menu-icon');
const Overlay = document.querySelector('.overlay');
const PrevBtn = document.querySelector('.prev-btn');
const NextBtn = document.querySelector('.next-btn');
const MainProduct = document.querySelector('.MainProduct');
const MinusIcon = document.querySelector('.minus-icon');
const PlusIcon = document.querySelector('.plus-icon');
const Quantity = document.querySelector('.quantity-input');
const CartCount = document.querySelector('.cart-count');
const AddToCartBtn = document.querySelector('.add-to-cart-btn');
const ULmenu = document.querySelector('ul');
const MainProdutImage = document.querySelector('.main-product-img');
const MainSubImages = document.querySelectorAll('.main-sub-img');
const CartIcon = document.querySelector('.cart');
const CartUI = document.querySelector('.dropdown-cart');
const CartProductCount = document.querySelector('.dropdown-cart .cart-product-count');
const CartProductTotal = document.querySelector('.dropdown-cart .cart-product-total');
const CartEmptyMessage = document.querySelector('.empty-cart');
const IconCartDel = document.querySelector('.icon-del');

function ApplyModelAnimation(element) {
  if (element.classList.contains('change-image-animation')) {
    element.classList.remove('change-image-animation');
    setTimeout(() => {
      element.classList.add('change-image-animation');
    }, 1);
  } else {
    element.classList.add('change-image-animation');
  }
}

function updateMainProductImage(src, number) {
  ApplyModelAnimation(MainProdutImage);
  MainProdutImage.setAttribute('src', `./images/image-product-${number}.jpg`);
}

function updateCartCount() {
  const currentQuantity = parseInt(Quantity.innerHTML) || 0;
  CartCount.innerHTML = parseInt(CartCount.innerHTML) + currentQuantity;
}

function handleEmptyCart(check) {
  const cartProducts = document.querySelector('.cart-product');
  const iconDel = document.querySelector('.icon-del');
  const checkout = document.querySelector('.checkout');
  cartProducts.style.display = check ? 'none' : 'flex';
  iconDel.style.display = check ? 'none' : 'block';
  checkout.style.display = check ? 'none' : 'block';
}

SubModelImages.forEach((image) => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const number = src.split('-')[2].split('.')[0];
    ApplyModelAnimation(MainModelImage);
    MainModelImage.setAttribute('src', `./images/image-product-${number}.jpg`);
  });
});

PrevModalButton.addEventListener('click', () => {
  const src = MainModelImage.getAttribute('src');
  const number = src.split('-')[2].split('.')[0];
  if (number > 1) {
    ApplyModelAnimation(MainModelImage);
    MainModelImage.setAttribute('src', `./images/image-product-${number - 1}.jpg`);
  }
});

NextModalButton.addEventListener('click', () => {
  const src = MainModelImage.getAttribute('src');
  const number = src.split('-')[2].split('.')[0];
  if (number < 4) {
    ApplyModelAnimation(MainModelImage);
    MainModelImage.setAttribute('src', `./images/image-product-${Number(number) + 1}.jpg`);
  }
});

CloseModalButton.addEventListener('click', () => {
  Dialog.classList.toggle('show');
  Overlay.style.display = 'none';
});

OpenMenuIcon.addEventListener('click', () => {
  Menu.classList.add('open');
  Menu.classList.add('mobile');
  Overlay.style.display = 'block';
});

CloseMenuIcon.addEventListener('click', () => {
  Menu.classList.remove('open');
  Overlay.style.display = 'none';
});

PrevBtn.addEventListener('click', () => {
  const src = MainProduct.getAttribute('src');
  const number = src.split('-')[2].split('.')[0];
  if (number > 1) {
    ApplyModelAnimation(MainProduct);
    MainProduct.setAttribute('src', `./images/image-product-${number - 1}.jpg`);
  }
});

NextBtn.addEventListener('click', () => {
  const src = MainProduct.getAttribute('src');
  const number = src.split('-')[2].split('.')[0];
  if (number < 4) {
    ApplyModelAnimation(MainProduct);
    MainProduct.setAttribute('src', `./images/image-product-${Number(number) + 1}.jpg`);
  }
});

MinusIcon.addEventListener('click', () => {
  let currentQuantity = parseInt(Quantity.innerHTML) || 0;
  if (currentQuantity <= 1) return;
  currentQuantity--;
  Quantity.innerHTML = currentQuantity;
});

PlusIcon.addEventListener('click', () => {
  let currentQuantity = parseInt(Quantity.innerHTML) || 0;
  if (currentQuantity >= 10) return;
  currentQuantity++;
  Quantity.innerHTML = currentQuantity;
});

AddToCartBtn.addEventListener('click', () => {
  CartUI.classList.remove('cart-open');
  if (CartCount.innerHTML > 10) return;
  updateCartCount();
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1000) ULmenu.classList.add('mobile');
  else ULmenu.classList.remove('mobile');
});

window.addEventListener('load', () => {
  if (window.innerWidth >= 1000) ULmenu.classList.remove('mobile');
  else ULmenu.classList.add('mobile');
});

MainProdutImage.addEventListener('click', () => {
  if (window.innerWidth <= 1000) return;
  Dialog.classList.toggle('show');
  Overlay.style.display = 'block';
  header.style.zIndex = '-9999';
});

MainSubImages.forEach((image) => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const number = src.split('-')[2].split('.')[0];
    ApplyModelAnimation(MainProdutImage);
    updateMainProductImage(src, number);
  });
});

CartIcon.addEventListener('click', () => {
  CartUI.classList.toggle('cart-open');
  if (CartCount.innerHTML == 0) handleEmptyCart(true);
  else {
    handleEmptyCart(false);
    CartEmptyMessage.style.display = 'none';
  }
  CartProductCount.innerHTML = CartCount.innerHTML;
  let total = parseInt(CartCount.innerHTML) * 125;
  CartProductTotal.innerHTML = `$${total}`;
});

IconCartDel.addEventListener('click', () => {
  CartCount.innerHTML = 0;
  CartProductCount.innerHTML = 0;
  CartProductTotal.innerHTML = '$0';
  CartEmptyMessage.style.display = 'block';
  handleEmptyCart(true);
});


