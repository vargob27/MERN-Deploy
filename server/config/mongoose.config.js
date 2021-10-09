const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/exam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch((err) => console.log("Something wwent wrong when connecting to the database",  err));