describe('Game module', function() {
  describe('GameManager', function() {
    

	var gameManager, _gridService; // instance of the GameManager

	beforeEach(module('Game'));

	beforeEach(function() {
        module('Game', function($provide) {
             _gridService = {
			    anyCellsAvailable: angular.noop,
			    tileMatchesAvailable: angular.noop
			  };
			  // Switch out the real GridService for our
	 		 // fake version
            $provide.value('GridService', _gridService);
        });

        inject(function(GameManager) {
           gameManager = GameManager;
        });
    });
	

	it('should have a GameManager', function() {
      expect(gameManager).toBeDefined();
    });

	describe('movesAvailable', function() {
    	it('should report true if there are cells available', function() {
    	  spyOn(_gridService, 'anyCellsAvailable').and.returnValue(true);
    	  expect(gameManager.movesAvailable()).toBeTruthy();
    	});
    	it('should report true if there are matches available', function() {
    	  spyOn(_gridService, 'anyCellsAvailable').and.returnValue(false);
    	  spyOn(_gridService, 'tileMatchesAvailable').and.returnValue(true);
    	  expect(gameManager.movesAvailable()).toBeTruthy();
    	});
    	it('should report false if there are no cells nor matches available', function() {
    	  spyOn(_gridService, 'anyCellsAvailable').and.returnValue(false);
    	  spyOn(_gridService, 'tileMatchesAvailable').and.returnValue(false);
    	  expect(gameManager.movesAvailable()).toBeFalsy();
    	});
    });
    // Our tests will go below here
  });

});