'use strict';

/**
 * sdk-method router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sdk-method.sdk-method');
