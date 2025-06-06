import { HtmlBasePlugin } from "@11ty/eleventy";

export const config = {
  pathPrefix: "/info/",
};

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.setInputDirectory("./content/**");
  eleventyConfig.setLayoutsDirectory("./layouts");
  eleventyConfig.addPassthroughCopy("./content/css");
}
