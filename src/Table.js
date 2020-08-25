import ReactDom from "react-dom";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>7.99</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>20.9</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>50.1</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
