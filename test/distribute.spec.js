import distribute from '../lib/distribute';

describe('A Distribute test suite', () => {
	it('should sum distribution', () => {
		const result = distribute.sumDistribution([
			'0.155', '0.155', '0.155', '0.155', '0.155', '0.155', '0.07',
		], 3);

		expect(result).toEqual([
			'0.155',
			'0.310',
			'0.465',
			'0.620',
			'0.775',
			'0.930',
			'1.000',
		]);
	});
	it('should distribute equally', () => {
		expect(distribute.equal(5)).toEqual([
			'0.200',
			'0.400',
			'0.600',
			'0.800',
			'1.000',
		]);
	});

	it('should distribute decreasing', () => {
		expect(distribute.decreasing(5)).toEqual([
			'0.400',
			'0.640',
			'0.800',
			'0.914',
			'1.000',
		]);
	});

	it('should distribute increasing', () => {
		expect(distribute.increasing(5)).toEqual([
			'0.086',
			'0.200',
			'0.360',
			'0.600',
			'1.000',
		]);
	});

	it('should distribute decreasing - LARGE', () => {
		expect(distribute.decreasing(50, 5)).toMatchInlineSnapshot(`
		Array [
		  "0.26500",
		  "0.42400",
		  "0.53000",
		  "0.60571",
		  "0.66250",
		  "0.70667",
		  "0.74200",
		  "0.77091",
		  "0.79500",
		  "0.81538",
		  "0.83286",
		  "0.84800",
		  "0.86125",
		  "0.87294",
		  "0.88333",
		  "0.89263",
		  "0.90100",
		  "0.90857",
		  "0.91545",
		  "0.92174",
		  "0.92750",
		  "0.93280",
		  "0.93769",
		  "0.94222",
		  "0.94643",
		  "0.95034",
		  "0.95400",
		  "0.95742",
		  "0.96063",
		  "0.96364",
		  "0.96647",
		  "0.96914",
		  "0.97167",
		  "0.97405",
		  "0.97632",
		  "0.97846",
		  "0.98050",
		  "0.98244",
		  "0.98429",
		  "0.98605",
		  "0.98773",
		  "0.98933",
		  "0.99087",
		  "0.99234",
		  "0.99375",
		  "0.99510",
		  "0.99640",
		  "0.99765",
		  "0.99885",
		  "1.00000",
		]
	`);
	});
});
