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

});