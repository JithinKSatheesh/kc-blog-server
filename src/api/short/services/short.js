'use strict';

/**
 * short service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short.short');
