import React, { Component } from 'react';
import { Container, Card, Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = { beers: [] };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data.entries })
      })
      .catch( error => {
        console.log(error.response);
    });
  }


  render() {
    const {beers} = this.state
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={dpsLogo} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>Beers</Header>
        </Segment>
          {beers.map(beer =>
              <Card.Group itemsPerRow={3}>
                  <Card key={beer.id}>
                    <Card.Content>
                      {beer.name}
                    </Card.Content>
                    <Card.Content>
                      {beer.description}
                    </Card.Content>
                    <Link to={`/beer/${beer.name}`}>
                      View Beer
                    </Link>
                  </Card>
              </Card.Group>
            )}
      </Segment>
    );
  }
}

const styles = {
  iframe:{
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



export default Beers;
