/* NAV LINKS */
const techStack = document.querySelector(".nav_tech_stack");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#languages").scrollIntoView({behavior: "smooth"});
});

const about = document.querySelector(".nav_about");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
});


const contact = document.querySelector(".nav_contact");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
});

const projects = document.querySelector(".nav_projects");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#projects").scrollIntoView({behavior: "smooth"});
});
