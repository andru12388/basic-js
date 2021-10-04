import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
		return false;
		} 
	let arrString = [];
	let func = members.map(function(num) {
		if (typeof num !== 'string') {
		return '';
		} else {
			arrString.push(num)
		}
	});
	let letters = [];
	for (let i = 0; i < arrString.length; i++) {
		let itemArr = arrString[i].trim();
		letters.push(itemArr[0].toUpperCase());
	}
	let result = letters.sort().join('');
	return result;
};
