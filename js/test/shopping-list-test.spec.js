
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
      it('should have an is_done property', function() {
        expect(SL).to.have.property('is_done');
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

    describe('Check Method', function() {

      it('should have a check method', function(){
        expect(SL.check).to.exist;
      });

      it('should be a function', function(){
        expect(SL.check).to.be.a('function');
      });

      it('should set is_done to true', function(){
        expect(SL.check()).to.be.true;
      });

    }); //Ends Check Method

    describe('Uncheck Method', function() {

      it('should have an uncheck method', function() {
        expect(SL.uncheck).to.exist;
      });

      it('should be a function', function() {
        expect(SL.uncheck).to.be.a('function');
      });

      it('should change is_done to false', function() {
        expect(SL.uncheck()).to.be.false;
      });



    }); //Ends Uncheck Method

  }); //Ends ShoppingListItem Methods




}); //Ends ShoppingListItem Suite