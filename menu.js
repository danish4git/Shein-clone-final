var cart = JSON.parse(localStorage.getItem("cartitem")) || [];
  var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";

  async function showmeal() {
    let response = await fetch(url);
    let data = await response.json();
    let datas = data.meals;
    console.log(datas);
    dishes(datas);
  }
  showmeal();

  function dishes(arr) {
    arr.map(function (el) {
      let name = document.createElement("h4");
      let price = document.createElement("p");
      let div = document.createElement("div");
      div1 = document.createElement("div");
      let img = document.createElement("img");
      let buttn = document.createElement("button");
      buttn.textContent = "Add to Cart";

      price.textContent = Math.floor(Math.random() * (500 - 100 + 100));
      div1.append(price, buttn);
      img.src = el.strMealThumb;
      name.textContent = el.strMeal;
      div.append(img, name, div1);
      document.querySelector(".dishes").append(div);

      buttn.addEventListener("click", addtocart);

      function addtocart() {
        let user = {
          name: el.strMeal,
          img: el.strMealThumb,
          price: Math.floor(Math.random() * (500 - 100 + 100)),
        };
        cart.push(user);
        localStorage.setItem("cartitem", JSON.stringify(cart));
        item();
      }
    });
    function item() {
      document.querySelector(".dish").textContent = "";
      document.querySelector(".dish").textContent = cart.length;
    }
  }