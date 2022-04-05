module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f34e90be7f82832445b045658d6d1936'),
  },
});
