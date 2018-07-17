module.exports= {
    /*
     * Function to validate email
     * @param String email = Email that user has entered and needs validation - Must be max 255 Characters
     */
    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email) && email.length <= 255;
    },

    /*
     * Function to validate Zipcode
     * @param String zipcode = Zipcode that user has entered and needs validation
     */

    validateZipCode(zipcode) {
        let re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return re.test(zipcode);
    }
}