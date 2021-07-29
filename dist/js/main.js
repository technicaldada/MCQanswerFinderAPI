// --------------------toggler----------------
const openButton = document.querySelector(".open_button");
const closeButton = document.querySelector(".close_button");
const togglemenu = document.querySelector(".sidebar_container");
var toggle = true;

openButton.addEventListener("click", () => {
  if (toggle) {
    togglemenu.removeAttribute("id");
    togglemenu.setAttribute("id", "show");
    toggle = !toggle;
  }
});
closeButton.addEventListener("click", () => {
  if (!toggle) {
    togglemenu.removeAttribute("id");
    togglemenu.setAttribute("id", "hide");
    toggle = !toggle;
  }
});
// --------------------toggler----------------//
//-------------------------result-component------------//
const result_container = document.querySelector(".result_container");
var results = "";
function result_component(title, link, desc) {
  results += `<div class="result">
        <a href="" class="title_link">
          <h4 class="title">This is the title of the result</h4>
        </a>
        <a href="#" class="link">This is the link</a>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
        </p>
      </div>`;
}
//-------------------------result-component------------//
//---------------------gcse-request--------------------//
const search = document.querySelector("#search");
const search_button = document.querySelector("#search_button");
const loader = document.querySelector(".loader_container");
const API_URL =
  "https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyB5aClP5j-dhqt6bEEsDuzk-ibYY-_x6qM&cx=438ecf4bee3c67e87&q=solutions";

async function requestSearches() {
  await loader.setAttribute("id", "appear");
  const rawResponse = await fetch(API_URL);
  const response = await rawResponse.json();
  // await console.log(response);
  await loader.setAttribute("id", "disappear");
  return response;
}

search_button.addEventListener("click", () => {
  requestSearches().then((response) => {
    console.log("Hey Khushi");
  });
});

//---------------------gcse-request--------------------//
