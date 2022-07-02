const { generateRandom } = require("../js/project.random");
const fs = require('fs')
const {shell} = require('electron');
const path = require("path");
var save = document.getElementById('test');
var package = document.getElementById('package');
var add = document.getElementById('add');
var code = document.getElementById('code')
var tit1 = document.getElementById('title')
var tit2 = document.getElementById('title2')
save.remove()
if (localStorage.getItem('project') == null){
    location.herf = './index.html'
    document.getElementsByTagName('body')[0].innerHTML = ""
}
tit1.innerHTML = `Project ${JSON.parse(localStorage.getItem('project')).name}`
tit2.innerHTML = `Project ${JSON.parse(localStorage.getItem('project')).name}`
function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}
package.addEventListener('click', ()=>{
    // download the file 
    const random = generateRandom(5)
    var a = "@echo off\ntitle Loading\necho THIS APP IS MADE IN BATCH MAKER FROM @GHALBEYOU IN GITHUB!\necho THIS TEXT AND THIS PART OF THE APP IS COPY RIGHT!\nping localhost -n 3 > nul\ncls\n" + code.innerHTML;
    fs.writeFileSync(`./public/${random}.bat`, a)
    download(`${random}.bat`, a)
    // remove file
    fs.unlinkSync(`./public/${random}.bat`)
})
function clearForm(){
    // remove value from inputs
    for(i=0; i < document.getElementsByTagName('input').length; i++){
        document.getElementsByTagName('input')[i].value = "";
    }
}
document.getElementById('tcae_exit').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\nexit`
    clearForm();
})
document.getElementById('tcae_title').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\ntitle ${document.getElementById('title_changed').value}`
    clearForm();

})
document.getElementById('tcae_color').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\ncolor ${document.getElementById('color').value}`
    clearForm();

})
document.getElementById('smawtf_msg').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\necho ${document.getElementById('s_msg').value}`

    clearForm();

})
document.getElementById('smawtf_ask').addEventListener('click', ()=>{
    let random = generateRandom(5)
    code.innerHTML = `${code.innerHTML}\nset /p ${random}=${document.getElementById('s_ask').value}`
    clearForm();

})
document.getElementById('smawtf_save').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\necho ${document.getElementById('s_f_c').value} > ${document.getElementById('s_f_n').value}`
    clearForm();
})
document.getElementById('custom_add').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\nstart ${document.getElementById('c_f').value}`
    clearForm();
})
document.getElementById('custom_set').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\nset ${document.getElementById('c_f_2').value}=${document.getElementById('c_f_1').value}`
    clearForm();
})
document.getElementById('add_pause').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\npause`
clearForm()
})
document.getElementById('tcacleare_exit').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\ncls`
    clearForm();
})