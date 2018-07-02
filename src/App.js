import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {text: '', items: []};

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="w">TODO App</h1>
        </div>

        <div className="margin-top-50px">
          <input className="input" value={this.state.text} onChange={this.handleInput} placeholder="Enter some info" />     
          <button className="button-primary-outlined" onClick={this.addItem}>Add #{this.state.items.length + 1}</button> 
        </div>
        
        <hr /> <br />

        <ItemList items={this.state.items} func={this.deleteItem}/>

      </div>
    );
  }

  handleInput(e)
  {
    this.setState({
      text: e.target.value
    });
  }

  addItem(e)
  {
    this.p(e);

    var newItem = {
      text: this.state.text,
      id: Date.now(),
      num: this.state.items.length + 1
    }

    if(this.state.text != '')
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    else
      alert("TODO text can't be empty!");
  }

  deleteItem(key)
  {
   for(var i = 0; i < this.state.items.length; i++)
    {
      if(key.target.id == this.state.items[i].id)
      {
        this.state.items.splice(i, 1);
        this.setState({
          items: this.state.items,
          text: ''
        });        
      }        
    }
  }

  p(e)
  {
    e.preventDefault();
  }
}

class ItemList extends React.Component {
  render()
  {
    return(
      <ul className="features center">
        {this.props.items.map(item => (
          <div className="center">
            <button className="button-info-outlined">#{this.props.items.indexOf(item) + 1}</button> 
            <input className="input" readOnly="readOnly" value={item.text} />
            <button className="button-danger-outlined" id={item.id} onClick={this.props.func}>Delete</button> 
          </div>
        ))}
      </ul>
    );
  }
}

export default App;