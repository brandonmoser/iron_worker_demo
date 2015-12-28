// Load all dependencies
var _ = require('lodash');
var Async = require('async');
var EJSON = require('ejson');
var Fiber = require('fibers');
var Future = require('fibers/future');
var Grid = require('gridfs-stream');
var IronWorker = require('iron_worker');
var Konphyg = require('konphyg');
var Moment = require('moment');
var Mongoose = require('mongoose');
var Request = require('request');
var Xml2js = require('xml2js');

console.log("iron worker:", JSON.stringify(IronWorker));
console.log("task_id:", JSON.stringify(IronWorker.taskId()));
console.log("params:", JSON.stringify(IronWorker.params()));
console.log("config:", JSON.stringify(IronWorker.config()));

Fiber(function() {
    console.log('wait... ' + new Date);
    oven._sleep(1000);
    console.log('ok... ' + new Date);
}).run();
console.log('back in main');
