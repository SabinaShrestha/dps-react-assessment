import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';

class Locations extends Component {
  state = { locations: [] };

  componentDidMount() {
    axios.get('/api/all_locations')
      .then(res => {
        this.setState({ locations: res.data.entries })
      })
      .catch( error => {
        console.log(error.response);
    });
  }


  render() {
    const {locations} = this.state
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={dpsLogo} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>Locations</Header>
        </Segment>
        {locations.map(location =>
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Segment inverted>
                  <Header
                  as='h1'
                  textAlign='center'
                  style={styles.header}>
                    {location.name}
                  </Header>
                  <Divider />
                  <Header as='h3' textAlign="center" style={styles.header}>
                    {location.street_address}
                  </Header>
                  <Divider />
                  <Header as='h3' textAlign="center" style={styles.header}>
                    {location.locality}
                  </Header>
                  <Divider />
                  <Header as='h3' textAlign="center" style={styles.header}>
                    {location.region}
                  </Header>
              </Segment>
            </Grid.Column>
          </Grid>
        )}


      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Locations;
