import mongoose from 'mongoose';
import config from 'config';

export default (app) => {
    const port = process.env.PORT || 9000;
    mongoose.connect(config.get("db"), {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            app.listen(port, () => console.log(`Listening on port ${port}...`));
        })
        .catch(err => console.log("Could not connect to the database..."));
    mongoose.set("useFindAndModify", false);
}