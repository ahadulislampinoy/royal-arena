import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h2 className='question-heading'>Most Asked Interview Questions</h2>
            <div className='singel-question'>
            <h3>1. How does react work?</h3>
            <p>This is how react works: React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
            Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
            </p>
            </div>
            <div className='singel-question'>
            <h3>2. Differences between props and state</h3>
            <p>Props are used to pass data from one component to another, it is immutable you cannot change or modify its value. Besides The state is mutable and a local data storage that is local to the component only and cannot be passed to other components etc.</p>
            </div>
            <div className='singel-question'>
            <h3>3. Which things you can do with useEffect except fetch data from API?</h3>
            <p>Besides fetching data from API, we can do also things like: directly updating the DOM, setting timers, etc by using useEffect hook.</p>
            </div>
        </div>
    );
};

export default Questions;