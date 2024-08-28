import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UseInfo: {
        name: "Random",
        location: "Dummy",
        avatar_url: "dummy-image",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sachin0986");
    const json = await data.json();
    this.setState({
      UseInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.UseInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user-img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
