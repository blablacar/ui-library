# How to create a Component?

The first question we should ask when we have to build a component (especially before the UI part) is:

> What is it supposed to do?

We want to have a functional and User Experience approach to build the component. So every time we create a new one, we need to do something generic, not only specific for a feature.

The `options` of the component will be determined considering its needs, and it can totally be compared to an API. Each component would have its own API:
- Restrictive to avoid the output of N different components with the same purpose.
- Permissive, in a sense that a component is not specific for a feature, it's designed globally for BlaBlaCar.

## How to write a good component ?

- Give a generic name, the closest as possible to the web standard names (If my component only renders a classic textarea it would be Textarea)
- Do not name the component for the role they play in your context, keep it simple and generic.
- Props (and potential state) should be also named according to their action within the component, not by the relation they can have with the rest of your application.
- Keep it simple. Your component must focus on doing ONE thing and providing a restrictive API to the end user of your component.

## What should I think about when I create a component?

- Does my component need a state? Meaning, do I need to create a class, or only a functional component? If you don't know, go with a functional component first, and migrate it if necessary.
- Respect a consistent convention across all components.
- Create the unit test with 100% of test coverage.
- Think about the accessibility in your component (and in the unit test).
- Create the story of the component to test it functionally.

## Component Conventions
- If you are using jsx, the file extension should be tsx.
- Import the external libraries first.
- The last import has to be the CSS.
- If there is a need for adding some inline style, use the JS config of the [branding](https://stash.priv.blablacar.net/projects/FRONT/repos/kirk/browse/branding.js) instead of hardcoded values.

## Component "API" Conventions
- Use the children if there is a main content.
- camelCase.
- Support the `className` option for each component, applied on the highest HTML tag output.
- Specify all of the actions we want to support (variables or functions like `onClick` etc.)
- Don't use the rest operator to support unknown cases.

## CSS Conventions

- Components are prefixed with `.kirk-`, e.g.: `.kirk-sublabel`, this prefix is for internal use, and shouldn't be targeted from outside of kirk.
- Use classcat as a description, if the purpose of the element is not obvious
- Prefer classcat over element references, e.g.: `.kirk-sublabel` instead of `div + div > span`

```
    // GOOD
    .kirk-sublabel > span {}

    // BAD
    .kirk-sublabel > div > span {}
```

- Nesting authorized (2 levels max)
- Classes are camelCase `.camelCaseClass`
