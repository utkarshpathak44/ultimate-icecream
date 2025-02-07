useState: for stateful variables, re-renders the components when the value of the stateful variable is changed
useEffect: for performing some logic when some dependency is changed, on the first render or on all the renders
useRef: for persisting the value throught the re renders of the component, for pointing towards the dom element, for storing the previous state variable
useMemo: memoizes the return value of the function, on the basis of the dependencies, this saves the computation power, this calls the function and returns the value
useCallback: for memoizing the function so that it isnt re-calculated, on the basis of the dependency array, the functions arnt called they are just returned
useReducer: for handling the complex state of the stateful components, requires a reducer function, an initial state, the reducer function handles the changes in the complex state
useContext: for sharing the states between some components
         1. create a context using createContext(). 
         2. create and export a provider, in this provider, create a stateful variable, pass those as props when returning the provider, 
            render the children in the prop, 
         3. export the custom hook to use the context, using the useContext hook, now to use the hook, wrap the provider around the elements which need to share the states, 
         4. import the custom hook in the components and use the context

synchronous code: executes line by line, each operation blocks the next one, till it completes, can freeze the browser
asynchronous code: allows other code to run while waiting for a task, using callbacks, promises and async/await, dosent freexe the browser, async tasks dosent happen instantaneously
promises: 


callback hell: when to get the output of a async function, we add a callback to a function, when we want to do this to may function, this starts looking like a pyramid,
            and also it becomes very hard to debug,

promise chaining:we can chain .then() calls

using async/await calls: async the function and await the promise calls, this makes the code look cleaner and debugging easier using the try catch block

class components:

redux/zustand:

redux toolkit:

custom hooks:


lazy loading/ code splitting/ chunking:

suspence:

reconciliation:

react fiber:

server side rendering/ client side rendering:
seo


routing rbac:
protected routes: using hoc?

query params


testing:react testing library



performance: 

shimmer ui
optimizing the rendering of the components

lazy loading
optimized code
bundler
