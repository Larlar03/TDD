const wildFlower = (n: number) => {
	const result = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			result.push('Wildflower');
		} else if (i % 5 == 0) {
			result.push('Flower');
		} else if (i % 3 == 0) {
			result.push('Wild');
		} else {
			result.push(i);
		}
	}
	return result.toString();
};

const findInvalidCharacterInString = (text: string, delimiter: string) => {
	const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const invalidCharPattern = new RegExp(`[^\\d${escapedDelimiter}]`);
	return text.match(invalidCharPattern);
};

// https://tddmanifesto.com/exercises/
const Add = (input: string): number => {
	let result: number = 0;

	if (!input) {
		return result;
	} else if (input.length === 1) {
		result = Number(input);
	} else {
		const lines = input.split('\n');
		// Extract delimiter from between  \\ and \n
		const delimiter = input.startsWith('//')
			? input.split('\n')[0].slice(2)
			: null;

		const isInvalid =
			delimiter && findInvalidCharacterInString(lines[1], delimiter);

		if (isInvalid) {
			throw new Error(
				`"${delimiter}" expected but "${isInvalid[0]}" found at position ${isInvalid.index}.`
			);
		}

		const sumPerLine = lines.map((line: string) => {
			const splitValues = line.split(delimiter ? delimiter : ',');
			const valToNum = splitValues.map(Number).filter((n) => {
				return !Number.isNaN(n);
			});

			const addValues = valToNum.reduce(
				(prevValue: number, currentValue: number) => prevValue + currentValue,
				0
			);
			return addValues;
		});

		const totalSum = sumPerLine.reduce(
			(prevValue: number, currentValue: number) => prevValue + currentValue,
			0
		);

		result = totalSum;
	}
	// console.log('result', result);
	return result;
};
// Add('//|\n1|2,3');
export { wildFlower, Add };
