import React, { Component } from "react";
import { fetchCrime, fetchForce, fetchApi } from "../config/api";
class List extends Component {
  constructor() {
    super();
    this.state = {
      // list: ["pakistan", "india", "New Zealand", "Austrlia", "japan", "kenya"],
      result: [],
      crime: [],
      loading: false,
      crimeapi: [],
      limit: 15,
      selectedCrime: "",
      selectedForce: ""
    };
    this.onCrimeChangeHanlder = this.onCrimeChangeHanlder.bind(this);
    this.onForceChangeHanlder = this.onForceChangeHanlder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onCrimeChangeHanlder(event) {
    this.setState({
      selectedCrime: event.target.value
    });
  }

  onForceChangeHanlder(event) {
    this.setState({
      selectedForce: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const forceAp = await fetchApi(
      this.state.selectedCrime,
      this.state.selectedForce
    );
    this.setState({
      crimeapi: forceAp
    });

    // alert(this.state.selectedCrime);
    // console.log("Your favorite flavor is: " + this.state.value);
  }
  async getData() {
    // this.setState({ loading: true });
    try {
      const crimeData = await fetchCrime();
      const forceData = await fetchForce();
      //const forceAp = await fetchApi();
      // console.log(forceAp);
      this.setState({
        result: crimeData,
        crime: forceData
        //crimeapi: forceAp
      });
    } catch (e) {
      console.log(e.target.value);
    }
  }
  more() {
    this.setState({
      limit: this.state.limit + 15
    });
  }

  render() {
    const { result, crime, crimeapi, limit } = this.state;
    const temp = [...crimeapi];
    console.log(temp);
    temp.length = limit;
    // const arr = text.length ? result : list;
    // console.log(result);
    // console.log(crimeapi);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>
            Crime:{" "}
            <select onChange={this.onCrimeChangeHanlder}>
              <option value="">select</option>
              {result.map((n, index) => {
                return (
                  <option key={index} value={n.url}>
                    {n.name}
                  </option>
                );
              })}
            </select>
          </span>
          <br />
          <span>
            Force:{" "}
            <select onChange={this.onForceChangeHanlder}>
              <option value="">select</option>

              {crime.map((n, index) => {
                return (
                  <option key={index} value={n.id}>
                    {n.name}
                  </option>
                );
              })}
            </select>
          </span>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <table style={{ padding: "30px" }}>
          <tr
            style={{
              width: "300px",

              backgroundColor: "brown"
            }}
          >
            <td>Id</td>
            <td>Categories</td>
            <td>Categories (Outcome Status)</td>
            <td>Date</td>
          </tr>
          {temp.map((e, index) => {
            return (
              // console.log(e)
              <tr style={{ backgroundColor: "grey" }} key={index}>
                <td>{e.id}</td>
                <td>{e.category}</td>
                <td>{e.outcome_status.category}</td>
                <td>{e.outcome_status.date}</td>
              </tr>
            );
          })}
        </table>
        <button onClick={this.more.bind(this)}>More</button>
        {/* <div>No Data Found</div> */}
      </div>
    );
  }
}

export default List;
