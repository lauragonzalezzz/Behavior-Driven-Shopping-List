
describe('ShoppingListItem', function() {
  var SL = null;
  beforeEach(function() {
    SL = new ShoppingListItem();
  });

	it ('should be a function', function() {
		expect(ShoppingListItem).to.be.a('function');
	});

  // PROPERTIES
    // NAME
    	it('should have a name property', function() {
    		expect(SL).to.have.property('name');
    	});

    // DESCRIPTION
    	it('should have a description property', function() {
    		expect(SL).to.have.property('description');
    	});

    // IS DONE
      it('should have an isDone property', function() {
        expect(SL).to.have.property('isDone');
      });

  // METHODS

  describe('ShoppingListItem Methods', function(){

    it('should accept a name argument', function() {
      var SL2 = new ShoppingListItem('Totally', 'Duh');
      expect(SL2.name).to.equal('Totally');
    });

    it('should accept a description argument', function() {
      var SL2 = new ShoppingListItem('Totally', 'Duh');
      expect(SL2.description).to.equal('Duh');
    });

    it('should have a check method', function(){
      expect(SL.check).to.exist;
    });


  }); //Ends ShoppingListItem Methods




}); //Ends ShoppingListItem Suite