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

// https://tddmanifesto.com/exercises/
const Add = (n: string): number => {
	let result: number = 0;

	if (!n) {
		return result;
	} else if (n.length === 1) {
		result = Number(n);
	} else {
		const lines = n.split('\n');
		const delimiter = n.startsWith('//') ? n.split('\n')[0].slice(2) : null;

		if (delimiter) {
			const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const invalidCharPattern = new RegExp(`[^\\d${escapedDelimiter}]`);
			const isInvalid = lines[1].match(invalidCharPattern);

			if (isInvalid) {
				const invalidCharPosition = isInvalid.index;
				const invalidChar = isInvalid[0];
				throw new Error(
					`"${delimiter}" expected but "${invalidChar}" found at position ${invalidCharPosition}.`
				);
			}
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

export { wildFlower, Add };
