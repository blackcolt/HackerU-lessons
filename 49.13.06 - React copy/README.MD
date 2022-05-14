what is yarn (npm vs yarn)

when we use:

import Component from something (defult)
//export default Component
import { var } from someting (exports with no defults.)
export { Component }
import var , { var2 } from someting (exports with and defults.)

on npm start: "on your local network"

if we are importing js\jsx no need to extention name
when we are importing something else - webpack need to extestion.

if we don't want to show to component - return null instead.

use object for styling

https://create-react-app.dev/docs/adding-bootstrap/

https://tailwindcss.com/docs/guides/create-react-app

use array of jsx elements =
[<span>1</span>, <span>1</span>, <span>1</span>,<span>1</span>]

<ul>
{arr.map(ele=><span>{ele}</span>)}
<ul>
use the state obj (reserved word)

lets use some css.

smart component (with state) and stupid component (wihtout)
we will have something that will determine the state.

lets install some css laybary (tailwind)

const [count, setCount] = setState(0)

webpack - bundling service (packing all of our files to one etc..)

user = {
name: "idan",
age: 30,
email: "idanmagled@gmail.com",
handle: "blackcolt"
}

lets show the users? create an array of users, and show it in a table. (lets do it smart.)

(read the first object, get its keys, create the headers, and then write it.)
lets change class according to user property (like age)

events:
onClick= {()=>console.log(111)}
why we need to wrap it in another funciton?
