// server imports
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';

// import routers
import UserRouter from './router/UserRouter';

// import keys
const keys = require('../config/keys');

// server class
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    // mongoose stuff for local and prod
    // to be moved to
    const MONGO_URI = keys.mongoURI;
    mongoose.connect('mongodb://localhost/test_4');

    // config
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/users', UserRouter);
  }
}

// export class
export default new Server().app;
