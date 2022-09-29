import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
            <div className='questions'>
            <div className='question-heading'>
                <h1>Most Asked Interview Questions</h1>
                <p>Read and prepare yourself for upcoming Interviews 🧑‍💻</p>
            </div>
            <div className='singel-question'>
            <h3>1. How does react work?</h3>
            <p>React is a JavaScript library. It divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary. The major features of react are JSX, Virtual DOM, Components and Props, State Management, etc. 
            <br /> <br />
            Virtual DOM is basically a DOM tree representation in JavaScript.
            When it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
            </p>
            </div>
            <div className='singel-question'>
            <h3>2. Differences between props and state</h3>
            <p>Props can be passed from a parent component to a child component and it is immutable it can't be changed after it has been set. On the other hand, State is only available inside the component and changeable only within the component you can't access it from outside of the component. Also, props are used to communicate between components, and states are used for rendering dynamic changes within the component.
            </p>
            </div>
            <div className='singel-question'>
            <h3>3. Which things you can do with useEffect except fetch data from API?</h3>
            <p>useEffect hook is the alternative of class lifecycle method. With this useEffect hook, we can fetch data from API, manually changing the DOM in React components, use timers like setTimeout or setInterval, etc </p>
            </div>
        </div>
        </div>
    );
};

export default Questions;