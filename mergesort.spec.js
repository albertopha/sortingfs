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

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergesort([[1,4,5],[2,3]]) ).toEqual( [1,2,3,4,5] );
  });
  it('is able to merge two unsorted arrays into one sorted array', function(){
    expect( mergesort([[5,4,1],[1,2]]) ).toEqual( [1,2,3,4,5] );
  });
});
