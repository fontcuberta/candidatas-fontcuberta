import React, { Component } from 'react';

import { candidatesCollection } from '../firebase/db';
import CandidateItem from './CandidateItem';
import TextField from '@material-ui/core/TextField';

import './Candidates.css';

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
        <div className="container">
          <TextField
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>
        <div className="results">
          <h2>List of Filtered Candidates</h2>
          <span>{this.items}</span>
        </div>
      </div>
    );
  }
}

export default Candidates;
