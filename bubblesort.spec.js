describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array of size 1', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles an array already sorted', function(){
        expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
    });

    it('handles an array unsorted', function(){
        expect( bubbleSort([5,2,1,3,4]) ).toEqual( [1,2,3,4,5] );
    });

    it('handles an array reversed', function(){
        expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
    });

    it('handles an array duplicates', function(){
        expect( bubbleSort([5,4,3,2,4,5,1]) ).toEqual( [1,2,3,4,4,5,5] );
    });
  });