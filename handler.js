'use strict';

const tripsCreate = require('./trips-create.js');
const tripsReadAll = require('./trips-read-all.js');
const tripsReadOne = require('./trips-read-one.js');
const tripsUpdate = require('./trips-update.js');
const tripsDelete = require('./trips-delete.js');

module.exports.create = (event, context, callback) => {
  tripsCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  tripsReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  tripsReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  tripsUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  tripsDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };



    context.succeed(response);
  });
};