## Pages and components

Components are a new trend for structuring code. A component should include everything related to a single _feature_ at the same place. This means grouping you code by feature and not by role (having the css, js, test, etc.) grouped together by feature.

It's a good practice to separate components into a presentational and a container layer. The container layer is responsible for injecting in any kind of external data into the component. The presentational layer gets all the data from the containe layer (as props) and it renders out a view for them. Presentational components are usually written in plain react as the container layer abstracts away all external libraries for them into props.
