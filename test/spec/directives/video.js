'use strict';

describe('Directive: video', function () {

  // load the directive's module
  beforeEach(module('ngApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video></video>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the video directive');
  }));
});
