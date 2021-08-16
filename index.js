import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const app = express();
app.get("/", (req, res) => res.send("App is running..."));


const port = process.env.PORT || 9000;
mongoose.connect(config.get("db"), {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => console.log(`Listinening on port ${port}...`));
    })
    .catch(err => console.log("Could not connect to the database..."));
mongoose.set("useFindAndModify", false);