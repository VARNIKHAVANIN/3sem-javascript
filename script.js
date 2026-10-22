
/* Typing Animation */
const typing = document.getElementById("typing");

const words = [
    "Web Development",
    "Programming",
    "Artificial Intelligence",
    "Creative Design"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typing) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let delay = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

/* Mobile Navigation Menu */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

/* Scroll Animation */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function (section) {
    observer.observe(section);
});

/* Active Navigation Link */
const allSections = document.querySelectorAll("section[id]");
const allLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    allSections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    allLinks.forEach(function (link) {
        link.classList.toggle(
            "active-link",
            link.getAttribute("href") === "#" + currentSection
        );
    });
});

:\n" + message
        );

        window.location.href =
            "mailto:varnikhavani@gmail.com?subject=" +
            subject + "&body=" + body;
    });
/* Initialize EmailJS */
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

/* Contact Form */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: "varnikhavani@gmail.com"
                }
            );

            alert("Message sent successfully!");
            contactForm.reset();
        } catch (error) {
            console.error("Email error:", error);
            alert("Message could not be sent. Please try again.");
        }
    });
}

}

/* Automatic Copyright Year */
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
