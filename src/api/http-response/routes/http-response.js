'use strict';

/**
 * http-response router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::http-response.http-response');
