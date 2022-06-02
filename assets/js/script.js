// food picture generator api link:
var url = "https://foodish-api.herokuapp.com/api/";


// food api
function getImage() {

fetch(url).then(function (response) {
    response.json().then(function (data) {
      var food = data.image.split("/");
      food = food[4];
      document.querySelector("#displayImg").src = data.image;
      fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=9f8c06a1&app_key=37fb7006cd139a8bc28ebed08978d58b`
      ).then(function (response) {
        response.json().then(function (data) {
          test = data;
          console.log(data);
          let ingredients = data.hits[0].recipe.ingredientLines || '';
          if (ingredients) {
            let itemList = document.getElementById('ingredients');
            itemList.innerHTML = '';
            itemList.innerHTML = `<h5>${data.hits[0].recipe.label}</h5>`
            ingredients.forEach(item => {
                itemList.innerHTML +=
                `<li>${item}</li>`
            });
          }
        });
      });
    });
  });
}

getImage();

document.querySelector("button").addEventListener("click", getImage);