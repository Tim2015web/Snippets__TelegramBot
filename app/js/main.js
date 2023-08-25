const sendBtn = document.querySelector('.main__button');
const textField = document.querySelector('.main__textarea');
//I hope you don't use it :)
const BOT_TOKEN = '6357864953:AAGLK1pcwGyZScYyL3guRKPimJmTNrcgMZs';
const userId = '757920027';

sendBtn.addEventListener('click', () => {
  const urlBot = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${userId}&text=${textField.value}`;
  fetch(urlBot).then(res => alert('Your message was successfully sent to the developer'));
  textField.value = '';
});