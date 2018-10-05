## React Portals

Can portal React content into different locations in the DOM.

### Usual cases (Semantical correctness)

- Notifications
- Modals

### Must cases (Practicality)

- When something should have different visual rules than the parent (parent: hidden, child: visible)
- When you have a hybrid app with React and other frameworks / vanilla JS
- When you would like fixed positioned elements inside transformed ones (page animations)
