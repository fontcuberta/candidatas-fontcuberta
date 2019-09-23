import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

class CandidateItem extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.candidate.full_name}
            secondary={this.props.candidate.email}
          />
        </ListItem>
      </List>
    );
  }
}

export default CandidateItem;
