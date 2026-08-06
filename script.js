const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const homePage = document.getElementById("homePage");
const container = document.querySelector(".container");

const correctPassword = "081929";

unlockButton.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        unlock();
    }
});

function unlock() {

    if (passwordInput.value === correctPassword) {

        // Hide password page
        container.style.display = "none";

        // Show welcome screen
        welcomeScreen.classList.add("show");

        // After 3 seconds
        setTimeout(() => {

            // Hide welcome screen
            welcomeScreen.classList.remove("show");

            // Show home page
            homePage.classList.add("show");

        }, 3000);

    } else {

        passwordInput.animate([
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 350
        });

        passwordInput.value = "";
        passwordInput.placeholder = "Hmm... that's not our little secret.";

    }

}
