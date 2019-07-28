# SHOPPING CART

Basic react application with using redux based statemanagement.

## Directory structure

- index.js: Main component is hooked to react here.
- store.js: Creates a redux store initializes with reducers
- reducers: All the reducers are placed here
- actions: All methods required for calling dispath are grouped here
- components: All the presendation/dump components are placed here
- containers: All the smart components (which interact with redux and manages state) are placed here

```
counter-app-redux
+src
    - index.js
    - store.js
        + reducers
            - cartReducer.js
        + actions
            - cartActions.js
        + components
            - navBar.jsx
        + containers
            - Basket.jsx
            - Product.jsx
        +
- package.json
```

## How to start

Run the command:

```
npm start
```
