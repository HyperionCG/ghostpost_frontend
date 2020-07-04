import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/vote/").then(res => res.json()).then(data => this.setState({vote: data}))
  }

  }

  render() {
    return (
      <div>
        <h1>Ghost Post</h1>
        {this.state.post.map((p) => {
          return (
        <ul>
          <li>Shoe Size {p.id}</li>
          
        </ul>
          )
        }
        )}
      </div>
    );
  }
}

export default App;
