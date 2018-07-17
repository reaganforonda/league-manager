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