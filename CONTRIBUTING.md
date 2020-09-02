# Quick setup of your environment

First of all, clone the repository with this command

```
git clone git@github.com:blablacar/ui-library.git
```

Then go to the repository

```
cd ui-library
```

And run

```
npm install
```

The only external dependency this package has is `nodeJS` and `npm`. In order to avoid errors due to different local versions, please run the following script to know if you need to update these dependencies:

```
npm run bla node
```

You should have two validate messages. If not, then please update your environment.

# Organization

Each component is stored in the `src` folder. Each component has its own folder with all of its information. Basically, you will always have:

- A component `.tsx` file
- A stylesheet associated to your component `.style.tsx`
- A unit test file `.unit.tsx`
- A story file (functional testing) `.story.mdx`

You can generate a component scaffolding by running

```bash
npm run generate
```

it will ask for component name and check if this name has already been taken.

The only dependency to use this library is to be in a ReactJS environment. The repository also includes Typescript syntax but this one is compiled to ES5 in the build folder.

Wanna create a new component ? Check those 2 wikis:

- First our [component guidelines](https://github.com/blablacar/ui-library/wiki/Component-guidelines)
- Then how to [create (and delete) a UI component](<https://github.com/blablacar/ui-library/wiki/Create-(and-delete)-a-UI-component>)

# Precommit hooks

The package is composed by several precommit hooks:

- Unit tests
- Tslint
- Stylelint
- Package checker, to verify that we are using specific library versions

# Git

To automatically prepend the branch name to your commit name on every commit, please run the following command at the root of the repository:
`cp ./bin/setup/prepare-commit-msg .git/hooks/prepare-commit-msg`

# Editor Setup

We recommend you to add to your text-editor some plugins such as `eslint` or `stylelint` to immediately get the errors without waiting for the precommit-hook crash.
