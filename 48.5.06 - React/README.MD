lets download react snippets
https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets

- What is react?
- Why its called react
- who invted it?
- Virtual dom vs regullar dom. (show with jQuery) (ZONE IN ANGULAR.)
  how much time takes to retrvie an element from the DOM.

  console.time('idan')

document.querySelector('body')

console.timeEnd('idan')

bundeling in angular vs react (both of them using webpack)

what is the className in the html? why?

- jsx? wth is JSX?! why do I need it?

document.querySelector('body').class
document.querySelector('body').className

there is no "[]" or "()" or [()]

import css? how???
create react app.
npm i -g create-react-app
(whats is means to install something globally?)

create-react-app project-name

what is yarn (npm vs yarn)

bubble js (pre compile) transform our JSX to js code (in the JS write the html).
https://babeljs.io/repl
let element = <span className="this-is-class">hi you</span> ) there is no ""\''\`` if you notice.

how to I create an element in pure js?
how do i createa an element in jQuery?
where is this element? is it in the dom?

the the index.html, what is <noscript> tag?

what is robot.txt?

in the index.js, there is an import of react and reactDom and app
the react.render gets the app as a param, and render it, this happens only once

the import of the "app" why we don't use .js?

the other params is where to display it, root is the defult (its the root in the index html.)

the css is not pare component (like angular), its global (so we will use data-role for component\classes)

react chrom extenstion

lets create a component
imr
imrc

the component its just a function (can be a class but function is batter) that returns JSX code (like html)

component needs to be upper cased at the begining (for it to be diffrent from reguller html tags)

**there is no need to use class component anynmore accourding to facebook**

component can return **only** one father element
wrong:

<div>
</div>
<div>
</div>

OK:

<div>
  <div></div>
  <div></div>
</div>

we can use <React.Fragment> to avoid a div

smart component (with state) and stupid component (wihtout)
we will have something that will determine the state.

lets try to add class (not className) to the JSX

use the state obj (reserved word)

destruct property from state to get easier access

break the html to small pieces of jsx in the same component (return jsx from a function)
