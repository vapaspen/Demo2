 'use strict';

describe('App routing checks', function(){
    beforeEach(module('app'));
    var route, $rootScope, $location;
    beforeEach(inject(function(_$route_, _$location_, _$rootScope_) {
            route = _$route_;
            $rootScope = _$rootScope_;
            $location =_$location_;
        }));

    describe('Home routing checks', function(){

        beforeEach(inject(function($httpBackend){
            $httpBackend.expectGET('templates/frames/homeTemplate.html').respond(200, 'main HTML');
        }));

        it('Should have a home template with a controller.', function(){
            expect($location.path()).toBe('');
            $rootScope.$digest();
            expect(route.routes['/'].templateUrl).toEqual('templates/frames/homeTemplate.html');
            expect(route.current.controller).toBe('homeCtrl');

        });

        it('should redirect to the index path on non-existent route', function(){
            expect($location.path()).toBe('');

            $location.path('/a/non-existent/route');

            $rootScope.$digest();
            expect($location.path()).toBe( '/' );
            expect(route.current.controller).toBe('homeCtrl');

        });
    });
});

describe('Check controllers:', function(){
    beforeEach(module('app'));
    var scope;
    beforeEach(inject(function($rootScope){
        scope = $rootScope.$new();
    }));

    describe('Home Controller', function(){
        beforeEach(inject(function($controller){
            $controller('homeCtrl', {'$scope' : scope});
        }));

        it('Should have a title of home.', function(){
            expect(scope.title).toEqual('Home');
        });

        it('should have a method named settingData defined.', function(){
             expect(scope.settingData).toBeTruthy();
        });
    });

    describe('Nav Controller', function(){
        beforeEach(inject(function($controller){
            $controller('navCtrl', {'$scope' : scope});
        }));
        it('should have an Aside on scope.', function(){
            expect(scope.aside).toBeTruthy();
        });
    });

});
