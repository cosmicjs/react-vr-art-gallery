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
import _ from 'lodash'
import Cosmic from 'cosmicjs'
const api = Cosmic()

// CONFIG
const bucket = api.bucket({
  slug: 'art' // Set to your Bucket slug
})

export default class WelcomeToVR extends React.Component {
  constructor() {
    super()
    this.state = {}
    bucket.getObjects().then(data => {
      const cosmic_objects = data.objects
      const paintings = _.filter(cosmic_objects, { type_slug: 'paintings' })
      const globals = _.keyBy(_.filter(cosmic_objects, { type_slug: 'globals' }), 'slug')
      this.setState({ 
        data: {
          globals,
          paintings
        }
      })
    }).catch(err => {
      throw err;
    })
  }
  render() {
    return (
      <View>
        <Pano source={asset(`panos/${this.state.data ? this.state.data.globals.realm.metadata.pano + '.jpg' : '' }`)}/>
        {
          this.state.data && this.state.data.paintings.length &&
          <View> 
            <Image
              source={{ uri: this.state.data.paintings[0].metadata.painting.imgix_url }}
              style={{
                position: 'absolute',
                layoutOrigin: [0.5, .5],
                height: 100,
                width: 160,
                transform: [{translate: [0, 0, -300]}],
              }}
            />
            <Image
              source={{ uri: this.state.data.paintings[1].metadata.painting.imgix_url }}
              style={{
                position: 'absolute',
                layoutOrigin: [0.5, .7],
                height: 200,
                width: 350,
                transform: [{translate: [0, 0, 950]}],
              }}
            />
          </View>
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
