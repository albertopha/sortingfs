describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2])).toEqual( [[1],[2]] );
  });
  it('is able to split an array into two halves', function() {
    expect( split([1,5,4,2]) ).toEqual( [[1,5],[4,2]] );
  });
  it('is able to split an array into two halves', function() {
    expect( split([1,5,4,2,3]) ).toEqual( [[1,5,4],[2,3]] );
  });
});

describe('merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[1,4,5],[2,3]]) ).toEqual( [1,2,3,4,5] );
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[4,4],[4,5]]) ).toEqual( [4,4,4,5] );
  });
});


describe('mergesort', function(){
  it('is able to sort one array into one sorted array', function(){
    expect( mergesort([1,4,5,2,3]) ).toEqual( [1,2,3,4,5] );
  });
  it('is able to sort one array into one sorted array', function(){
    expect( mergesort([4,4,4,5]) ).toEqual( [4,4,4,5] );
  });
  it('is able to sort one array into one sorted array', function(){
    expect( mergesort([5,-1200,342,5]) ).toEqual( [-1200,5,5,342] );
  });

});
