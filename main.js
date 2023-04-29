// $(document).ready(function () {
//     $('.toggle-btn').click(function (){
//         $(this).toggleClass('active');
//         $('.navbar-nav').toggleClass('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbarNav = document.querySelector('.navbar-nav');
  
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('active');
      navbarNav.classList.toggle('active');
    });
  });

  
  const blog = document.querySelector('.blog');
  const url = "https://dummyjson.com/products";
  let result = [];
  
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      // console.log(data);
      for (let i = 0; i < data.products.length; i++) {
        result += `
          <div class="card">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].thumbnail}" style="width:100%">
            <hr>
            <div class="container">
              <h4><b>${data.products[i].brand}</b></h4> 
              <p>${data.products[i].price}</p>
              <button class="card_btn">Add to cart</button> 
            </div>
          </div>
        `;
        blog.innerHTML = result;
      }
    });

    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("keyup", searchProducts);

    function searchProducts() {
      const searchTerm = document.querySelector("#searchInput").value.toLowerCase();
      const cards = document.querySelectorAll(".card");
    
      for (let i = 0; i < cards.length; i++) {
        const brand = cards[i].querySelector("h4").textContent.toLowerCase();
        if (brand.includes(searchTerm)) {
          cards[i].style.display = "block";
        } else {
          cards[i].style.display = "No such item in our store.";
        }
      }
    }  