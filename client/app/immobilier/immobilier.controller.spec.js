'use strict';

describe('Controller: ImmobilierCtrl', function () {

  // load the controller's module
  beforeEach(module('wallprojectApp'));

  var ImmobilierCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImmobilierCtrl = $controller('ImmobilierCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
