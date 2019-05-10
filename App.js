import React, { Component } from "react";
import logo from "./logo.svg";
import List from "./src/components/Crime";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <List />
        </header>
      </div>
    );
  }
}
export default App;

//   searchData(e) {
//     console.log(e.target.value);
//   }
// search(e) {
//     const { list } = this.state;
//     const text = e.target.value

//     const result = list.filter((elem) => {

//         return elem.substring(0, text.length).toLowerCase() == text.toLowerCase()
//         // return elem.split().reverse().join().toLowerCase() == text.toLowerCase()

//     })
//     this.setState({
//         result,
//         text
//     })

// }

/* <input
          placeholder="search here..."
          onChange={e =>
            this.searchData(this.setState({ reslt: e.target.value }))
          }
        /> */
/* {
                    arr.map((e, ind) => {
                        return <p key={ind}>{ind + 1}) {e}</p>
                    })
                } */
