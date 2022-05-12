const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')!;

function searchAddressHandler(event: Event) {
  event.preventDefault();

}
form!.addEventListener("submit", searchAddressHandler);
