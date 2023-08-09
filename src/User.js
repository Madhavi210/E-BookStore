import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../src//assets/logo.svg"
// import { Profile } from './components/profile/Profile';

export const User = ({ name, age }) => {
  // const xy = 5;
  //usestate - hook - To manage states. Returns a stateful value and an updater function to update it.
  //hook-simple JavaScript functions that we can use to isolate the reusable part from a functional component.

  //x is var & setX is function
  const [x, setX] = useState(0);  //here 5 is initial val of x

  // ddestructuring array

  // const arr = [1, 2];

  //method-1 const a=arr[0];
  //   const b=arr[1];

  //method-2
  // const [a, b] = arr;
  //1 & 2 both methods are same

  //destructuring object
  // const obj={
  //   sub: science,
  //   std: 10
  // };

  // const{syb,std}=obj;

  return (
    // only return 1 element so that when u want to use multiple div or any other element
    // then u can wrap it into the <></> or <React.Fragment></React.Fragment> tags

    // this is optional -> u can use <></> this also

   <>
      <h1>
        {/* This is User component
        <p>Welcome {name}</p>
        <p>Age {age}</p> */}
        incrementer and Decrementer 
        {/* {xy} */}
        <br />
        {x}
        <br />
        <button onClick={() => setX(x+1)}>increment</button>
        <button onClick={() => setX(x-1)}>Decrement</button>
        <br />
        <NavLink to={"/"}>Home</NavLink>
      </h1>
      <h2>Go to Home 👆</h2>
      {/* <img src={logo} /> */}
      </>
  );
};

export const Home = () => {
  return (
    <>
      <h1>
        This is Home component
        <h4>
          <NavLink to={"/User"}>User</NavLink>
        </h4>
        <h4>
          <NavLink to={"/Profile"}>Profile</NavLink>
        </h4>
      </h1>
    </>
  );
};