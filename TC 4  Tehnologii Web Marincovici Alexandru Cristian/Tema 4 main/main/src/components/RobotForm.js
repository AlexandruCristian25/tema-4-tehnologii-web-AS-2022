import React, { Component } from 'react';

class RobotForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      type: null,
      mass: null,
    };
  }

  updateName(evt) {
    this.setState({
      name: evt.target.value,
    });
  }
  updateMass(evt) {
    this.setState({
      mass: evt.target.value,
    });
  }
  updateType(evt) {
    this.setState({
      type: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <form action=''>
          <input
            type='text'
            placeholder='name'
            id='name'
            onChange={(evt) => this.updateName(evt)}
          />
          <input
            type='text'
            placeholder='type'
            id='type'
            onChange={(evt) => this.updateType(evt)}
          />
          <input
            type='text'
            placeholder='mass'
            id='mass'
            onChange={(evt) => this.updateMass(evt)}
          />
          <button
            value='add'
            onClick={(e) => {
              e.preventDefault();

              const r = {
                name: this.state.name,
                type: this.state.type,
                mass: this.state.mass,
              };
              console.log(r)
              this.props.onAdd(r);
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default RobotForm;
