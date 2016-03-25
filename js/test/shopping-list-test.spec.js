
describe('ShoppingListItem', function() {


	it ('should be a function', function() {
		expect(ShoppingListItem).to.be.a('function');
	});


// NAME
	it('should have a name property', function() {
		var SL = new ShoppingListItem();
		expect(SL).to.have.property('name');
		var SL2 = new ShoppingListItem('happy');
		expect(SL2.name).to.equal('happy');
	});

});