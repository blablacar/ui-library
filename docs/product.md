# What is it?

The lego project is basically creating a pattern library, something reusable with the brand of BlaBlaCar. This is based on the [atomic design method](http://bradfrost.com/blog/post/atomic-web-design/ ) where designers and client side developers can work together with the same way.

# Okay... But why?

There are several benefits by creating our own pattern library:

- We control it. We are the maintainers of the project and we can decide of what kind of interactions/situations we want to handle, nothing more. So our codebase will be lighter than if we decide to use a generic library like bootstrap for example.

- This is a living documentation, meaning the state of the lego components will be the exact same state that the components we are using on production on the platforms. Everything is centralized and this library allow everyone (front-end, UX, QA) to test the components individually.

- People will be able to import the library and using the components everywhere. The only dependency is the Javascript library ReactJS.

- Improve the consistency and the quality of the end product since both designers and developers will have to stick to the guidelines.

- The library is tested (units, functionals and even snapshots), and we ensure a good test coverage of it, to let the "client" of the library focusing on their product.

- This Disconnected from a business. So every component will be built in a generic way, not because we have a need at a moment for a feature we decide then to expand to everywhere.

- The ability to share this library makes us consider to open source it to have some feedbacks from the community.  
