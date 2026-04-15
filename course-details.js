let course = JSON.parse(localStorage.getItem("this course details"));
console.log(course)

const title = document.querySelector(".title");
const image_cover = document.querySelector("img");
const p = document.querySelector("p");
const span = document.querySelector("span");
const price = document.querySelector(".price-container .price");
const old_price = document.querySelector(".price-container .old-price");


title.innerHTML = course.title
image_cover.src = `assets/images/${course.image}`
p.innerHTML = course.description
span.innerHTML = `${course.rating} / (+${course.people - 1})`
price.innerHTML = course.price
old_price.innerHTML = course.oldPrice