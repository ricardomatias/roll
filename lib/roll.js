/**
 * Pick an element randomly based on a chosen probability distribution
 * @function roll
 *
 * @param {Array} elements
 * @param {Array<String>} probabilities
 * @param {Function} rng Random Number Generator
 * @return {Object|Null}
 */
const roll = (elements, probabilities, rng) => {
	const precision = probabilities[0].split('.')[1].length;
	const result = rng().toFixed(precision);
	let element;

	for (let index = 0; index < probabilities.length; index++) {
		const prob = probabilities[index];

		if (parseFloat(result, 10) <= parseFloat(prob, 10)) {
			element = elements[index];

			break;
		}
	}

	return element;
};

export default roll;
