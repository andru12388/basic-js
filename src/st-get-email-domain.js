import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email ) {
  let mail;
  email.split('').forEach((item, name) => {
    if (item === '@') {
      mail = name;
    }
  });
  let result = email.slice(mail+1);

  return result; 
}
