const $button = document.querySelector(".button");
const $menu = document.querySelector(".menu");

$button.addEventListener("click", (e) => {
  console.log("Hola");
  console.log($button.classList.contains("button"));

  if ($button.classList.contains("button")) {
    // $menu.classList.add('op')
    $menu.classList.toggle("red");
  }
});
