document.addEventListener('DOMContentLoaded',() => {
const submit = document.querySelector('#submit');
const newtask = document.querySelector('#newTask');

submit.disabled = true;

newtask.onkeyup = () =>{
if(newtask.value.length > 0) {
    submit.disabled = false;
}
else{
    submit.disabled = true;
}
}
document.querySelector('form').onsubmit = () =>{
    const task = newtask.value;
    const li = document.createElement('li')
    li.innerHTML = task;
    document.querySelector('#tasks').append(li);
    newtask.value = '';
    submit.disabled = true;

    return false;

}
})