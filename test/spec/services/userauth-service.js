'use strict';

describe('Service: UserAuthService', function () {

  // load the service's module
  beforeEach(module('loginParseApp'));

  // instantiate service
  var UserAuthService;
  beforeEach(inject(function (_UserAuthService_) {
    UserAuthService = _UserAuthService_;
  }));

  it('should do something', function () {
    expect(!!UserAuthService).toBe(true);
  });

});
