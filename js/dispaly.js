// food picture generator api link:
var url = "https://foodish-api.herokuapp.com/api/";

    // calling fetch function on the first server
    function getImage() {
    // getting response back from serer
    fetch(url).then(function (response) {
      // making the data readable by calling json
    response.json().then(function (data) {
      // getting image and storing it in food
      var food = data.image.split("/");
      // getting the fourth element in the food url
      food = food[4];
      // selecting the div and storing image in the image tag
      document.querySelector("#displayImg").src = data.image;
      // calling fetch function on the second url
      fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=9f8c06a1&app_key=37fb7006cd139a8bc28ebed08978d58b`
      // getting response back
      ).then(function (response) {
        // making that response back readable
        response.json().then(function (data) {
          // storing data in test
            test = data;
            // storing ingredients 
          let ingredients = data.hits[0].recipe.ingredientLines || '';
          // adding list items by a if inro listItem in html
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
//calling getImage();
getImage();
//selecting the button and calling event listener on it and calling the get image function
document.querySelector("button").addEventListener("click", getImage);