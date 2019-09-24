import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class CandidateItem extends Component {
  render() {
    return (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>{this.props.candidate.age}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.candidate.full_name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {this.props.candidate.email}
                </Typography>
                Birthday: {this.props.candidate.birthday}
                <Typography component="span" color="textSecondary">
                  Postcode: {this.props.candidate.postcode}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }
}

export default CandidateItem;
