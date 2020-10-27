---
title: "ESLint vs. JS Standard vs. Prettier"
date: "2020-10-28"
tags: ['code quality', 'linting']
---

All these tools sit firmly in the "code review" category, but what's the difference between them?

# ESLint
[ESLint](https://eslint.org/) is the crème de la crème of configurable linting tools. It checks and, if configured, automatically corrects code style to keep everything consistent across all files in your project.

ESLint is highly configurable and each rule can be tailored to suit your precise needs. Severity can also be tweaked in the config file, so if you find one rule too restrictive, it can be reduced from "error" to "warning".

A number of plugins exist that will be of huge benefit to the majority of projects. One of the most popular is `eslint-config-airbnb` which, at the time of writing, has [over 2.2 million weekly downloads](https://www.npmjs.com/package/eslint-config-airbnb) on npm.

## Installation

**Note:** before installation, check out the section on style guides below, as you may want to choose one of these before setting up ESLint for the first time.

Install ESLint with:
```
yarn add eslint --dev
```

And configure with:
```
yarn eslint --init
```

To enforce one of the code styles referenced below, choose the third configuration option, which looks like this:
```
How would you like to use ESLint?
> To check syntax only
> To check syntax and find problems
> To check syntax, find problems, and enforce code style // 👈 This one!
```

## Configuration

### React hooks
If using the Airbnb style guide, enabling linting rules for React hooks is easy; we simply add the following to our `.eslintrc` file:
```
extends: ['airbnb', 'airbnb/hooks']
```

### Disabling rules globally

ESLint comes with a large number of rules are enabled by default, and some of these can be very restrictive (or simply not to your taste).

To globally disable rules inside of our `.eslintrc` config file, we use the `rules` key together with an error level and any options we want to use.

Error levels can be set for a specific rule by specifying the rule ID together with one of these values:
* `'off'` or `0` - turn the rule off
* `'warn'` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `'error'` or `2` - turn the rule on as an error (exit code is 1 when triggered)

For example:
```
{
  rules: {
    eqeqeq: 'off',
    curly: 'error',
    quotes: ['error', 'single'],
	  'react/jsx-filename-extension': 0,
  }
}
```

## Airbnb vs. Standard vs. Google style guides

The following style guides are written by companies with plenty of experience building large-scale applications while staying consistent across multiple teams. If you don't already have strong opinions on the style of your code, these plugins are a great place to start!

As mentioned in the previous section, [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) is one of the most popular on the web. Their full JS style guide can be found [here](https://github.com/airbnb/javascript).

An alternative is [Google's config](https://www.npmjs.com/package/eslint-config-google). Their style guide can be found [here](https://google.github.io/styleguide/jsguide.html).

[JS Standard](https://www.npmjs.com/package/standard) is a little different from the others, and is covered in more detail in the following section.

## Integration with Webstorm

Webstorm has great support for ESLint. The [docs](https://www.jetbrains.com/help/webstorm/eslint.html) are very helpful, explaining precisely how to set up and configure the tool to your liking.

Although Webstorm has sensible style defaults built in, most new projects will not come with an `.eslintrc` file. As such, you'll have to install ESLint as a global or dev dependency in order to use the rules in your project.

# JS Standard
Whereas ESLint gives you full control over your config, [JavaScript Standard Style](https://standardjs.com/index.html) provides a robust set of predefined, _unconfigurable_ rules.

The whole purpose of this package is to allow you, as a developer, to simply plug-and-play and not have the hassle of configuring (and maintaining) a complex set of config rules. The downside to this is that the package is not configurable; individual rules cannot be changed.

As a halfway-house, there exist a couple of similar packages for anyone who does not want to completely accept JS Standard:
 * [semistandard](https://github.com/standard/semistandard) - standard, with semicolons
*  [standardx](https://github.com/standard/standardx) - standard, with custom tweaks

Finally, it's possible to have the **best of both worlds** by using `eslint` directly with [eslint-config-standard](https://github.com/standard/eslint-config-standard) to layer your changes on top.

# Prettier
Prettier is a tool in the same category as ESLint, but it's specifically used to format your code. One of the most impressive features of Prettier is its ability to **automatically reformat** on file save.

The Prettier docs state that we should:

> use **Prettier for formatting** and **linters for catching bugs!**  

More information on Prettier (and the differences between the two types of tools) can be found [here](https://prettier.io/docs/en/comparison.html).