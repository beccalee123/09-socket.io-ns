'use strict';

const server = require('../server.js');

describe('tests', () => {
  it('lowerCasing function changes strings to lowercase', () => {
    let string = 'HEY HEY';
    let result = server.lowerCasing(string);
    expect(result).toEqual('hey hey');
  });

  
});