'use strict';

describe('Directive checks (Test with real Templates):', function(){
    var elm, scope;
    beforeEach(module('app', 'httpReal'));

    describe('Location Card Directive: ', function(){

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            elm = angular.element(
                '<pph-location-card card="data.WORLD"></pph-location-card>'
            );

            scope = $rootScope;
            $compile(elm)(scope);
            scope.$digest();
        }));


        it('should have a title.', function(){
             expect($('h3').html().trim()).toEqual('Name of World');
        });

        it('should have a history note with data from database.', function(){
            expect($('li').html().trim()).toEqual('History note 1');
        });

        it('should have a button to link to a containing Location.', function(){
            expect($('button.linkLike').html().trim()).toEqual('Region 1');
        });
    });
});