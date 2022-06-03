/* NAV LINKS */
const techStack = document.querySelector(".nav_tech_stack");
const about = document.querySelector(".nav_about");
const contact = document.querySelector(".nav_contact");
const projects = document.querySelector(".nav_projects");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#languages").scrollIntoView({behavior: "smooth"});
});

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
});

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
});

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#projects").scrollIntoView({behavior: "smooth"});
});


