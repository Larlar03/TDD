"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('WildFlower (FizzBuzz) tests', () => {
    it('WildFlower 5', () => {
        expect((0, src_1.wildFlower)(5)).toEqual('1,2,Wild,4,Flower');
    });
    it('WildFlower 10', () => {
        expect((0, src_1.wildFlower)(10)).toBe('1,2,Wild,4,Flower,Wild,7,8,Wild,Flower');
    });
    it('WildFlower 20', () => {
        expect((0, src_1.wildFlower)(20)).toBe('1,2,Wild,4,Flower,Wild,7,8,Wild,Flower,11,Wild,13,14,Wildflower,16,17,Wild,19,Flower');
    });
});
describe('String Calculator', () => {
    it('returns 0', () => {
        expect((0, src_1.Add)('')).toEqual(0);
    });
    it('returns single value as number', () => {
        expect((0, src_1.Add)('1')).toEqual(1);
    });
    it('returns the total of 2 values as an number', () => {
        expect((0, src_1.Add)('1,2')).toEqual(3);
    });
    it('returns the total of multiple values as an number', () => {
        expect((0, src_1.Add)('1,2,6')).toEqual(9);
    });
    it('returns the total of multiple values across a line break', () => {
        // Takes a string with line break and calculates
        expect((0, src_1.Add)('1,2\n3')).toEqual(6);
        expect((0, src_1.Add)('1,1\n1,1')).toEqual(4);
        expect((0, src_1.Add)('2\n4,4')).toEqual(10);
    });
    it('returns the total of multiple values across multiple line breaks', () => {
        // Takes a string with line break and calculates
        expect((0, src_1.Add)('2,2\n2\n2')).toEqual(8);
    });
});
