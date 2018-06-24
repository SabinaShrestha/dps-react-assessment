import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Image } from 'semantic-ui-react';

class Beer extends Component {
  state = { beer: [] }

  componentDidMount() {
    axios.get(`/api/beer/${this.props.match.params.name}`)
      .then( res => {
        this.setState({ beer: res.data.entries[0] })
      })
      .catch( error => {
        console.log(error.response);
      });
  }

  render() {
    const { beer } = this.state
    return (
        <Card>
              <Card.Header>
                {beer.name}
              </Card.Header>
              <Card.Meta>
                Alcohol By Volume: {beer.abv}
              </Card.Meta>
              <Card.Content>
                Category: {beer.style.category.name}
              </Card.Content>
              <Card.Content>
                description: {beer.description}
              </Card.Content>
              <Card.Content>
                style: {beer.style.name}
              <br />
              <br />
                {beer.style.description}
              </Card.Content>
              <Card.Content extra>
                Organic: {beer.is_organic}
              </Card.Content>
            </Card>
    );
  }
}

export default Beer;
