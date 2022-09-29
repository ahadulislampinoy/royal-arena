import React from 'react';
import './Question2.css';

const Question2 = () => {
    return (
        <div className='questions'>
        <div className="container">
        <section className="d-flex justify-content-center pt-0 py-md-5">
            <div className="w-100">
                <div className="text-center pb-4">
                    <h3>Most Asked Interview Questions</h3>
                    <p className="pt-3">Read and prepare yourself for upcoming Interviews 🧑‍💻</p>
                </div>
                {/* Accordion start */}
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h5 className="text-black">
                                    What are the difference between var, let and const?
                                </h5>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body lh-lg">
                                One of the features that came with ES6 is the addition of let and const. Now the questions
                                is,
                                what makes them different from var. var declarations
                                are globally scoped while let and const are block scoped. var variables can be updated and
                                re-declared within its scope; let variables can be updated but not re-declared; const
                                variables can neither be updated nor re-declared. They are all hoisted to the top of their
                                scope
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5 className="text-black">
                                    What are the difference between Regular function and Arrow function?
                                </h5>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body lh-lg">
                                Arrow function it's a new feature in ES6 that
                                allows you to write function expressions in a more compact manner. Regular JavaScript
                                functions and arrow functions are similar in operation. Since regular functions are
                                constructible, they can be called using the new keyword. However, the arrow functions are
                                only callable and not constructible, although there are several
                                distinctions. there are certain interesting differences between them - 1.Syntax,
                                2.Arguments binding,
                                3.Use of this keyword,
                                4.Using a new keyword </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h5 className="text-black">
                                    Why do we use Template strings?
                                </h5>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body lh-lg">
                                Templates Strings are an alternative to string concatenation. There are few reasons why we
                                have to use Template Strings - 1.They offer a great syntax to define multiline strings,
                                2.They provide an easy way to interpolate variables and expressions in strings, 3.Tagged
                                template literals offers you the opportunity to parse template literals in whatever way you
                                want.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Accordion start */}
            </div>
        </section>
    </div>
    </div>
    );
};

export default Question2;