import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Trash from './Trash';
import Spam from './Spam';

const routes = [
  {
    path: '/trash',
    component: Trash
  },
  {
    path: '/spam',
    component: Spam
  }
];

class App extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    let isOpen = this.state.open;
    this.setState({ open: !isOpen });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Router>
          <Grid container>
            <Grid item xs={2}>
              <List component="nav" dense disablePadding>
                <ListItem button onClick={this.handleClick}>
                  <ListItemText primary="Waste" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" dense disablePadding>
                    <ListItem component={Link} to="/trash" button>
                      <ListItemText primary="Trash" />
                    </ListItem>
                    <ListItem component={Link} to="/spam" button>
                      <ListItemText primary="Spam" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Grid>
            <Grid item xs={10}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component} />
              ))}
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
