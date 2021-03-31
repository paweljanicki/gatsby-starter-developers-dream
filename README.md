# Developers Dream Gatsby Starter

Please visit [https://developers-dream.frontwork.tech](https://developers-dream.frontwork.tech) for more information.

## Overview

Developers Dream is a Gatsby Starter build with TypeScript, MDX and SCSS modules.
It is intended to be used as a personal website or blog for developers.
What can be typed is typed, there are a bunch of eslint rules in place, SCSS modules ensure that styles apply only locally.
There is prettier config in place, csscomb for formatting your stylesheets and some other goodies.
There is definitely room for improvement, I'm always happy to [hear your feedback](https://developers-dream.frontwork.tech/contact)

## Creating new site using the starter

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the developers dream starter.

    ```sh
    # create a new Gatsby site using the developers dream starter
    gatsby new gatsby-starter-developers-dream https://github.com/paweljanicki/gatsby-starter-developers-dream
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-starter-developers-dream/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## Editing content

Posts and pages live in the `content` directory. You can check the existing ones to get the idea.
All post and pages are created as MDX files. It's a mix of Markdown and JSX, [learn MDX here](https://mdxjs.com/)

Posts belong to the `content/posts` and pages to the `content/pages`.
MDX files can be placed directly in the relevant directory, or in their decidated directory.
The latter is particulary useful if you want to store some images to use in particular post/page.

### Frontmatter

At the beginning of MDX file you should always include Frontmatter, it's a metadata of the post/page you are creating.
If you mistype one of them you will get an error.
Unfortunately there is no type checking available as it's MDX.

This is the most basic example of a Frontmatter to be used in this project.

```md
---
title: Test Post
slug: 'test-post'
publishedTime: '2020-05-11'
published: true
id: 'wder8233rrj'
---
```

For more refer to [Frontmatter in the Docs](https://developers-dream.frontwork.tech/docs#frontmatter)

### Markdown

Just write your usual Markdown. It will work

### JSX

You can use React component, write some basic JSX and more. This is the power of MDX.
Check Gatsby [official guide](https://www.gatsbyjs.com/docs/how-to/routing/mdx/)

### Shortcodes

Shortcodes are React components you can use in MDX without importing them

Available shortcodes:

1. [Video](https://developers-dream.frontwork.tech/docs#shortcodes-video)

   `<Video url="https://www.youtube.com/embed/LdvPwr_77A0" />`

2. [CodePen](https://developers-dream.frontwork.tech/docs#shortcodes-codepen)

   `<CodePen id="eYNbGzV" height="400" tabs="js,result" />`

3. [ExternalLink](https://developers-dream.frontwork.tech/docs#shortcodes-externallink)

   `<ExternalLink url="https://mdxjs.com/">learn MDX here</ExternalLink>`

4. [AnchorLink](https://developers-dream.frontwork.tech/docs#shortcodes-anchorlink)

   `<AnchorLink to="/docs#frontmatter" title="Frontmatter" />`

5. [BlogPostsList](https://developers-dream.frontwork.tech/docs#shortcodes-blogpostslist)

   `<BlogPostsList />`

Refer to the docs for [more details](https://developers-dream.frontwork.tech/docs#shortcodes)

## Gatsby specific config

Gatsby specific config lives in `.gatsby` directory. They are written in TypeScript.

Plugins are configured in `.gatsby/gatsby-config.ts`.

Pages are created in `.gatsby/gatsby-node.ts`.

Gatsby still requires `gatsby-config.js`, please don't edit that file.
It is only used to build config based on `.gatsby` directory.

## Website config

Menus, paths, seo and other defaults are configured in `config` directory.

## Help and feedback

If you have any questions or feedback, please submit an issue.
