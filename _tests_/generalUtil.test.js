let generalUtil = require('../src/Utilities/generalUtil');

/*
 * Email Validation Function Test
 */
test('If invalid email - should return false', ()=> {
    let testEmail = 'jdkjf';

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid emial - should return false', ()=> {
    let testEmail = 'xnkdjl@'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid emial - should return false', ()=> {
    let testEmail = 'xnkdjl@.......com'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid email - should return false', ()=> {
    let testEmail = 'xnkdjl@.com'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If valid email - should return true', ()=> {
    let testEmail = 'hello_world@world.com'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeTruthy();
})

test('If valid email - should return true', ()=> {
    let testEmail = 'hello_worl324XLKJDJ_LKJSDFLKJSD@worldLSDIJF98980KJLN.com'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeTruthy();
})

test('If valid email - should return true', ()=> {
    let testEmail = 'test@test.com'

    let result = generalUtil.validateEmail(testEmail);
    expect(result).toBeTruthy();
})


/*
 * State Validation Function Test
 */

 test('If Valid State - should return true', ()=> {
     let testState = 'CO'

     let result = generalUtil.validateState(testState);
     expect(result).toBeTruthy();
 })

 test('If Valid State - should return true', ()=> {
    let testState = 'Nv'

    let result = generalUtil.validateState(testState);
    expect(result).toBeTruthy();
})

test('If Invalid State = should return false', ()=> {
    let testState = 'ldkfjdlkfj';

    let result = generalUtil.validateState(testState);
    expect(result).toBeFalsy();
})

test('If Invalid State = should return false', ()=> {
    let testState = 'j';

    let result = generalUtil.validateState(testState);
    expect(result).toBeFalsy();
})

test('If Invalid State = should return false', ()=> {
    let testState = '@2';

    let result = generalUtil.validateState(testState);
    expect(result).toBeFalsy();
})

test('If Valid City = Should Return true', ()=> {
    let testCity = 'Denver';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeTruthy();
})

test('If Valid City = Should Return true', ()=> {
    let testCity = 'cHicago';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeTruthy();
})

test('If Valid City = Should Return true', ()=> {
    let testCity = 'Salt Lake City';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeTruthy();
})

test('If Invalid City = Should Return False', ()=> {
    let testCity = 'lsdkjflskdjflksdnflskdnflksdnflksdnflksdjflskdjflksjdflksjdflksjdflksj';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeFalsy();
})

test('If Invalid City = Should Return False', ()=> {
    let testCity = 'De9nver';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeFalsy();
})

test('If Invalid City = Should Return False', ()=> {
    let testCity = '!*D(NXKNsldk';

    let result = generalUtil.validateCity(testCity);
    expect(result).toBeFalsy();
})

/* 
 * Test validateZipcode Function
 * Should Return Boolean if valid or not
 */
test('Should return False', ()=> {
    let testValue = 'jjnksdnflsdnfsd';
    let testResult = generalUtil.validateZipCode(testValue);

    expect(testResult).toBeFalsy();
});

test('Should return False', ()=> {
    let testValue = '9';
    let testResult = generalUtil.validateZipCode(testValue);

    expect(testResult).toBeFalsy();
});

test('Should return False', ()=> {
    let testValue = '894589';
    let testResult = generalUtil.validateZipCode(testValue);

    expect(testResult).toBeFalsy();
});

test('Should return True', ()=> {
    let testValue = '90201';
    let testResult = generalUtil.validateZipCode(testValue);

    expect(testResult).toBeTruthy();
});

/*
 * Test validateDates
 * Check if Start Date is before End Date
 * Return true if Start Dat is before End Date
 */

 test('Should Return True', ()=> {
    let testValue1 = '2018-08-15';
    let testValue2 = '2018-12-31';

    let testResult = generalUtil.validateTwoDates(testValue1, testValue2);

    expect(testResult).toBeTruthy();
 });


 test('Should Return True', ()=> {
    let testValue1 = '2018-01-31';
    let testValue2 = '2019-02-01';

    let testResult = generalUtil.validateTwoDates(testValue1, testValue2);

    expect(testResult).toBeTruthy();
 });

 test('Should Return False', ()=> {
    let testValue1 = '2017-08-15';
    let testValue2 = '2015-12-31';

    let testResult = generalUtil.validateTwoDates(testValue1, testValue2);

    expect(testResult).toBeFalsy();
 });

 test('Should Return False', ()=> {
    let testValue1 = '2017-12-31';
    let testValue2 = '2017-12-30';

    let testResult = generalUtil.validateTwoDates(testValue1, testValue2);

    expect(testResult).toBeFalsy();
 });

 /*
 * Test convertDate
 * Check if Start Date is before End Date
 * Return true if Start Dat is before End Date
 */

 test('Should return a correctly truncated date', ()=> {
     let testValue = '2018-08-15T06:00:00.000Z';
     let expectedValue = '2018-08-15';

     let testResult = generalUtil.truncateDate(testValue);

     expect(testResult).toEqual(expectedValue);  
 });

 test('Should return a correctly truncated date', ()=> {
    let testValue = '2018-01-01T06:00:00.000Z';
    let expectedValue = '2018-01-01';

    let testResult = generalUtil.truncateDate(testValue);

    expect(testResult).toEqual(expectedValue);  
});

/*
 * Test calcAge function
 * Should calculate age in years
 * Return age in years
 */

 test('Should return 33 years', ()=> {
     let testValue = '1984-11-21';
     let expectedValue=33;

     let testResult = generalUtil.calcAge(testValue);

     expect(testResult).toEqual(expectedValue);
 });


 test('Should return 08:00 PM', ()=> {
     let testValue= new Date('2018-11-11T20:00:00.000Z');
     let expectedValue = '8:00 PM';

     let testResult = generalUtil.formatTime(testValue);

     expect(testResult).toEqual(expectedValue);
 });


 test('Should return 07:00 AM', ()=> {
    let testValue= new Date('2018-11-11T07:20:00.000Z');
    let expectedValue = '7:20 AM';

    let testResult = generalUtil.formatTime(testValue);

    expect(testResult).toEqual(expectedValue);
});