import "./styles.css";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Input from "@semcore/ui/input";
import Button from "@semcore/ui/button";

export default class BackendTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  FormSubmittionHandler(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <form action="#">

            <Input size="m" state="normal">
                <Input.Value 
                    placeholder="Search Test"
                    onChange={(e) => this.setState({ search: e.target.value })} 
                />
            </Input>

            <Button 
                size="l" 
                use="primary"
                interactive onClick={e => this.FormSubmittionHandler(e)}>
            Search Test
            </Button>

           
          </form>
        </div>
      </div>
    );
  }
}