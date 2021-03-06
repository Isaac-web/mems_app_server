export default (handler) => {
    return (req, res, next) => {
        const {error} = handler(req.body);
        if(error) return res.status(400).json({message: error.details[0].message});
    
        next();
    }
}

