import Post from '@models/Post'
import '@/styles/styles.css'
import json from '@/assets/json'
import WebpackImage from '@/assets/icon-square-big'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'

import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
const post = new Post('Webpack post title', WebpackImage);
console.log(`post to strimg ${post.toString()}`);
console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);

