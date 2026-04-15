// const courses = [
//   {
//     title: "HTML Basics",
//     description: "Learn how to structure web pages using HTML. This course covers all essential tags, semantic elements, forms, tables, and best practices to build clean and accessible websites from scratch.",
//     image: "html-basics.png",
//     rating: 4.5,
//     people: 1200,
//     price: 19.99,
//     oldPrice: 39.99
//   },
//   {
//     title: "CSS Fundamentals",
//     description: "This course teaches you how to style modern websites using CSS. You will learn layouts, Flexbox, Grid, animations, responsive design, and how to create visually appealing user interfaces.",
//     image: "css-fundamentals.webp",
//     rating: 4.6,
//     people: 980,
//     price: 17.99,
//     oldPrice: 29.99
//   },
//   {
//     title: "JavaScript Intro",
//     description: "Start your journey into programming with JavaScript. Learn variables, functions, loops, arrays, and DOM manipulation to create interactive and dynamic web pages.",
//     image: "js-intro.jpg",
//     rating: 4.7,
//     people: 1500,
//     price: 21.99,
//     oldPrice: 34.99
//   },
//   {
//     title: "Advanced JavaScript",
//     description: "Deepen your understanding of JavaScript by learning advanced concepts such as closures, prototypes, asynchronous programming, promises, async/await, and real-world application patterns.",
//     image: "advanced-js.jpg",
//     rating: 4.8,
//     people: 1100,
//     price: 29.99,
//     oldPrice: 49.99
//   },
//   {
//     title: "React Basics",
//     description: "Learn how to build modern user interfaces using React. This course introduces components, props, state management, and how to structure scalable frontend applications.",
//     image: "react-basics.png",
//     rating: 4.7,
//     people: 1400,
//     price: 27.99,
//     oldPrice: 44.99
//   },
//   {
//     title: "React Advanced",
//     description: "Master advanced React concepts including hooks, context API, performance optimization, and reusable component architecture to build professional-grade applications.",
//     image: "react-advanced.jpg",
//     rating: 4.9,
//     people: 900,
//     price: 34.99,
//     oldPrice: 59.99
//   },
//   {
//     title: "Node.js Basics",
//     description: "Learn backend development with Node.js. Build servers, handle requests, create APIs, and understand how JavaScript works on the server side.",
//     image: "nodejs-basics.jpg",
//     rating: 4.6,
//     people: 800,
//     price: 24.99,
//     oldPrice: 39.99
//   },
//   {
//     title: "Express.js",
//     description: "This course teaches you how to build fast and scalable REST APIs using Express.js. Learn routing, middleware, and backend structure.",
//     image: "expressjs.jpg",
//     rating: 4.5,
//     people: 720,
//     price: 22.99,
//     oldPrice: null
//   },
//   {
//     title: "MongoDB Basics",
//     description: "Understand NoSQL databases with MongoDB. Learn how to store, query, update, and manage data efficiently for modern web applications.",
//     image: "mongodb-basics.jpg",
//     rating: 4.4,
//     people: 650,
//     price: 19.99,
//     oldPrice: 29.99
//   },
//   {
//     title: "Full Stack Development",
//     description: "Become a full stack developer by combining frontend and backend technologies. Build complete web applications using real-world project workflows.",
//     image: "full-stack-development.jpg",
//     rating: 4.9,
//     people: 1800,
//     price: 49.99,
//     oldPrice: 79.99
//   },

