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