import React from "react";

const Hello = () => {
//     return(      //jsx
//         <div>
//             <h1>Hello Madhuri</h1>
//         </div>
//     )
        return React.createElement('div', {id : "hello", className:'dummyClass'} , React.createElement('h1',null, 'Hello madhavi'))
 }

export default Hello;