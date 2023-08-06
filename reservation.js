// Reservation
const reservationForm = document.getElementById("reservationForm");
const reservationMessage = document.getElementById("reservationMessage");

reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const reservationDetails = {
        date: formData.get("date"),
        time: formData.get("time"),
        partySize: formData.get("partySize"),
        contactName: formData.get("contactName"),
        contactEmail: formData.get("contactEmail"),
        contactPhone: formData.get("contactPhone"),
    };

    reservationMessage.textContent = "Thank you for your reservation!";
    reservationMessage.classList.remove("hidden");
    reservationForm.reset();
});