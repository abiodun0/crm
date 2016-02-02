'use strict';

describe('Directive: Draggable', function () {

  // load the directive's module
  beforeEach(module('crmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-draggable></-draggable>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the Draggable directive');
  }));
});
