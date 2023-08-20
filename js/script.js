function handleScroll() {
    let prevScrollPos = window.pageYOffset;
    const header = document.getElementById("header-wrap");
    const heroWrap = document.getElementById("hero-wrap");

    window.addEventListener("scroll", () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > heroWrap.offsetTop) {
            header.classList.add("solid-background");
        } else {
            header.classList.remove("solid-background");
        }

        if (prevScrollPos > currentScrollPos) {
            header.style.transform = "translateY(0)";
        } else {
            header.style.transform = "translateY(-100%)";
        }

        prevScrollPos = currentScrollPos;
    });
}

handleScroll();

function toggleMenu() {
    var menuContainer = document.getElementById("header-wrap");
    menuContainer.classList.toggle("active");

    var body = document.body;
    body.classList.toggle("disable-scroll");
}