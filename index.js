import express from 'express';

import db from './startup/db.js';
import middleware from './startup/middleware.js';
import routes from './startup/routes.js';

const app = express();
middleware(app);
routes(app);
db(app);


