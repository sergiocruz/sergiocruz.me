'use strict';

describe('Service: BrowserChecker', function () {

  // load the service's module
  beforeEach(module('ngApp'));

  // instantiate service
  var BrowserChecker;
  beforeEach(inject(function (_BrowserChecker_) {
    BrowserChecker = _BrowserChecker_;
  }));

  it('should do something', function () {
    expect(!!BrowserChecker).toBe(true);
  });

});
