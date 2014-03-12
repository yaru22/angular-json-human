/* globals angular, beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('hovercard', function() {
  var elm, scope;

  // load the code
  beforeEach(module('yaru22.jsonHuman'));

  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element();

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should pass', inject(function() {
    expect(1).to.equal(1);
  }));
});
