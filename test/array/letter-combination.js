/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]. 
 */

 import telComb from '../../code/array/lesson1'

 test('telComb:23', () => {
   expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
 })