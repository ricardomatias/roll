import seedRandom from 'seed-random';
import { roll, distribute } from '../';

const AM7 = [ 'A', 'C', 'E', 'G' ];
let rng;

describe('A Roll test suite', () => {
	beforeEach(() => {
		rng = seedRandom('roll');
	});

	it('should roll equally', () => {
		const probabilities = distribute.equal(AM7.length);

		expect(roll(AM7, probabilities, rng)).toBe('G');
		expect(roll(AM7, probabilities, rng)).toBe('E');
		expect(roll(AM7, probabilities, rng)).toBe('E');
	});

	it('should distribute decreasing', () => {
		const probabilities = distribute.decreasing(AM7);

		expect(roll(AM7, probabilities, rng)).toBe('E');
		expect(roll(AM7, probabilities, rng)).toBe('E');
		expect(roll(AM7, probabilities, rng)).toBe('C');
	});
});
