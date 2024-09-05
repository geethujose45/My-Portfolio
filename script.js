// Function to open CV in a new tab
document.getElementById('download-cv').addEventListener('click', function() {
    window.open('./images/Cristina-Sipos-resume.pdf', '_blank');
});


// Contact Us Form

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const successModal = document.getElementById("successModal");
    const failureModal = document.getElementById("failureModal");
    const closeButtons = document.getElementsByClassName("close");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => { object[key] = value });
        const json = JSON.stringify(object);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json
            });

            if (response.ok) {
                showModal(successModal);
                form.reset();
            } else {
                showModal(failureModal);
            }
        } catch (error) {
            console.error("Error:", error);
            showModal(failureModal);
        }
    });

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            closeModal(this.closest('.modal'));
        }
    }

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }

    function showModal(modal) {
        modal.style.display = "block";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }
});




// Function to handle scroll effects
window.addEventListener('scroll', function() {
    const welcomeContainer = document.querySelector('.welcome-container');
    const contentText = document.querySelector('.content-text');
    const additionalContent = document.querySelector('.additional-content');
    if (window.scrollY > 50) {
        welcomeContainer.classList.add('shrunk');
        contentText.classList.add('shrunk');
        additionalContent.classList.add('shrunk');
    } else {
        welcomeContainer.classList.remove('shrunk');
        contentText.classList.remove('shrunk');
        additionalContent.classList.remove('shrunk');
    }
});

// Function to set the active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function to set the active link on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);
