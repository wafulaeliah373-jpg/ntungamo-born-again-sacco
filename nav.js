document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the floating Menu button onto the page
    const floatBtn = document.createElement("button");
    floatBtn.type = "button";
    floatBtn.className = "floating-menu-btn";
    floatBtn.innerHTML = "&#9776; Menu";
    floatBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const nav = document.querySelector(".nav-container nav");
        if (nav) nav.classList.add("mobile-open");
    };
    document.body.appendChild(floatBtn);

    // 2. Ensure the mobile drawer has an X close button if missing
    const navUl = document.querySelector(".nav-container nav ul");
    if (navUl && !navUl.querySelector(".mobile-close-item")) {
        const closeLi = document.createElement("li");
        closeLi.className = "mobile-close-item";
        closeLi.innerHTML = `<button type="button" class="mobile-close-btn" aria-label="Close Menu">&times;</button>`;
        closeLi.querySelector("button").onclick = () => {
            document.querySelector(".nav-container nav").classList.remove("mobile-open");
        };
        navUl.prepend(closeLi);
    }

    // 3. Enable tapping dropdown menus inside the mobile drawer
    document.querySelectorAll(".nav-container nav > ul > li > a").forEach((link) => {
        if (link.nextElementSibling && link.nextElementSibling.classList.contains("dropdown")) {
            link.addEventListener("click", (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    link.parentElement.classList.toggle("sub-open");
                }
            });
        }
    });
});
