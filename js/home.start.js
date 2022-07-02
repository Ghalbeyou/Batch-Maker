var ver = '1.0.0 ALPHA';
var name = document.getElementById('p_name').value;
var ele = document.getElementById('support')
const {shell} = require('electron');
document.getElementsByTagName('form')[0].addEventListener('submit', (e)=>{
    e.preventDefault()
    let lang = 'batchfile'
    // var project_dir = document.getElementById('p_di').value;
    var data = {
        name: name,
        lang,
        ver
    }
    localStorage.setItem('project', JSON.stringify(data))
    location.href = './project.html';
})
document.getElementById('support').addEventListener('click', ()=>{
    ele.disabled = true;
    let a = ele.innerHTML;
    ele.innerHTML = '<div class="spinner-border" role="status">\n<span class="visually-hidden">Loading...</span>\n</div>'
    shell.openExternal("https://github.com/ghalbeyou")
    setTimeout(() => {
        ele.disabled = false;
        ele.innerHTML = a
    }, 1200);
})
// ipc.on('selected-file', function (event, path) {

//     //do what you want with the path/file selected, for example:
//     document.getElementById('p_di').innerHTML = `${path}`
    
// });
document.getElementsByTagName('span')[1].innerHTML = ver
for (i=0; i < document.getElementsByTagName('button').length; i++){
    document.getElementsByTagName('button')[i].removeAttribute('id');
}
for (i=0; i < document.getElementsByTagName('p').length; i++){
    document.getElementsByTagName('p')[i].removeAttribute('id');
}
for (i=0; i < document.getElementsByTagName('input').length; i++){
    document.getElementsByTagName('input')[i].removeAttribute('id');
}
for (i=0; i < document.getElementsByTagName('span').length; i++){
    document.getElementsByTagName('span')[i].removeAttribute('id');
}
document.getElementById('buy_new').addEventListener('click', ()=>{
    shell.openExternal("https://github.com/ghalbeyou/batch-maker")
})