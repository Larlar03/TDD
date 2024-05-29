import { wildFlower, Add } from '../src';

describe('WildFlower (FizzBuzz)', () => {
	it('WildFlower 5', () => {
		expect(wildFlower(5)).toEqual('1,2,Wild,4,Flower');
	});

	it('WildFlower 10', () => {
		expect(wildFlower(10)).toBe('1,2,Wild,4,Flower,Wild,7,8,Wild,Flower');
	});

	it('WildFlower 20', () => {
		expect(wildFlower(20)).toBe(
			'1,2,Wild,4,Flower,Wild,7,8,Wild,Flower,11,Wild,13,14,Wildflower,16,17,Wild,19,Flower'
		);
	});
});

describe('String Calculator', () => {
	it('returns 0', () => {
		expect(Add('')).toEqual(0);
	});

	it('returns single value as number', () => {
		expect(Add('1')).toEqual(1);
	});

	it('returns the total of 2 values as an number', () => {
		expect(Add('1,2')).toEqual(3);
	});

	it('returns the total of multiple values as an number', () => {
		expect(Add('1,2,6')).toEqual(9);
	});

	it('returns the total of multiple values across a line break', () => {
		// Takes a string with line break and calculates
		expect(Add('1,2\n3')).toEqual(6);
		expect(Add('1,1\n1,1')).toEqual(4);
		expect(Add('2\n4,4')).toEqual(10);
	});

	it('returns the total of multiple values across multiple line breaks', () => {
		// Takes a string with line break and calculates
		expect(Add('2,2\n2\n2')).toEqual(8);
	});

	it('handles different delimiter', () => {
		expect(Add('//:\n1:3')).toEqual(4);
		expect(Add('//|\n1|2|3')).toEqual(6);
		expect(Add('//sep\n2sep5')).toEqual(7);
	});
});
