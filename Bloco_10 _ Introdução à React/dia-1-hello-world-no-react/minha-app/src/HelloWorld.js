import React from "react";

class HelloWorld extends React.Component {
  // método render, é o método mais importante
  render() {
    return (
      <section className="hello">
        <h1>Hello World</h1>
        <h2>Este é meu primeiro Componente React</h2>
      </section>
    );
  }
}

export default HelloWorld;
