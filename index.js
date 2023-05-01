const sideBarList = [
    {
        label: "Home",
        link: "index.html"
    },
    {
        label: "Topics",
        link: "topics.html"
    },
    {
        label: "Contact",
        link: "contact.html"
    },
    // {
    //     label: "Page",
    //     link: "page.html"
    // },
    {
        label: "Scientific Committee",
        link: "scientificCommittee.html"
    },
    {
        label: "Organizing Committee",
        link: "organizingCommittee.html"
    }

]

const CONFERENCE_TITLE_1 = "International Uzbek-Ukrainian Conference";
const CONFERENCE_TITLE_2 = "Modern problems of the theory of stochastic processes and their applications";
const DATE = "October 10-11, 2023";


// function createSideMenu() {
//     const element = document.getElementById("nav-menu");
//     const title = document.getElementById("page-title");

//     const ul = document.createElement("ul");
//     ul.classList = "nav";
//     // ul.classList.add("nav flex-column");
//     for (const el of sideBarList) {
//         const li = document.createElement("li");
//         const a = document.createElement("a");

//         a.textContent = el.label;
//         a.href = el.link;

//         li.appendChild(a);
//         ul.appendChild(li);

//         li.classList.add("nav-item");
//         a.classList.add("nav-link");
//         if (el.label.toLowerCase() === title.innerText.toLowerCase()) {
//             a.classList.add("active");
//         }
//     }
    
//     element.appendChild(ul);
// }

function createMainTitle() {
    const element = document.getElementById("main-title");
    const h2 = document.createElement("h2")
    h2.textContent = CONFERENCE_TITLE_1.toLocaleUpperCase();
    const h1 = document.createElement("h1")
    h1.textContent = CONFERENCE_TITLE_2;

    const dateTxt = document.createElement("h2");
    dateTxt.textContent = DATE;

    element.appendChild(h2);
    element.appendChild(h1);
    element.appendChild(dateTxt);
}

function makeCarousel() {
    const elementPrev = document.getElementsByClassName("carousel-control-prev")[0];
    const elementNext = document.getElementsByClassName("carousel-control-next")[0];
    const carIt = document.getElementsByClassName("carousel-item");
    const imgs = Array.from( carIt);
    console.log(elementPrev)
    console.log(elementNext)


   elementPrev.addEventListener("click", () => {
    const active = document.getElementsByClassName("carousel-item active")[0];
    const activeIndex = imgs.indexOf(active);
    active.classList.remove("active");
    activeIndex === 0 ? imgs[imgs.length - 1].classList.add("active") : imgs[activeIndex - 1].classList.add("active")
   });

   elementNext.addEventListener("click", () => {
    const active = document.getElementsByClassName("carousel-item active")[0];
    const activeIndex = imgs.indexOf(active);
    active.classList.remove("active");
    activeIndex + 1 < imgs.length ? imgs[activeIndex + 1].classList.add("active") : imgs[0].classList.add("active")
   });
}

createMainTitle();
makeCarousel();

console.log(document)

console.log("SCRIPT")