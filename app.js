// API endpoint base URL: http://data.fixer.io/api/
// API key: 7045ef478ff5532cd135b162308eaee5
// Example call: http://data.fixer.io/api/latest?access_key=7045ef478ff5532cd135b162308eaee5&symbols=USD
// Example call: http://data.fixer.io/api/latest?access_key=7045ef478ff5532cd135b162308eaee5&base=USD

const API_KEY = '7045ef478ff5532cd135b162308eaee5';
const API_ENDPOINT = 'http://data.fixer.io/api/';

function convertCurrency(event) {
   if ('type' in event.target && event.target.type === 'button') {

      $('#output_amount').text('');
      $('#output_currency').text('');

      let currExchangeObj = $.get(`${API_ENDPOINT}latest?access_key=${API_KEY}`, function(response) {
         
         let amountInputted = $('input').val();
         let EURtoUSDConversionRate = response.rates.USD;
         let destinationCurrency = event.target.value;
         let destinationCurrencyRate = response.rates[destinationCurrency];
         let convertedAmt = amountInputted / EURtoUSDConversionRate * destinationCurrencyRate;

         $('#output_amount').append("Converted amount: ", convertedAmt.toFixed(2));
         $('#output_currency').append(` ${destinationCurrency}`);
      });
   }
}

document.body.addEventListener('click', convertCurrency);