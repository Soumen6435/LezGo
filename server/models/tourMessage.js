import mongoose from 'mongoose';

const tourSchema = mongoose.Schema({
    creator: String,
    number:String,
    title: String,
    location:String,
    selectedFile: String,
    howtoreach: String,
    thingstodo: String,

    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // }
})

var TourMessage = mongoose.model('TourMessage', tourSchema);

export default TourMessage;