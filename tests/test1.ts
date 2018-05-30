import Sams from '../src/Sams';
import {expect} from 'chai'
import { SamsSettings } from '../src/SamsSettings';

describe('Hello function', () => {
    it('should return hello world', () => {
      const mySams = new Sams(new SamsSettings("", "", 1));
    //  expect(result).to.equal('Hello World!');
    });
  });