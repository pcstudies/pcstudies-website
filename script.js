
// ==================================
// PCSTUDIES - MAIN JAVASCRIPT
// ==================================

// 1. Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

// 2. Course Search

const searchInput = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase().trim();

        courseCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            card.style.display =
                cardText.includes(searchText) ? "" : "none";
        });
    });
}

// 3. Course Information

const courses = {
    class6: {
        title: "Class 6",
        description: "Build your foundation with quality learning resources."
    },

    class10: {
        title: "Class 10",
        description: "Prepare for school examinations with confidence."
    },

    intermediate: {
        title: "Classes 11–12",
        description: "Strengthen your subject knowledge and skills."
    },

    tspsc: {
        title: "TSPSC / APPSC",
        description: "Prepare for state public service examinations."
    },

    upsc: {
        title: "UPSC Preparation",
        description: "Start your civil services preparation journey."
    },

    ssc: {
        title: "SSC / Railway / Banking",
        description: "Prepare for government and banking examinations."
    },

    neet: {
        title: "NEET / JEE",
        description: "Build your knowledge for entrance examinations."
    },

    defence: {
        title: "Police / Defence",
        description: "Prepare for police and defence recruitment."
    },

    college: {
        title: "College Studies",
        description: "Explore academic learning resources."
    }
};

// 4. Display Selected Course

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course");

const course = courses[courseId];

const courseTitle = document.getElementById("courseTitle");
const courseDescription =
    document.getElementById("courseDescription");

if (courseTitle && courseDescription) {

    if (course) {
        courseTitle.textContent = course.title;
        courseDescription.textContent = course.description;

        document.title = course.title + " | PCStudies";

    } else {
        courseTitle.textContent = "Course Not Found";
        courseDescription.textContent =
            "Please select a valid course from PCStudies.";
    }
}

// STUDY MATERIALS SEARCH AND FILTER

const materialSearch = document.getElementById("materialSearch");
const categoryFilter = document.getElementById("categoryFilter");
const materialCards = document.querySelectorAll(".material-card");
const noMaterials = document.getElementById("noMaterials");

function filterMaterials() {
    if (!materialSearch || !categoryFilter) return;

    const searchText = materialSearch.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    materialCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        const matchesSearch = cardText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (noMaterials) {
        noMaterials.hidden = visibleCount !== 0;
    }
}

if (materialSearch) {
    materialSearch.addEventListener("input", filterMaterials);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterMaterials);
}
