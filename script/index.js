const courses = [
  {
    title: "HTML Basics",
    description: "Learn how to structure web pages using HTML. This course covers all essential tags, semantic elements, forms, tables, and best practices to build clean and accessible websites from scratch.",
    image: "html-basics.png",
    rating: 4.5,
    people: 1200,
    price: 19.99,
    oldPrice: 39.99
  },
  {
    title: "CSS Fundamentals",
    description: "This course teaches you how to style modern websites using CSS. You will learn layouts, Flexbox, Grid, animations, responsive design, and how to create visually appealing user interfaces.",
    image: "css-fundamentals.webp",
    rating: 4.6,
    people: 980,
    price: 17.99,
    oldPrice: 29.99
  },
  {
    title: "JavaScript Intro",
    description: "Start your journey into programming with JavaScript. Learn variables, functions, loops, arrays, and DOM manipulation to create interactive and dynamic web pages.",
    image: "js-intro.jpg",
    rating: 4.7,
    people: 1500,
    price: 21.99,
    oldPrice: 34.99
  },
]


const section = document.querySelector("section");

function loadHeaderCourses() {
    for (let i = 0; i < courses.length+2; i++){
        let object = courses[i];
        section.innerHTML += 
        `<article>
                <div class="image_container">
                    <img src="assets/images/${object.image}" alt="header course ${i+1} image">
                </div>
                <h4>${object.title}</h4>
                <div class="infos">
                    <span>${object.rating}/(+${object.people - 1})</span>
                </div>
            </article>`
    }
}
loadHeaderCourses();