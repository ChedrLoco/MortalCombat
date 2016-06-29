/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

class Fighter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [] };
  }

  componentDidMount() {
    console.log('fighterComponentDidMount');
    fetch('//localhost:3333/combat')
      .then(r => r.json())
      .then(j => {

        console.log('creatures', j.creatures);
        console.log('weapons', j.weapons);

        this.setState({ creatures: j.creatures, weapons: j.weapons });
      });
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

  render() {
    return (
      <div>
          <h4>Pick a Fighter</h4>
          <select ref='fighter' data-id={this.props.creature} onChange={this.props.onCreatureChange}>
            <option>Select a fighter</option>
            {this.state.creatures.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>

      </div>
    );
  }
}

export default Fighter;
