module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        sourceMap: true,
        additionalData: `
          @import "@/assets/sass/variables.sass";
        `
      }
    }
  }
};
