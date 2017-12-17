import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  VrButton
} from 'react-vr';
import Cosmic from 'cosmicjs'

export default class WelcomeToVR extends React.Component {
  constructor() {
    super()
    this.state = {}
    Cosmic.getObjectsByType({ bucket: { slug: 'art' }}, { type_slug: 'paintings' }, (err, res) => {
      this.setState({ cosmic: res })
    })
  }
  handlePaintingClick(painting) {
    this.setState({ ...this.state, content: painting.content })
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {
          this.state.cosmic && this.state.cosmic.objects.all &&
          [
            <VrButton
              key={ 1 }
              style={{width: 0.7}}
              onClick={ ()=> this.handlePaintingClick(this.state.cosmic.objects.all[0])}>
              <Image
                source={{ uri: this.state.cosmic.objects.all[0].metadata.painting.imgix_url }}
                style={{
                  position: 'absolute',
                  layoutOrigin: [0.5, .5],
                  height: 100,
                  width: 160,
                  transform: [{translate: [0, 0, -300]}],
                }}
              />
            </VrButton>,
            <VrButton
              key={ 2 }
              style={{width: 0.7}}
              onClick={ ()=> this.handlePaintingClick(this.state.cosmic.objects.all[1])}>
              <Image
                source={{ uri: this.state.cosmic.objects.all[1].metadata.painting.imgix_url }}
                style={{
                  position: 'absolute',
                  layoutOrigin: [0.5, .7],
                  height: 200,
                  width: 350,
                  transform: [{translate: [0, 0, 950]}],
                }}
              />
            </VrButton>
          ]
        }
        {
          this.state.content &&
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}
            dangerouslySetInnerHTML={{ __html: this.state.content }}>
          </Text>
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
