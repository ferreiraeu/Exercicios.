import React from "react";

class Header extends React.Component {
  showMessage() {
    const message = "Olá Turma";
    return message;
  }

  render() {
    // const turma = 1 + 19;

    return (
      <header>
        {this.showMessage()} {1 + 209} - A
      </header>
    );
  }
}

export default Header;
