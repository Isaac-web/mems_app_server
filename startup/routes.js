import posts from '../routes/posts.js';

export default (app) => {
    app.use("/api/posts", posts);
    app.get("/", (req, res) => res.send("App is running..."));
}