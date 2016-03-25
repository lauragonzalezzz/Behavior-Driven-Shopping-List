describe('ShoppingList', function(){

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

      it('should have an addItem method', function(){
        expect(SL.addItem).to.exist;
      });

      it('addItem should be a function', function(){
        expect(SL.addItem).to.be.a('function');
      });

      it('addItem add Shopping List items to items array', function(){
        var SL2 = new ShoppingList();
        var grapes = new ShoppingListItem('grapes', 'are cute!')
        SL2.addItem(grapes);
        expect(SL2.items).to.include(grapes);
      });



      // it('addItem should only add shopping list items', function(){
      //   var SLItem = new ShoppingListItem();
      //   SLItem.('grapes')

      //   var SL1 = new ShoppingList();
      //   SL1.addItem('grapes');
      //   expect(SL1.items).to.deep.equal(['grapes']);
      // });


    });




  });
});