//   {
//     title: "UI Design",
//     description: "Learn how to design modern and clean user interfaces. This course focuses on layout principles, typography, colors, and design systems.",
//     image: "ui-design.jpg",
//     rating: 4.3,
//     people: 540,
//     price: 15.99,
//     oldPrice: 25.99
//   },
//   {
//     title: "UX Design",
//     description: "Understand user behavior and create better digital experiences. Learn wireframing, prototyping, user research, and usability principles.",
//     image: "ux-design.jpg",
//     rating: 4.4,
//     people: 600,
//     price: 18.99,
//     oldPrice: 29.99
//   },
//   {
//     title: "Figma Basics",
//     description: "Learn how to design interfaces and prototypes using Figma. This tool-based course helps you create professional UI designs from scratch.",
//     image: "figra-basics.jpg",
//     rating: 4.6,
//     people: 1000,
//     price: 16.99,
//     oldPrice: 26.99
//   },
//   {
//     title: "Photoshop",
//     description: "Master image editing using Adobe Photoshop. Learn photo manipulation, retouching, and design techniques used in professional workflows.",
//     image: "photoshop.jpg",
//     rating: 4.2,
//     people: 700,
//     price: 14.99,
//     oldPrice: null
//   },
//   {
//     title: "Illustrator",
//     description: "Learn vector design using Adobe Illustrator. Create logos, icons, and scalable illustrations for branding and digital projects.",
//     image: "illustrator.jpg",
//     rating: 4.5,
//     people: 680,
//     price: 17.99,
//     oldPrice: 27.99
//   },

//   {
//     title: "Python Basics",
//     description: "Start programming with Python. Learn syntax, variables, loops, functions, and how to build simple programs step by step.",
//     image: "python-basics.png",
//     rating: 4.7,
//     people: 2000,
//     price: 24.99,
//     oldPrice: 44.99
//   },
//   {
//     title: "Python Advanced",
//     description: "Take your Python skills further with object-oriented programming, file handling, modules, and advanced problem-solving techniques.",
//     image: "python-advanced.png",
//     rating: 4.8,
//     people: 1500,
//     price: 29.99,
//     oldPrice: 49.99
//   },
//   {
//     title: "Data Analysis",
//     description: "Learn how to analyze and visualize data using Python libraries like Pandas and Matplotlib. Gain insights from real datasets.",
//     image: "data-analysis.png",
//     rating: 4.6,
//     people: 1200,
//     price: 34.99,
//     oldPrice: 54.99
//   },
//   {
//     title: "Machine Learning",
//     description: "Understand machine learning concepts and build predictive models using real-world datasets. Learn supervised and unsupervised learning.",
//     image: "machine-learning.jpg",
//     rating: 4.9,
//     people: 1700,
//     price: 39.99,
//     oldPrice: 69.99
//   },
//   {
//     title: "AI Introduction",
//     description: "Explore the fundamentals of artificial intelligence, including how machines learn, reason, and solve problems in modern applications.",
//     image: "ai-introduction.jpgfor",
//     rating: 4.5,
//     people: 900,
//     price: 28.99,
//     oldPrice: 44.99
//   },

//   {
//     title: "Digital Marketing",
//     description: "Learn how to grow online businesses using SEO, social media marketing, paid ads, and content strategies that convert visitors into customers.",
//     image: "digital-marketing.jpg",
//     rating: 4.3,
//     people: 540,
//     price: 18.99,
//     oldPrice: 29.99
//   },
//   {
//     title: "SEO Basics",
//     description: "Understand search engine optimization and learn how to improve website ranking using keywords, backlinks, and on-page techniques.",
//     image: "seo-basics.jpg",
//     rating: 4.4,
//     people: 620,
//     price: 16.99,
//     oldPrice: 26.99
//   },
//   {
//     title: "Content Marketing",
//     description: "Learn how to create engaging and valuable content that attracts audiences, builds trust, and increases brand visibility.",
//     image: "",
//     rating: 4.2,
//     people: 500,
//     price: 14.99,
//     oldPrice: null
//   },
//   {
//     title: "Social Media Ads",
//     description: "Master paid advertising on platforms like Facebook and Instagram. Learn targeting, budgeting, and campaign optimization strategies.",
//     image: "",
//     rating: 4.5,
//     people: 750,
//     price: 19.99,
//     oldPrice: 29.99
//   },
//   {
//     title: "Email Marketing",
//     description: "Build effective email campaigns, manage subscriber lists, and learn how to convert leads into customers through email strategies.",
//     image: "",
//     rating: 4.3,
//     people: 480,
//     price: 13.99,
//     oldPrice: null
//   },

