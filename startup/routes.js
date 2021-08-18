import posts from '../routes/posts.js';
import users from '../routes/users.js';
import comments from '../routes/comments.js'

export default (app) => {
    app.use("/api/posts", posts);
    app.use("/api/users", users)
    app.use("/api/comments", comments);
    app.get("/", (req, res) => res.send("App is running..."));
}