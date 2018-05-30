import {Sams} from '../src/SAMS/Sams';
import {expect} from 'chai'
import { SamsSettings } from '../src/SAMS/SamsSettings';

describe('Hello function', () => {
    it('should return hello world', () => {
      const mySams = new Sams(new SamsSettings("token", "url", 1, 1, "user", "name"), null);
    //  expect(result).to.equal('Hello World!');
    });
  });