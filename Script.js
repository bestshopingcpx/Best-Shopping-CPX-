function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} ৳${price} টাকায় কার্টে যুক্ত হয়েছে!`);
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let list = document.getElementById("cart-items");
  let total = 0;
  list.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - ৳${item.price}`;
    list.appendChild(li);
    total += item.price;
  });
  document.getElementById("total-price").innerText = `মোট: ৳${total}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  alert("কার্ট খালি করা হয়েছে!");
  location.reload();
}

// Auto-load cart if on cart page
if (window.location.pathname.includes("cart.html")) {
  showCart();
                                      }
