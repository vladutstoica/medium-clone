# Medium Clone

This is an official Yarn v1 starter turborepo.

### Features

- CMS interface;
- API integration;
- Create/Read/Update/Delete Posts, Authors, Categories, Comments;
- Mobile-first design.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `cms`: a [Sanity](https://www.sanity.io/) app
- `frontend`: a [Next.js](https://nextjs.org/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd medium-clone
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd medium-clone
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd medium-clone
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

# Screenshots

![Desktop Screenshot](https://user-images.githubusercontent.com/23508982/226018239-99953e5d-51e4-46d2-8c9d-59d5791f8e7f.png)
![Mobile Screenshot](https://user-images.githubusercontent.com/23508982/226018804-c6fee842-d95f-498a-b365-81e9e1cdc4f5.png)

