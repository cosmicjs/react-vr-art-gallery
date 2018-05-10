# React VR Art Gallery
![React VR Art Gallery](https://cosmic-s3.imgix.net/8918a6e0-5493-11e8-8abf-afb1f600df25-react-vr-art-gallery.png?w=2000)

A [React VR](https://facebook.github.io/react-360/) app with content managed by the [Cosmic JS API](https://cosmicjs.com).

## Installation
```
git clone https://github.com/cosmicjs/react-vr-art-gallery
cd react-vr-art-gallery
npm i
npm start
```
This connects to a demo Bucket.  To connect to your own Bucket follow the steps below:

### Connect to your Bucket
1. [Go to Cosmic JS](https://cosmicjs.com) and import the included `bucket.json` file in this repo by going to Your Bucket > Settings > Import / Export.
2. Go into the `index.vr.js` file, find the config and set it to your Bucket slug.
3. Start the app connected to your Bucket:
```
npm start
```
4. Play with the VR experience in the browser at http://localhost:8081/vr
