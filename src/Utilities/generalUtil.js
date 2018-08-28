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
    },

    /*
     * Function to validate League Name
     * @param String leaguename = League Name that user has entered
     */

    validateLeagueName(leaguename){
        if(leaguename){
            if(leaguename.length <= 45){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    /*
     * Function to validate City input
     * @param String City = City that user has entered
     */

     validateCity(city){
         if(city){
             if(city.length <= 45){
                let re=/^[a-zA-Z\s]*$/
                if(re.test(city)){
                    return true;
                } else {
                    return false;
                }
             } else {
                 return false;
             }
         } else {
             return false;
         }
     },

    /* 
     * Function to validate City State
     * @param String State = State that user has entered
     */
    validateState(state) {
        if(state) {
            if(state.length === 2) {
                let re=/^[A-Z]+$/i
                if(re.test(state)){
                    return true;
                } else {
                    return false
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    /* Function to validate if start End is Before End Date
     * @param String startDate = Start Date
     * @param String endDate = End Date
     */

    validateTwoDates(startDate, endDate){
        if( startDate < endDate) {
            return true;
        } else {
            return false
        }
    },

    /* Function to truncate date receive from Postgres to Readable string
     * @param String date = date received from Postgres
     */
    truncateDate(date){
        let truncatedDate = date.slice(0,10);
        return truncatedDate
    },

    /* Function to get current date
     * Return in 'YYYY-MM-DD' format'
     */

     getCurrentDateFormated() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();

        if( day < 10) {
            day = "0" + day;
        }

        if(month < 10) {
            month = "0"+month
        }

        return `${year}-${month}-${day}`
     }
}