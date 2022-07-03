// const {generateID} = require('../js/project.random')
try{
    const fs = require('fs')
  } catch (e){
    document.getElementsByTagName('body')[0].innerHTML = "<div class=\"alert alert-danger\">This isn't gonna work in browser!</div>"
  }
  document.getElementsByTagName('body')[0].addEventListener('selectstart', (e)=>{
    e.preventDefault();
    return false;
})
let errors = [
    'Bootstrap doesn\'t load up!',
    'Tailwind css won\'t work!',
    'The class isn\'t exists!',
    'Cannot connect to api to buy!',
    'Network error!',
    'Server doesn\'t open!'
]
setInterval(() => {
    console.log('%cPlease don\'t enter anythink here', 'color: red; font-size: 20px;');
    console.log('%cPlease don\'t enter anythink here', 'color: red; font-size: 20px;');
    console.log('%cPlease don\'t enter anythink here', 'color: red; font-size: 20px;');
    console.log('%cPlease don\'t enter anythink here', 'color: red; font-size: 20px;');

}, 1500);
setInterval(() => {
    console.warn('%cWarning!\n', 'font-size:20px;', errors[Math.floor(Math.random() * errors.length)])
}, 1000);
setInterval(() => {
    console.warn('%cWarning!\n', 'font-size:20px;', errors[Math.floor(Math.random() * errors.length)])
}, 1000/2);

// exports.your_id = generateID()