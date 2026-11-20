
// ======================================
// 1. OPEN THE WEDDING INVITATION
// ======================================

const welcomeScreen = document.getElementById("welcomeScreen");

const invitationCard = document.getElementById("invitationCard");

const openButton = document.getElementById("openButton");


openButton.addEventListener("click", function () {

    // Hide the envelope
    welcomeScreen.style.display = "none";

    // Show the invitation
    invitationCard.hidden = false;

    // Start the invitation animation
    invitationCard.classList.add("show-invitation");

    // Move to the top of the invitation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// 2. WEDDING COUNTDOWN
// ======================================

// Wedding date: 2 January 2027
const weddingDate = new Date("2027-01-02T20:00:00+02:00").getTime();

function updateCountdown() {

    // Get current time
    const now = new Date().getTime();

    // Calculate remaining time
    const difference = weddingDate - now;

    // Check if the wedding date has arrived
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Display countdown
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

// Update every second
updateCountdown();

setInterval(updateCountdown, 1000);


// ======================================
// 3. WHATSAPP SHARING
// ======================================

const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", function () {

    const invitationLink = window.location.href;

    const message =
        "Assalamu Alaikum!\n\n" +
        "You are warmly invited to the wedding of Shazia & Hassan.\n\n" +
        "Date: Saturday, 2nd January 2027\n" +
        "Time: After Esha\n" +
        "Venue: Handi Spicy Restaurant, Makeni, Lusaka\n\n" +
        "Please open your digital invitation here:\n" +
        invitationLink;

    const whatsappLink =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");

});
