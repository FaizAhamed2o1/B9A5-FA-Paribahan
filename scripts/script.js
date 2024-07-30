const newOffer = "NEW15";
const newOfferOff = 0.15;
const coupleOffer = "Couple 20";
const coupleOfferOff = 0.2;

const numberOfSeatsLeft = parseInt(
  document.getElementById("number-of-seats-left").innerText
);

const seats = document.getElementsByClassName("seat-number");
const selectedSeats = [];
let selectedSeatsCounter = 1;

const ticketPrice = 500;
let totalPrice = 0;
let grandTotalPrice = 0;
let discountAmount = 0;

const couponInput = document.getElementById("coupon-input-field");

const userInputFields = document.getElementsByClassName("user-input");

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
      if (selectedSeats.length === 4) {
        document
          .getElementById("coupon-input-field")
          .removeAttribute("disabled");
        document.getElementById("coupon-apply-btn").removeAttribute("disabled");
      }

      // counting and updating the value of total price
      totalPrice += ticketPrice;
      document.getElementById("show-total-price").innerHTML = totalPrice;

      //  Setting default grand total price
      grandTotalPrice = totalPrice;
      document.getElementById("show-grand-total-price").innerText =
        grandTotalPrice;

      //  enabling the input fields when a seat is selected
      if (selectedSeats.length !== 0) {
        for (const userInputField of userInputFields) {
          userInputField.removeAttribute("disabled");
        }
      }
    }
  });
}

// ! coupon apply button event listener
document
  .getElementById("coupon-apply-btn")
  .addEventListener("click", function () {
    if (couponInput.value !== "") {
      if (couponInput.value === coupleOffer) {
        // calculate and set the grandtotal price after applying coupon
        grandTotalPrice = totalPrice - totalPrice * coupleOfferOff;
        document.getElementById("show-grand-total-price").innerText =
          grandTotalPrice;

        // calculate and set the discount amount
        discountAmount = totalPrice * coupleOfferOff;
        document.getElementById("show-discount-amount").innerText =
          discountAmount;

        // hide the coupon input field
        document.getElementById("coupon-div").classList.add("hidden");

        // show the discount amount div
        document
          .getElementById("discount-amount-container")
          .classList.remove("hidden");

        // hide the warning
        document
          .getElementById("invalid-coupon-warning")
          .classList.add("hidden");
      } else if (couponInput.value === newOffer) {
        // calculate and set the grandtotal price after applying coupon
        grandTotalPrice = totalPrice - totalPrice * newOfferOff;
        document.getElementById("show-grand-total-price").innerText =
          grandTotalPrice;

        // calculate and set the discount amount
        discountAmount = totalPrice * newOfferOff;
        document.getElementById("show-discount-amount").innerText =
          discountAmount;

        // hide the coupon input field
        document.getElementById("coupon-div").classList.add("hidden");

        // show the discount amount div
        document
          .getElementById("discount-amount-container")
          .classList.remove("hidden");

        // hide the warning
        document
          .getElementById("invalid-coupon-warning")
          .classList.add("hidden");
      } else {
        document
          .getElementById("invalid-coupon-warning")
          .classList.remove("hidden");
      }
    } else {
      document
        .getElementById("invalid-coupon-warning")
        .classList.remove("hidden");
    }
  });

// ! Checking if the phone number input field is empty
const phoneNumberInputField = document.getElementById("phone-number-input");
const nextButton = document.getElementById("next-btn");

phoneNumberInputField.addEventListener("input", function () {
  if (phoneNumberInputField.value !== "") {
    nextButton.disabled = false;

    // ? adding event listener to the next button
    nextButton.addEventListener("click", function () {
      window.location.href = "../pages/success.html";
    });
  } else {
    nextButton.disabled = true;
  }
});

// // ? adding event listener to the next button
// nextButton.addEventListener("click", function () {
//   window.location.href = "../pages/success.html";
// });
