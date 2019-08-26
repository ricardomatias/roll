const toF = (int) => (parseFloat(int, 10));

/**
 * Sum probabilities together
 *
 * @function sumDistribution
 *
 * @param {Array<Number>} probabilities
 * @param {Number} precision
 * @return {Array<String>}
 */
const sumDistribution = (probabilities, precision) => {
	const accumulate = probabilities.reduce((prev, curr, idx) => {
		if (!prev[idx - 1]) {
			prev.push(toF(curr));

			return prev;
		}

		prev.push(prev[idx - 1] + toF(curr));

		return prev;
	}, []);

	return accumulate.map((float) => (float.toFixed(precision)));
};

const createDecreasingOdds = (k) => {
	k = Array.isArray(k) ? k.length : k;

	const probabilities = [];

	let den = 4;
	let t = 1 + (1 / (k / 3));

	for (let index = 0; index < k; index++) {
		const prob = t / den;

		probabilities.push(prob);

		t -= prob;
		den += 1;
	}

	return probabilities;
};

/**
 * Creates a decreasing probability distribution
 *
 * @function decreasing
 *
 * @param {Number|Array<Number>} k
 * @param {Number} precision
 * @return {Array<String>}
 */
const decreasing = (k, precision = 3) => {
	const probabilities = createDecreasingOdds(k);

	return sumDistribution(probabilities, precision);
};

/**
 * Creates an increasing probability distribution
 *
 * @function increasing
 *
 * @param {Number|Array<Number>} k
 * @param {Number} precision
 * @return {Array<String>}
 */
const increasing = (k, precision = 3) => {
	const probabilities = createDecreasingOdds(k);

	probabilities.reverse();

	return sumDistribution(probabilities, precision);
};

/**
 * Creates an equal probability distribution
 *
 * @function equal
 *
 * @param {Number|Array<Number>} k
 * @param {Number} precision
 * @return {Array<String>}
 */
const equal = (k, precision = 3) => {
	k = Array.isArray(k) ? k.length : k;

	const prob = (1 / k);
	const probabilities = [];

	for (let idx = 0, len = k; idx < len; idx++) {
		probabilities.push(prob);
	}

	return sumDistribution(probabilities, precision);
};

export default {
	decreasing,
	increasing,
	equal,
};
