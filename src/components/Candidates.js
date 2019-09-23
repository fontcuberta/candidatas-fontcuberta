import React, { Component } from 'react';

import { candidatesCollection } from '../firebase/db';
import CandidateItem from './CandidateItem';

class Candidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
      filteredCandidates: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let currentList = [];
    let newList = [];

    if (event.target.value !== '') {
      currentList = this.state.candidates;
      newList = currentList.filter(candidate => {
        const lowerCaseName = candidate.full_name.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return lowerCaseName.includes(filter);
      });
    } else {
      newList = this.state.candidates;
    }
    this.setState({ filteredCandidates: newList });
  }

  componentDidMount() {
    candidatesCollection.get().then(querySnapshot => {
      let data = querySnapshot.docs.map(function(documentSnapshot) {
        return { ...documentSnapshot.data(), id: documentSnapshot.id };
      });
      this.setState({ candidates: data });
      this.setState({ filteredCandidates: data });
    });
  }

  render() {
    this.items = this.state.filteredCandidates.map((candidate, key) => (
      <CandidateItem candidate={candidate} key={key} />
    ));
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <span>{this.items}</span>
      </div>
    );
  }
}

export default Candidates;
