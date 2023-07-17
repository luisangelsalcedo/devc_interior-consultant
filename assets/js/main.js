const $ = ( selector ) => document.querySelector(selector);
const $$ = ( selector ) => document.querySelectorAll(selector);

const $button = $(".page-menu-button");
const $page = $(".page");
const $menuItems = $$(".page-menu a");


$button.addEventListener("click", () => {
    $page.classList.toggle("visible");
})

$menuItems.forEach((ele) => {    
    ele.addEventListener("click", () => {
        $page.classList.remove("visible");
    })
})