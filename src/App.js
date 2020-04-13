import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  //Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
