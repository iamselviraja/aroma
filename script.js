const btnToggle = document.querySelector(".toggle-btn");
const btnToggleBar1 = document.querySelector(".toggle-btn-bar-1");
const btnToggleBar2 = document.querySelector(".toggle-btn-bar-2");
const btnToggleBar3 = document.querySelector(".toggle-btn-bar-3");
const navMenuEl = document.querySelector(".header__nav--menu");

const exclusivesTabs = document.querySelectorAll(".exclusives__tabs-tab");
const exclusivesTabsContents = document.querySelectorAll(".exclusives__desc--tab");

const btnSlideNext = document.getElementById('btn-slide-next');
const btnSlidePrev = document.getElementById('btn-slide-prev');

/**
 * Function to toggle navigation menu
 */
const toggleNavMenu = () => {
    // Animate nav-toggle button
    btnToggleBar1.classList.toggle('active');
    btnToggleBar2.classList.toggle('active');
    btnToggleBar3.classList.toggle('active');

    // Animate nav-menu
    navMenuEl.classList.toggle("active");
}

btnToggle.addEventListener('click', () =>  toggleNavMenu());

/**
 * Function to switch tabs
 */
const switchTabs = (activeTabId,  activeTabContentId) => {
    // Remove active styles on all tab
    exclusivesTabs.forEach(tab => {
        tab.classList.remove("exclusives__tabs--active");
    });

    // Use activeTabId to apply active styles to the clicked tab
    document.getElementById(activeTabId).classList.add("exclusives__tabs--active");

    // Remove active styles on all tab contents
    exclusivesTabsContents.forEach(tab => {
        tab.classList.remove('exclusives__desc--active-tab');
    });

    // Use activeTabContentId to apply active styles to the clicked tab content
    document.getElementById(activeTabContentId).classList.add("exclusives__desc--active-tab");
};

exclusivesTabs.forEach(tab => tab.addEventListener("click", () => {
    // Extract the tab's data value
    const activeTabId = `exclusives__tabs--${tab.getAttribute('data-tab')}`;

    // Construct the active tab content's id
    const activeTabContentId = `exclusives__desc--tab-${tab.getAttribute('data-tab')}`;

    // Switch tabs to extracted tab id
    switchTabs(activeTabId, activeTabContentId);
}));

/**
 * Code to slide review items
 */
let currSlide = 0;
const reviewSlides = document.querySelectorAll(".reviews__item");

// Function to slide a review item
const slide = () => {
    reviewSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currSlide)*150}%)`;
    });
}

// Function to handle sliding to the next review item
const slideNext = () => {
    if(currSlide == reviewSlides.length -1) currSlide = 0;
    else currSlide++;

    slide();
}

// Function to handle sliding to the previous review item
const slidePrev = () => {
    if(currSlide == 0) currSlide = reviewSlides.length -1;
    else currSlide--;

    slide();
}

btnSlidePrev.addEventListener("click", slidePrev);
btnSlideNext.addEventListener("click", slideNext);