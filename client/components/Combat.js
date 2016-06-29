/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import Fighter from './Fighter';

class Combat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.creatureChange = this.creatureChange.bind(this);
  }

  // purchase(event) {
  //   if (event.currentTarget.getAttribute('class') === 'taken') return;
  //   const seatid = event.currentTarget.getAttribute('data-id');
  //   const sectid = this.props.section._id;
  //   const body = JSON.stringify({ sectid });
  //
  //   fetch(`//localhost:3333/seats/${seatid}/purchase`, { method: 'put', body, headers: { 'Content-Type': 'application/json' } })
  //   .then(r => r.json())
  //   .then((r) => {
  //     const seat = this.state.seats.find(s => s._id === r.seat._id);
  //     seat.isPurchased = true;
  //     this.setState({ total: r.section.total, seats: this.state.seats });
  //   });
  // }

  creatureChange(event) {
    console.log('COMBAT: creatureChange');

    const id = event.currentTarget.value;
    const dataId = event.currentTarget.getAttribute('data-id');

    debugger;

    fetch(`//localhost:3333/creatures/${id}/get`)
      .then(r => r.json())
      .then(j => {
        if (dataId === 1) {
          this.setState({ creature1: j.creature });
        } else {
          this.setState({ creature2: j.creature });
        }
      });

    // do render:
    this.setState({ });
  }


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-6'>
            <Fighter creature="1" onCreatureChange={this.creatureChange} />
          </div>
          <div className='col-xs-6'>
            <Fighter creature="2" onCreatureChange={this.creatureChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Combat;
