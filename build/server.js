"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server imports
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var helmet = require("helmet");
var compression = require("compression");
var cors = require("cors");
// import routers
var UserRouter_1 = require("./router/UserRouter");
// import keys
var keys = require('../config/keys');
// server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // mongoose stuff for local and prod
        // to be moved to
        var MONGO_URI = keys.mongoURI;
        mongoose.connect(MONGO_URI);
        // config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/users', UserRouter_1.default);
    };
    return Server;
}());
// export class
exports.default = new Server().app;
