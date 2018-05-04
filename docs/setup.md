# Quick setup of your environment

First of all, clone the repository with this command:
```
git clone ssh://git@git.priv.blablacar.net:7999/front/kirk.git
```

Then go to the repository and run:
```
npm install
```

The only external dependency this package has is `nodeJS` and `npm`. In order to avoid errors due to different local versions, please run the following script to know if you need to update these dependencies:
```
npm run bla node

```
You should have two validate messages. If not, then please update your environment.

# Organization

Each component is stored in the `src` folder. Each component has its own folder with all of its informations. Basically, you will always have :
- A component `.tsx` file.
- A stylesheet associated to your component.
- A unit test file.
- A story file. (functional testing)

The only dependency to use this library is to be in a ReactJS environment. The repository also includes ES6+Typescript syntax but this one is compiled to ES5 in the build folder.

# Precommit hooks

The package is composed by several precommit hooks:
- Unit tests
- Tslint
- Stylelint
- Package checker, to verify that we are using specific library versions

# Git

To automatically prepend the branch name to your commit name on every commit, please run the following command at the root of the repository:
`cp ./docs/setup/prepare-commit-msg .git/hooks/prepare-commit-msg`

# Editor Setup

We recommend you to add to your text-editor some plugins such as `tslint` or `stylelint` to immediately get the errors without waiting for the precommit-hook crash.
