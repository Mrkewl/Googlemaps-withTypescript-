import axios from 'axios';

const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyA73Ujd0xWlifJ48nuiRlQlhIoSTTr58c8'

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=${GOOGLE_API_KEY}`)
// send this to google's Api
}
form!.addEventListener("submit", searchAddressHandler);
