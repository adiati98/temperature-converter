// grab elements & store in variable
const form = document.querySelector('form');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	//     get input value
	let degree = parseFloat(e.target.degree.value);

	//     get select & option value
	const selectedTemp = e.target.temperature.value;

	// reset function
	const reset = () => {
		btn.innerHTML = 'Reset'
	}

	const convertTemp = () => {
		// convert to Celsius
		const toCelsius = (fahrenheit) => {
			const c = ((fahrenheit - 32) * 5) / 9;
			return c;
		};

		//     convert to fahrenheit
		const toFahrenheit = (celsius) => {
			const f = (celsius * 9) / 5 + 32;
			return f;
		};

		if (e.target.degree.value === '' && btn.innerHTML === 'Convert') {
			result.innerHTML = '<span class="red thin"><em>*Please enter required field</em></span>';
		} else if(e.target.degree.value === '' && btn.innerHTML === 'Reset') {
			result.innerHTML = ''
			btn.innerHTML = 'Convert'
		} else if (selectedTemp === 'celsius') {
      form.reset();
      result.innerHTML = 'Loading...'
      setTimeout(() => {
				reset()
        return (result.innerHTML = `${degree}<span>&#8451;</span> <span class="red">is</span> ${toFahrenheit(degree)}<span>&#8457;</span>`);
      }, 1500);
		} else {
      form.reset();
      result.innerHTML = `<span class="red">Loading...</span>`
      setTimeout(() => {
			reset()
			return (result.innerHTML = `${degree}<span>&#8457;</span> <span class="red">is</span> ${toCelsius(degree).toFixed(2)}<span>&#8451;</span>`);        
      }, 1500);
		}
	};

  // console.log(convertTemp());
  convertTemp();
});
