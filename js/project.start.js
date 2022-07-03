const { generateRandom } = require("../js/project.random");
const fs = require('fs')
// const {shell} = require('electron');
// const path = require("path");
var save = document.getElementById('test');
var package = document.getElementById('package');
// var add = document.getElementById('add');
var code = document.getElementById('code')
// var tit1 = document.getElementById('title')
// var tit2 = document.getElementById('title2')
if (localStorage.getItem('project') == null){
    location.herf = './index.html'
    document.getElementsByTagName('body')[0].innerHTML = ""
}
document.getElementById('title').innerHTML = `Project ${JSON.parse(localStorage.getItem('project')).name}`
document.getElementById('title_2').innerHTML = `Project ${JSON.parse(localStorage.getItem('project')).name}`
save.addEventListener('click', ()=>{
    sweetAlert.fire({
        icon: 'question',
        title: 'Remove Line',
        text: 'Enter the line number you want to remove',
        input: 'number',
        inputattributes: {
            min: 2,
        },
        inputPlaceholder: 'Line Number',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            // find that line in textarea and delete it
            var text = code.innerHTML;
            var lines = text.split('\n');
            lines.splice(result.value-1, 1);
            code.innerHTML = lines.join('\n');
            clearForm();
        }
      })
})
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
    // hey you! yes you, i need you're help for hiding modal
    // thx!
    // document.getElementsByClassName('modal-backdrop fade show')[0].className.replace('show', 'hide')
    // document.getElementsByClassName('modal fade show')[0].className.replace('show', 'hide')
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
document.getElementById('loop_create').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\n:${document.getElementById('loop_name').value}`
    clearForm()
})
document.getElementById('goto_loop').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\ngoto :${document.getElementById('loop_name_1').value}`
    clearForm()
})
document.getElementById('create_wait').addEventListener('click', ()=>{
    code.innerHTML = `${code.innerHTML}\nping localhost -n ${document.getElementById('c_f_5').value} > nul`
    clearForm()
})