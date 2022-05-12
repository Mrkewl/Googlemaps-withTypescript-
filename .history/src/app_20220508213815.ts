const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')!;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value!;

}
form!.addEventListener("submit", searchAddressHandler);
