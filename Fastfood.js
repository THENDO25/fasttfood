const prices = [
  30.98, // Special 1
  40.98, // Special 2
  20.98, // Special 3
  38.98, // Special 4
];

// Get quantity inputs and total price elements
const quantityInputs = [
  document.getElementById('quantity-1'),
  document.getElementById('quantity-2'),
  document.getElementById('quantity-3'),
  document.getElementById('quantity-4'),
];

const totalPriceElements = [
  document.getElementById('total-price-1'),
  document.getElementById('total-price-2'),
  document.getElementById('total-price-3'),
  document.getElementById('total-price-4'),
];

const spriceTagElements = [
  document.getElementById('sprice-tag-1'),
  document.getElementById('sprice-tag-2'),
  document.getElementById('sprice-tag-3'),
  document.getElementById('sprice-tag-4'),
];

// Update total price for each item when quantity changes
quantityInputs.forEach((quantityInput, index) => {
  quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value);
    const price = prices[index];
    const totalPrice = quantity * price;
    
    // Update total price element
    totalPriceElements[index].textContent = `R${totalPrice.toFixed(2)}`;
    
    // Update sprice-tag element
    spriceTagElements[index].textContent = `R${totalPrice.toFixed(2)}`;
  });
});
