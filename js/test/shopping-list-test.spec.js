describe('Shopping List', function(){

  var SL = null;

  beforeEach(function() {
    SL = new ShoppingList();
  });


  it('should be a function', function(){
    expect(ShoppingList).to.be.a('function');
  });

  it('should have an items property', function(){
    expect(SL).to.have.property('items');
  });

  it('items should be an array', function(){
    expect(SL.items).to.be.an('array');
  });

  describe('Methods', function(){

    describe('Add Item', function(){

      it('should exist', function(){
        expect(SL.addItem).to.exist;
      });

      it('addItem should be a function', function(){
        expect(SL.addItem).to.be.a('function');
      });

      it('addItem add shopping list items to items array', function(){
        var SL2 = new ShoppingList();
        var grapes = new ShoppingListItem('grapes', 'are cute!')
        SL2.addItem(grapes);
        expect(SL2.items).to.include(grapes);
      });

      it('addItem should only add shopping list items', function(){
        var SL1 = new ShoppingList();
        expect(SL1.addItem.bind(SL1, 'not an item')).to.throw(Error);
      });

    }); //Ends Add Item Method

    describe('Remove Item', function(){

      it('removeItem should exist', function(){
        expect(SL.removeItem).to.exist;
      });



    }); //Ends Remove Item Method



  }); //Ends Methods
});