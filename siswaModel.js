let mongoose = require('mongoose');

let siswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tanggallahir: {
        type: Date,
        required: true
    },
    jeniskelamin: {
        type: String,
        required: true
    },
    hobi: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

//export
let siswaModel = module.exports = mongoose.model('siswas', siswaSchema);
module.exports.get = function(callback, limit){
    siswaModel.find(callback).limit(limit);
}