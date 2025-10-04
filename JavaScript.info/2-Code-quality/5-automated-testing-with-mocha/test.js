//Development of "pow": the spec

// Defines an anonymous function (usually used as a test suite or block)
describe("pow", function(){ 
  // Initial implementation

  // it("2 raised to power 3 is 8", function(){
  //   assert.equal(pow(2, 3), 8);
  //   // assert.equal(pow(3, 4), 81);
  // });
  
  //Improving the spec

  // it("3 raised to power is 8", function(){
  //   assert.equal(pow(3, 4), 81);
  // });

  //Improving the implementation

  // function makeTest(x) {
  //   let expected = x * x * x;
  //   it (`${x} in the power 3 is ${expected}`, function() {
  //     assert.equal(pow(x, 3), expected);
  //   });
  // }

  // for (let x = 1; x <= 5; x++) {
  //   makeTest(x);
  // }

  // Nested describe

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    } 

  });

  // ... more tests to follow here, both describe and it can be added

  // Extending the spec

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});


// 'before/after' and 'beforeEach/afterEach':
  // for instance:
  /*
  describe("test", function() {

    before(() => alert("Testing started - before all tests"));
    after(() => alert("Testing finished - after all tests"));

    beforeEach(() => alert("Before a test - enter a test"));
    afterEach(() => alert("After a test - exit a test"));

    it('test 1', () => alert(1));
    it('test 2', () => alert(2));

  });
  */