//   {
//     title: "Git & GitHub",
//     description: "Learn version control using Git and GitHub. Track changes, collaborate with teams, and manage code efficiently in real projects.",
//     image: "",
//     rating: 4.6,
//     people: 800,
//     price: 12.99,
//     oldPrice: null
//   },
//   {
//     title: "Linux Basics",
//     description: "Learn Linux fundamentals including terminal commands, file system navigation, and system management for developers.",
//     image: "",
//     rating: 4.4,
//     people: 600,
//     price: 15.99,
//     oldPrice: 25.99
//   },
//   {
//     title: "Cybersecurity",
//     description: "Understand how to protect systems and data from cyber threats. Learn security principles, attacks, and defense techniques.",
//     image: "",
//     rating: 4.7,
//     people: 900,
//     price: 27.99,
//     oldPrice: 44.99
//   },
//   {
//     title: "Cloud Computing",
//     description: "Learn cloud fundamentals and how modern applications are deployed using services like AWS, Azure, and cloud architecture concepts.",
//     image: "",
//     rating: 4.5,
//     people: 850,
//     price: 31.99,
//     oldPrice: 49.99
//   },
//   {
//     title: "DevOps Basics",
//     description: "Understand DevOps principles including CI/CD pipelines, automation, deployment, and collaboration between development and operations teams.",
//     image: "",
//     rating: 4.6,
//     people: 780,
//     price: 29.99,
//     oldPrice: 45.99
//   }
// ];

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
  {
    title: "Advanced JavaScript",
    description: "Deepen your understanding of JavaScript by learning advanced concepts such as closures, prototypes, asynchronous programming, promises, async/await, and real-world application patterns.",
    image: "advanced-js.jpg",
    rating: 4.8,
    people: 1100,
    price: 29.99,
    oldPrice: 49.99
  },
  {
    title: "React Basics",
    description: "Learn how to build modern user interfaces using React. This course introduces components, props, state management, and how to structure scalable frontend applications.",
    image: "react-basics.png",
    rating: 4.7,
    people: 1400,
    price: 27.99,
    oldPrice: 44.99
  },
  {
    title: "React Advanced",
    description: "Master advanced React concepts including hooks, context API, performance optimization, and reusable component architecture to build professional-grade applications.",
    image: "react-advanced.jpg",
    rating: 4.9,
    people: 900,
    price: 34.99,
    oldPrice: 59.99
  },
  {
    title: "Node.js Basics",
    description: "Learn backend development with Node.js. Build servers, handle requests, create APIs, and understand how JavaScript works on the server side.",
    image: "nodejs-basics.jpg",
    rating: 4.6,
    people: 800,
    price: 24.99,
    oldPrice: 39.99
  },
  {
    title: "Express.js",
    description: "This course teaches you how to build fast and scalable REST APIs using Express.js. Learn routing, middleware, and backend structure.",
    image: "expressjs.jpg",
    rating: 4.5,
    people: 720,
    price: 22.99,
    oldPrice: null
  },
  {
    title: "MongoDB Basics",
    description: "Understand NoSQL databases with MongoDB. Learn how to store, query, update, and manage data efficiently for modern web applications.",
    image: "mongodb-basics.jpg",
    rating: 4.4,
    people: 650,
    price: 19.99,
    oldPrice: 29.99
  },
  {
    title: "Full Stack Development",
    description: "Become a full stack developer by combining frontend and backend technologies. Build complete web applications using real-world project workflows.",
    image: "full-stack-development.jpg",
    rating: 4.9,
    people: 1800,
    price: 49.99,
    oldPrice: 79.99
  },
  {
    title: "UI Design",
    description: "Learn how to design modern and clean user interfaces. This course focuses on layout principles, typography, colors, and design systems.",
    image: "ui-design.jpg",
    rating: 4.3,
    people: 540,
    price: 15.99,
    oldPrice: 25.99
  },
  {
    title: "UX Design",
    description: "Understand user behavior and create better digital experiences. Learn wireframing, prototyping, user research, and usability principles.",
    image: "ux-design.jpg",
    rating: 4.4,
    people: 600,
    price: 18.99,
    oldPrice: 29.99
  },
  {
    title: "Figma Basics",
    description: "Learn how to design interfaces and prototypes using Figma. This tool-based course helps you create professional UI designs from scratch.",
    image: "figra-basics.jpg",
    rating: 4.6,
    people: 1000,
    price: 16.99,
    oldPrice: 26.99
  },
  {
    title: "Photoshop",
    description: "Master image editing using Adobe Photoshop. Learn photo manipulation, retouching, and design techniques used in professional workflows.",
    image: "photoshop.jpg",
    rating: 4.2,
    people: 700,
    price: 14.99,
    oldPrice: null
  },
  {
    title: "Illustrator",
    description: "Learn vector design using Adobe Illustrator. Create logos, icons, and scalable illustrations for branding and digital projects.",
    image: "illustrator.jpg",
    rating: 4.5,
    people: 680,
    price: 17.99,
    oldPrice: 27.99
  },
  {
    title: "Python Basics",
    description: "Start programming with Python. Learn syntax, variables, loops, functions, and how to build simple programs step by step.",
    image: "python-basics.png",
    rating: 4.7,
    people: 2000,
    price: 24.99,
    oldPrice: 44.99
  },
  {
    title: "Python Advanced",
    description: "Take your Python skills further with object-oriented programming, file handling, modules, and advanced problem-solving techniques.",
    image: "python-advanced.png",
    rating: 4.8,
    people: 1500,
    price: 29.99,
    oldPrice: 49.99
  },
  {
    title: "Data Analysis",
    description: "Learn how to analyze and visualize data using Python libraries like Pandas and Matplotlib. Gain insights from real datasets.",
    image: "data-analysis.png",
    rating: 4.6,
    people: 1200,
    price: 34.99,
    oldPrice: 54.99
  },
  {
    title: "Machine Learning",
    description: "Understand machine learning concepts and build predictive models using real-world datasets. Learn supervised and unsupervised learning.",
    image: "machine-learning.jpg",
    rating: 4.9,
    people: 1700,
    price: 39.99,
    oldPrice: 69.99
  },
  {
    title: "AI Introduction",
    description: "Explore the fundamentals of artificial intelligence, including how machines learn, reason, and solve problems in modern applications.",
    image: "ai-introduction.jpg",
    rating: 4.5,
    people: 900,
    price: 28.99,
    oldPrice: 44.99
  },
  {
    title: "Digital Marketing",
    description: "Learn how to grow online businesses using SEO, social media marketing, paid ads, and content strategies that convert visitors into customers.",
    image: "digital-marketing.jpg",
    rating: 4.3,
    people: 540,
    price: 18.99,
    oldPrice: 29.99
  },
  {
    title: "SEO Basics",
    description: "Understand search engine optimization and learn how to improve website ranking using keywords, backlinks, and on-page techniques.",
    image: "seo-basics.jpg",
    rating: 4.4,
    people: 620,
    price: 16.99,
    oldPrice: 26.99
  },
  {
    title: "Content Marketing",
    description: "Learn how to create engaging and valuable content that attracts audiences, builds trust, and increases brand visibility.",
    image: "content-marketing.jpg",
    rating: 4.2,
    people: 500,
    price: 14.99,
    oldPrice: null
  },
  {
    title: "Social Media Ads",
    description: "Master paid advertising on platforms like Facebook and Instagram. Learn targeting, budgeting, and campaign optimization strategies.",
    image: "social-media-ads.webp",
    rating: 4.5,
    people: 750,
    price: 19.99,
    oldPrice: 29.99
  },
  {
    title: "Email Marketing",
    description: "Build effective email campaigns, manage subscriber lists, and learn how to convert leads into customers through email strategies.",
    image: "email-marketing.jpg",
    rating: 4.3,
    people: 480,
    price: 13.99,
    oldPrice: null
  },
  {
    title: "Git & GitHub",
    description: "Learn version control using Git and GitHub. Track changes, collaborate with teams, and manage code efficiently in real projects.",
    image: "git-github.jpeg",
    rating: 4.6,
    people: 800,
    price: 12.99,
    oldPrice: null
  },
  {
    title: "Linux Basics",
    description: "Learn Linux fundamentals including terminal commands, file system navigation, and system management for developers.",
    image: "linux-basics.jpg",
    rating: 4.4,
    people: 600,
    price: 15.99,
    oldPrice: 25.99
  },
  {
    title: "Cybersecurity",
    description: "Understand how to protect systems and data from cyber threats. Learn security principles, attacks, and defense techniques.",
    image: "cybersecurity.png",
    rating: 4.7,
    people: 900,
    price: 27.99,
    oldPrice: 44.99
  },
  {
    title: "Cloud Computing",
    description: "Learn cloud fundamentals and how modern applications are deployed using services like AWS, Azure, and cloud architecture concepts.",
    image: "cloud-computing.jpg",
    rating: 4.5,
    people: 850,
    price: 31.99,
    oldPrice: 49.99
  },
  {
    title: "DevOps Basics",
    description: "Understand DevOps principles including CI/CD pipelines, automation, deployment, and collaboration between development and operations teams.",
    image: "devops-basics.jpg",
    rating: 4.6,
    people: 780,
    price: 29.99,
    oldPrice: 45.99
  }
];


