function viewDetails(eventName, eventDate, venue, services) {
    alert(`Event: ${eventName}\nDate: ${eventDate}\nVenue: ${venue}\nServices: ${services}`);
}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const organiser = document.getElementById("organiser").value;
    const eventName = document.getElementById("event").value;
    const quantity = document.getElementById("quantity").value;
    const date = document.getElementById("date").value;

    alert(`Booking Confirmed!\n\nOrganiser: ${organiser}\nEvent: ${eventName}\nCustomers: ${quantity}\nDate: ${date}`);
});

