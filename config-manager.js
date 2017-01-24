/*global module:true, require:true */

'use strict';

// Global Confic
global.env_variable = {};

/*
 * configure and start logging
 * @param {Object} config The configuration object for defining dir: log directory, level: loglevel
 * @return the created logger instance
 */
function configurationManager() {
    var envDetail = {
        "db_user": "testing_user",
        "db_password": "testing_pass",
        "frontend_host_url": "http://frontend.com",
        "vml_host_url": "http://vml.com",
        "microservice_host_url": "http://microservice.com"
    };

    env_variable = envDetail;

    return envDetail;
}

exports.configurationManager = configurationManager;