const header = document.querySelector("header");

// ========== Hundle search toggle ==========
const searchInput = document.querySelector(".search input");
const closeBtn = document.querySelector(".close");

searchInput.addEventListener("input", ()=>{
    searchInput.value = searchInput.value.toLowerCase();
    
    closeBtn.addEventListener("click", ()=>{
        searchInput.value = ""
        closeBtn.style.display = "none";
    })
    
    if (searchInput.value.length > 0) {
        closeBtn.style.display = "block";
    }
    else {
        closeBtn.style.display = "none";
    }
})
// ========== /Hundle search toggle ==========


// ========== Load courses ==========
function loadCourses() {
    for (let i = 0; i < courses.length; i++) {
        let object = courses[i];

        header.innerHTML += 
        `<article>
                    <a href="course-details.html" onclick="course(this)">
                        <div class="image_container">
                            <img src="assets/images/${object.image}" alt="course ${i+1} image">
                        </div>
                        <h4>${object.title}</h4>
                        <div class="infos">
                            <span>${object.rating}/(+${object.people - 1})</span>
                        </div> 
                    </a>
                </article>`;
    }
}
// ========== /Load courses ==========


// ========== Hundle Seaching ==========
function search() {
    const searchValue = searchInput.value.toLowerCase();
    const searchCount = document.querySelector("main p");

    header.innerHTML = "";
    let count = 0;
    
    if (searchValue !== "") {
      if (searchInput.value == "all") {
        loadCourses();
        searchCount.innerHTML = `All courses`;
      }
      else {
        for (let i = 0; i < courses.length; i++) {
            let object = courses[i];
      
            if (object.title.toLowerCase().includes(searchValue)) {
                count++;

                header.innerHTML += `<article>
                    <a href="">
                        <div class="image_container">
                            <img src="assets/images/${object.image}" alt="course ${i+1} image">
                        </div>
                        <h4>${object.title}</h4>
                        <div class="infos">
                            <span>${object.rating}/(+${object.people - 1})</span>
                        </div> 
                    </a>
                </article>`;
            }
        }
        searchCount.innerHTML = `Results found : ${count}`;
      }
    }
    else {
      searchCount.innerHTML = "";
    }
}

function clearInput() {
  searchInput.focus();
}

searchInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    search();
    searchInput.blur();
  }
})
// ========== /Hundle Seaching ==========




// ========== stock THIS course details to local storage ==========
function course(target) {
  let title = target.querySelector("h4").textContent;
  let courseDetails;
  
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].title.includes(title)) {
      courseDetails = courses[i]
    }
  }

  localStorage.setItem("this course details", JSON.stringify(courseDetails));
}
// ========== /Hundle Courses Details ==========