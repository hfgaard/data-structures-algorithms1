var expect = require('chai').expect;
var array = require('../array');
var unique = require('../unique');
var frequency2 = require('../frequency2');

describe('array.js', function() {
  describe('push1', function() {
    it('will add 3 to the end of the array when passed 3', function() {
      var arr = new array(1, 2);
      arr.push1(3);
      expect(arr).to.eql([1, 2, 3]);
    });

    it('will return a length of 3 when passed 3 to the array [1, 2]', function() {
      var arr = new array(1, 2);
      expect(arr.push1(3)).to.eql(3);
    });

    it('will add 3 and 4 to the end of the array when passed 3 and 4', function() {
      var arr = new array(1, 2);
      arr.push1(3, 4);
      expect(arr).to.eql([1, 2, 3, 4]);
    });
  });

  describe('pop1', function() {
    it('will remove 3 from the array when passed [1, 2, 3]', function() {
      var arr = new array(1, 2, 3);
      arr.pop1();
      expect(arr).to.eql([1, 2]);
    });

    it('will return 3 when passed [1, 2, 3]', function() {
      var arr = new array(1, 2, 3);
      expect(arr.pop1()).to.eql(3);
    });
  });

  describe('unshift1', function() {
    it('will add 1 to the beginning of the array when passed 1', function() {
      var arr = new array(2, 3);
      arr.unshift1(1);
      expect(arr).to.eql([1, 2, 3]);
    });

    it('will return a length of 3 when passed 1 to the array [2, 3]', function() {
      var arr = new array(2, 3);
      expect(arr.unshift1(1)).to.eql(3);
    });

    it('will add 1 and 2 to the beginning of the array when passed 1 and 2', function() {
      var arr = new array(3, 4, 5);
      arr.unshift1(1, 2);
      expect(arr).to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('shift1', function() {
    it('will remove 1 from the array when passed [1, 2, 3]', function() {
      var arr = new array(1, 2, 3);
      arr.shift1();
      expect(arr).to.eql([2, 3]);
    });

    it('will return 1 when passed [1, 2, 3]', function() {
      var arr = new array(1, 2, 3);
      expect(arr.shift1()).to.eql(1);
    });
  });
});

describe('unique.js', function() {
  it('will return null when passed an empty array', function() {
    expect(unique([])).to.eql(null);
  });

  it('will return [1, 2, 3] when passed [1, 2, 1, 3, 2]', function() {
    expect(unique([1, 2, 1, 3, 2])).to.eql([1, 2, 3]);
  });
});

describe('frequency2.js', function() {
  it('will return ["o"] when passed ["food", "", "", "", "", "", "book"]', function() {
    expect(frequency2(['food', '', '', '', '', '', 'book'])).to.eql(['o']);
  });
});
