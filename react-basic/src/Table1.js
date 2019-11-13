import React, { Component } from "react";

const Header = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const Body = props => {
  console.log(props);
  return (
    <tbody>
      {/* <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr> */}
    </tbody>
  );
};

class Table1 extends Component {
  render() {
    console.log(this.props);
    const characterData = this.props.characterData;
    return (
      <table>
        <Header />
        <Body characterData={characterData} />
      </table>
    );
  }
}

export default Table1;
