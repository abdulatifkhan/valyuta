var elExchangeButton = document.querySelector('.exchange-button');
var elExchangeResult = document.querySelector('.exchange-result');
  

elExchangeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  var elExchangeInput = document.querySelector('.exchange-input').value;
  var elExchangeSelect = document.querySelector('.exchange-select').value;
  elExchangeSelect = parseFloat(elExchangeSelect, 10);

  var javob = elExchangeInput * elExchangeSelect;
  elExchangeResult.value = `${javob.toFixed(2)} so'm`;
});