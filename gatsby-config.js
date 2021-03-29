/**
 * Do not modify this file!
 *
 * All gatsby-* configuration files are in `.gatsby` directory and are written in Typescript.
 *
 * gatsby-plugin-ts-config is used to allow this
 * See plugin docs https://www.gatsbyjs.org/packages/gatsby-plugin-ts-config
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateConfig } = require(`gatsby-plugin-ts-config`);

module.exports = generateConfig({
  projectRoot: __dirname,
  configDir: `.gatsby`,
});
