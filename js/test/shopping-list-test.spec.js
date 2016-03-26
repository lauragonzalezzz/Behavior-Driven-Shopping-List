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
        var SL1 = new ShoppingList();
        var grapes = new ShoppingListItem('grapes', 'are cute!')
        SL1.addItem(grapes);
        expect(SL1.items).to.include(grapes);
      });

      it('addItem should only add shopping list items', function(){
        var SL2 = new ShoppingList();
        expect(SL2.addItem.bind(SL2, 'not an item')).to.throw(Error);
      });

    }); //Ends Add Item Method

    describe('Remove Item', function(){

      it('removeItem should exist', function(){
        expect(SL.removeItem).to.exist;
      });

      it('should remove an item from the items array', function(){
        var SL3 = new ShoppingList();
        var carrots = new ShoppingListItem('carrots', 'are delicious!')
        SL3.addItem(carrots);
        expect(SL3.items).to.include(carrots);
        SL3.removeItem(carrots);
        expect(SL3.items).to.not.include(carrots);
      });

      it('should remove the last item from the items array', function(){
        var SL4 = new ShoppingList();
        var banana = new ShoppingListItem('banana', 'is yellow.');
        var cereal = new ShoppingListItem('cereal', 'is not always for breakfast.');
        SL4.addItem(banana);
        SL4.addItem(cereal);
        SL4.removeItem();
        expect(SL4.items).to.not.include(cereal);
      });

    }); //Ends Remove Item Method

    describe('Render Method', function(){

      it('should exist', function(){
        expect(SL.render).to.exist;
      });



    }); //Ends Render Method

  }); //Ends Methods
});