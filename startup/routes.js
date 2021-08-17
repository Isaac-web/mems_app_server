import posts from '../routes/posts.js';
import users from '../routes/users.js';

export default (app) => {
    app.use("/api/posts", posts);
    app.use("/api/users", users)
    app.get("/", (req, res) => res.send("App is running..."));
}