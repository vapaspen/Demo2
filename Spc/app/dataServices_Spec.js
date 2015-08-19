 'use strict';

describe('Data Services', function(){
    var settingData, httpBackend;
    beforeEach(module('campDataLoder'));

    beforeEach(inject(function (_settingData_) {
        settingData = _settingData_;
    }));

    beforeEach(inject(function($httpBackend){
        httpBackend = $httpBackend;
        $httpBackend.expectGET('app/stubData/data.json').respond(
            testData
        );
    }));


    it('should Load CAMPAIGN data with a title.', function(){

        settingData.get().then(function(LoadedData){

            expect(LoadedData.CAMPAIGNS[0].CAMPAIGN.TITLE).toEqual("Demo Campaign");
        });
        httpBackend.flush();

    });
});