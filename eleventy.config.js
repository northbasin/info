export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("./content/**");
  eleventyConfig.setLayoutsDirectory("./layouts");
  eleventyConfig.addPassthroughCopy("./content/css");
}
