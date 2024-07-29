const newOffer = "NEW15";
const coupleOffer = "Couple 20";
const numberOfSeatsLeft = parseInt(
  document.getElementById("number-of-seats-left").innerText
);
const seats = document.getElementsByClassName("seat-number");
const selectedSeats = [];
let selectedSeatsList = [];
let selectedSeatsCounter = 1;
const ticketPrice = 500;
let totalPrice = 0;
let grandTotalPrice = 0;

// !  click event handler for buy tickets button
document
  .getElementById("buy-tickets-btn")
  .addEventListener("click", function () {
    document
      .getElementById("ticket-booking")
      .scrollIntoView({ behavior: "smooth" });
  });

//   ! function for highlighting the seats that are clicked
for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (selectedSeatsCounter <= 4) {
      // updating the value of the number of seats left
      document.getElementById("number-of-seats-left").innerText =
        numberOfSeatsLeft - selectedSeatsCounter;

      // Updating the number of selected seats
      document.getElementById("number-of-selected-seats").innerText =
        selectedSeatsCounter;

      // style change on selecting seats
      seat.classList.add("bg-[#1dd100]");
      seat.classList.add("text-white");

      const seatId = seat.getAttribute("id");

      //   preventing from selecting duplicate seats
      if (selectedSeats.includes(seatId) !== true) {
        selectedSeats.push(seatId);
        selectedSeatsCounter++;

        // showing the selected seats in the selected seat details div
        const div = document.getElementById("selected-seat-details");
        const seatNumber = document.createElement("p");
        seatNumber.textContent = seatId;
        div.appendChild(seatNumber);
        const seatClass = document.createElement("p");
        seatClass.textContent = "Economy";
        div.appendChild(seatClass);
        const seatPrice = document.createElement("p");
        seatPrice.textContent = "500";
        div.appendChild(seatPrice);
      }

      // enabling the have any coupon section when a seat is selected
      if (selectedSeats.length != 0) {
        document
          .getElementById("coupon-input-field")
          .removeAttribute("disabled");
        document.getElementById("coupon-apply-btn").removeAttribute("disabled");
      }

      // counting and updating the value of total price
      totalPrice += ticketPrice;
      document.getElementById("show-total-price").innerHTML = totalPrice;
    }
  });
}
