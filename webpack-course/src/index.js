import Post from './Post'
import './styles/styles.css'
import json from './assets/json.json'
import WebpackImage from './assets/icon-square-big.png'
const post = new Post('Webpack post title', WebpackImage);
console.log(`post to strimg ${post.toString()}`);
console.log('JSON', json);