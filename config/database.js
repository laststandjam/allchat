var mongoose = require('mongoose');


mongoose.connect(mongodb+srv://Zane:F1nuc0ne@book-club-project-fmquq.azure.mongodb.net/test?retryWrites=true&w=majority, { useNewUrlParser: true });

// database connection event
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${mongodb+srv://Zane:F1nuc0ne@book-club-project-fmquq.azure.mongodb.net/test?retryWrites=true&w=majority}`);
});


module.exports = mongoose;