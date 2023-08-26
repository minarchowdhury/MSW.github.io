//start header section
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
// end header section

// start blog page 
function changePage(pageNumber) {

    console.log("Page number clicked:", pageNumber);

    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach(page => page.classList.remove('active-page'));

    const clickedPage = document.querySelector('.page-number:nth-child(' + pageNumber + ')');
    clickedPage.classList.add('active-page');

    const itemsPerPage = 9;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const blogItems = document.querySelectorAll('.blog-item');

    blogItems.forEach(item => item.style.display = 'none');

    for (let i = startIndex; i < endIndex && i < blogItems.length; i++) {
        blogItems[i].style.display = 'inline-block';
    }
}

// end blog page