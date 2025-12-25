function openModal() {
  document.getElementById("formModal").style.display = "block";
}
function closeModal() {
  document.getElementById("formModal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("formModal")) {
    closeModal();
  }
}

// Razorpay placeholder (update with your keys)
function payNow(amount, course) {
  var options = {
    "key": "YOUR_RAZORPAY_KEY",
    "amount": amount * 100, // in paise
    "currency": "INR",
    "name": "Learnmint",
    "description": course,
    "handler": function (response){
      alert("Payment successful: " + response.razorpay_payment_id);
    }
  };
  var rzp = new Razorpay(options);
  rzp.open();
}