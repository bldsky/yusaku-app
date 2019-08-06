import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { Popper } from '@material-ui/core';


class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,  
    };
  }

  handleOpen = (event) =>{
    this.setState(
      {
        anchorEl: this.state.anchorEl ? null : event.currentTarget
      }
    );
  };


  render(){
    let open = Boolean(this.state.anchorEl)
    let id = open ? 'simple-popper' : undefined;

    return (
      <header>
        <AppBar title="My App" positin="static">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
          <Toolbar>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={4}>
                <Typography variant="h6" className="aa">
                  Yusaku-app
                </Typography>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={2}>
                <Button aria-describedby={id} className="Note" color="inherit" id="Note" onClick={this.handleOpen}>
                  Yusaku-appとは？
                </Button>
                <Popper id={id} open={open} anchorEl={this.state.anchorEl} transition  >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper style={{padding:20, width:400}}>
                        <Typography>
                          <h4>「昔〇〇してたアイツ、生きてんのかな」を見れる形にしよう。</h4>
                          昔の知人のユニークなエピソードを、匿名で気軽に。
                          昔の知人のエピソードを紹介することで、エピソードを知っている人がその知人の生存を教えてくれる、革新的で魔法のようなサービスです。
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default Navigation;
