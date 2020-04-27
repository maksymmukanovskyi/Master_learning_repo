import Post from '@models/Post'
import '@/styles/styles.css'
import json from '@/assets/json'
import WebpackImage from '@/assets/icon-square-big'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'
import React from 'react'
import {render} from 'react-dom'

import xml from '@/assets/data.xml'
// import csv from '@/assets/data.csv'
const post = new Post('Webpack post title', WebpackImage);
console.log(`post to strimg ${post.toString()}`);
console.log('JSON', json);
console.log('XML', xml);
// console.log('CSV', csv);

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr/>
        <div className="logo"/>
    

    <hr/>

    <div className="box">
        <h2>Less</h2>
    </div>

    <div className="card">
        <h2>SCSS</h2>
    </div>
    </div>
)

render(<App />, document.getElementById('app'))

