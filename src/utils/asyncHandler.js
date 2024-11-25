const asyncHandler = (fn) = async (req, res, next)=>{
    try {
        await fn(req, res, next);
    } catch (error) {
        res.send(error.status || 500).json({error: error})
    }
}

export {asyncHandler}