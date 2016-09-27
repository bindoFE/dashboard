import "../assets/css/theme/default.css";
import "../assets/css/style.min.css";
import "../assets/css/style-responsive.min.css";
import "../assets/css/animate.min.css";

import React from 'react'
import ReactDOM from 'react-dom'
import Route from './route'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Route/>, document.getElementById('target'))
})
