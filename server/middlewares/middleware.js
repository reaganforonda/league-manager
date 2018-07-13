let session_id = 1;

module.exports = {
    checkSession: (req, res, next) => {
        if(!req.session.user) {
            req.session.user = {session_id: '', user_id: '', acct_type: '', acct_id: 0};
            req.session.user.session_id = session_id;
            session_id++;
        }
        next();
    },
}