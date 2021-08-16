import mongoose from 'mongoose';

export default (req, res, next) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!validId) return res.status(404).json({message: "Invalid Id"});

    next();
}