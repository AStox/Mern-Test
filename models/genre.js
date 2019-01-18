var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenraSchema = new Schema (
    {
        name: {type: String, minlength: 3, maxlength: 100, required: true},
    }
);

GenraSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenraSchema);