module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css"); // copy to _site/css
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  