// Add to Cart Button
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart() {
  alert('Product added to cart!');
}
