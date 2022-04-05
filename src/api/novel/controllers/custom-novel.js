

module.exports = {

  async getall(ctx, next) {

    try {


      const data = await strapi.entityService.findMany('api::novel.novel',ctx.query);

      if (!data) {
        ctx.internalServerError('Something went wrong')
      }
      ctx.response.body = { data }; // we could also send a JSON

    } catch (ex) {
      ctx.internalServerError('Something went wrong')
    }
  },

};