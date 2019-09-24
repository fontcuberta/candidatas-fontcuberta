import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';

class CandidateItem extends Component {
  render() {
    return (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <FaceTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="h6" color="textPrimary">
                  {this.props.candidate.full_name}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  {this.props.candidate.email}
                </Typography>
                Birthday: {this.props.candidate.birthday}
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  Age: {this.props.candidate.age}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
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
