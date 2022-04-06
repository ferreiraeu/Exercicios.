import React, { Component } from "react";

class Header extends Component {
  render() {
    const welcome = "Bem vindo turma";

    return (
      <header>
        {welcome} {10 + 10}
      </header>
    );
  }
}

export default Header;
