let row = document.querySelector(".row");
async function fetchApi(parm) {
  try {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${parm}
`
    );
    let response = await data.json();
    return response;
  } catch (error) {
    row.innerHTML = "server error";
  }
}
(async function () {
  spinner();
  let arr = await fetchApi(`Seafood`);
  !arr.meals ? (row.innerHTML = "check the internet") : display(arr.meals);
})();
function display(arr) {
  var box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `<div class="col-lg-4 g-4 ">
          <div class="card shadow-lg border-0">
            <img
              src= "${arr[i].strMealThumb}"
              class="card-img-top"
              alt=""
            />

            <div class="card-body">
              <h3 class="card-title fw-bold">${arr[i].strMeal}</h3>

              <div class="mb-3">
                <span class="badge bg-primary">${arr[i].strCategory}</span>
                <span class="badge bg-success">${arr[i].strArea}</span>
              </div>

              <h5>Instructions</h5>
              <p class="card-text text-muted" style="line-height: 1.7">
                ${arr[i].strInstructions}
              </p>

              <h5>Ingredients</h5>
              <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item">${arr[i].strIngredient1} – ${arr[i].strMeasure1}</li>
                <li class="list-group-item">${arr[i].strIngredient2} – ${arr[i].strMeasure2}</li>
                <li class="list-group-item">${arr[i].strIngredient3} – ${arr[i].strMeasure3}</li>
                <li class="list-group-item">${arr[i].strIngredient4}</li>
                <li class="list-group-item">${arr[i].strIngredient5}</li>
                <li class="list-group-item">${arr[i].strIngredient6}</li>
                <li class="list-group-item">${arr[i].strIngredient7}</li>
              </ul>

              <a
                href="${arr[i].strYoutube}"
                target="_blank"
                class="btn btn-danger"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>`;
  }
  row.innerHTML = box;
}
function spinner() {
  let box = `<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  row.innerHTML = box;
}
