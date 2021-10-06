import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/simonDataBases", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then( db => console.log("DB is connecd"))
.catch(db => console.log("error al db", db))
