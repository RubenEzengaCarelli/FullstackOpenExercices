// Imports
import React, { useState } from 'react'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Componente Header 
const Header = ({ name }) => {
  return (
    <>
      <p>{name}</p>
    </>
  )
}

// Componente Part
const Part = ({ part, count_exercises }) => {
  return (
    <>
      <p>
        {part} {count_exercises}
      </p>
    </>
  )
}

// Componente Content refactorizada
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <>
      <Part part = {part1} count_exercises = {exercises1} />
      <Part part = {part2} count_exercises = {exercises2} />
      <Part part = {part3} count_exercises = {exercises3} />
    </>
  )
}

// Componente Total
const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
}

// 1.2 Componente App
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const part2 = 'Using props to pass data'
//   const part3 = 'State of a component'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
//       <Header name = {course} />
//       <Content 
//               part1 = {part1} 
//               part2 = {part2} 
//               part3 = {part3} 
//               count_excercises1 = {exercises1}
//               count_excercises2 = {exercises2}
//               count_excercises3 = {exercises3} 
//       />
//       <Total  total = {exercises1 + exercises2 + exercises3}/>
//     </div>
//   )
// }

// // 1.3 Componente App
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
    // <div>
    //   <Header name = {course} />
    //   <Content 

    //           part1 = {part1.name} 
    //           part2 = {part2.name} 
    //           part3 = {part3.name} 
    //           exercises1 = {part1.exercises}
    //           exercises2 = {part2.exercises}
    //           exercises3 = {part3.exercises} 
    //   />
    //   <Total  total = {part1.exercises + part2.exercises + part3.exercises}/>
    // </div>
//   )
// }

// // 1.4 Componente App
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header name = {course} /> 
//       <Content 
//               part1 = {parts[0].name} 
//               part2 = {parts[1].name} 
//               part3 = {parts[2].name} 
//               exercises1 = {parts[0].exercises}
//               exercises2 = {parts[1].exercises}
//               exercises3 = {parts[2].exercises} 
//       />
//       <Total  total = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
//     </div>
//   )
// }

// 1.5 Componente App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [  
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name = {course.name} /> 
      <Content 
              part1 = {course.parts[0].name} 
              part2 = {course.parts[1].name} 
              part3 = {course.parts[2].name} 
              exercises1 = {course.parts[0].exercises}
              exercises2 = {course.parts[1].exercises}
              exercises3 = {course.parts[2].exercises} 
      />
      <Total  total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

// Se renderiza el componente App en el elemento de id "root" de nuestro documento.
// ReactDOM.render(<App />, document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);