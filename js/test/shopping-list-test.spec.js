
describe('ShoppingListItem', function() {
  var SL = null;
  beforeEach(function() {
    SL = new ShoppingListItem();
  });

	it ('should be a function', function() {
		expect(ShoppingListItem).to.be.a('function');
	});


// NAME
	it('should have a name property', function() {
		expect(SL).to.have.property('name');
	});

// DESCRIPTION
	it('should have a description property', function() {
		expect(SL).to.have.property('description');
	});



});