import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:admin123simonBolivar@cluster0.pqjbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then( db => console.log("DB is connecd"))
.catch(db => console.log("error al db", db))