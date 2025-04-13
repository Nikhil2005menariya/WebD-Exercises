import React, { useRef, useState } from 'react';

function FormUsingRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmitted({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form using useRef</h3>
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
      {submitted && (
        <div>
          <p>Submitted Name: {submitted.name}</p>
          <p>Submitted Email: {submitted.email}</p>
        </div>
      )}
    </form>
  );
}

export default FormUsingRef;
