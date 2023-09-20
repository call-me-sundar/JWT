const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connected');
}).catch((err)=>{
    console.log('db not connected');
    console.log({err: err});
})

module.exports = {mongoose}