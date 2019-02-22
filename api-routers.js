// Initialize express router

const router = require('express').Router();

//set defalut API response 

router.get('/',(req,res) => {
    res.json({
        status:'API Its Woring',
        message:'welcome to RESTHub crafted with love!'
    });
});
 
//Import contact controller 
var contactController = require('./contactController');
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

//Export API routes
module.exports = router ;