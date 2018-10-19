var mongoose = require('mongoose');

mongoose.connect("mongodb://prox:project6x@ds121413.mlab.com:21413/pro-x");
// mongoose.connect("MONGODB_URI");
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
