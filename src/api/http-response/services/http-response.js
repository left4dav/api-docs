'use strict';

/**
 * http-response service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::http-response.http-response');
