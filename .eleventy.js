// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/guide");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/asset");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};