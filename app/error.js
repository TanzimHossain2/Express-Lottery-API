const notFoundHandler = (req,_res,next)=>{
    const error = new Error(`Resource not found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
}

const errorHandler = (error, req, res, next)=>{
    if (error.status) {
        res.status(error.status).json({message: error.message});
    }

    else {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    notFoundHandler,
    errorHandler
}