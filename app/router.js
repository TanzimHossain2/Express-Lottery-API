const router = require('express').Router();

router.use('/api/v1/tickets', require('../routes/routes'));

router.get('/health', (_req, res)=>{
    res.status(200).json({status: 'ok'});
})



module.exports = router;