declare namespace roll {
	namespace distribute {
		function sumDistribution(distribution: string[], precision: number): string[];
		function equal<T>(distribution: T | T[], precision?: number): string[];
		function decreasing<T>(distribution: T | T[], precision?: number): string[];
		function increasing<T>(distribution: T | T[], precision?: number): string[];
	}

	export function roll<T>(elements: T[], probabilities: string[], rng: CallableFunction): T;
}

export = roll
