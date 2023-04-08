# Telecom Etude website

- [https://telecom-etude.fr](https://telecom-etude.fr)

## Setup

Software requirements:

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) - or use [nvm](https://github.com/nvm-sh/nvm)
- [npm](https://www.npmjs.com/)

```sh
git clone git@github.com:Telecom-Etude/website.git && cd website && git submodule update --recursive --init
```

> - note that the `git submodule update` will clone the [https://github.com/Telecom-Etude/website-data](https://github.com/Telecom-Etude/website-data) repository into `src/website-data`
> - you need the access to `git@github.com:Telecom-Etude/website-data.git` to work on this project

```sh
npm install # run once
npm run dev
```

## Infos

This website is currently using:

- [Astro](https://astro.build) for static pages
- [Svelte](https://svelte.dev) for reactive pages

## Internationalization (i18n)

- This website is using `i18next` ported by [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- translations are located in `src/website-data/locales`

## Updating packages

```sh
npx npm-check-updates
```
