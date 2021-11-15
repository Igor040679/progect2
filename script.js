
class MyInputControler{
    constructor(addBtn, list){
        this.addBtn = addBtn;
        this.list = list;
    }
    
addMyInputTo(parentEl){
    const myDiv = document.createElement('div');
    myDiv.innerHTML = ` <input type="text" id="MyInput" class="inp">
    <div class="close"></div>`;
    myDiv.classList.add('input');
    this.setDeletListener(myDiv);
    parentEl.append(myDiv);
    myDiv.querySelector('input').focus();
    
}

setDeletListener(el){
    el.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target.classList.contains('close')){
           e.stopPropagation();
           if(this.list.querySelectorAll('.input').length == 1) el.querySelector('input').value = '';
           else el.remove();
        }
    });
}
init(){
    this.addMyInputTo(this.list);
    this.addBtn.addEventListener('click', (e)=>{
    this.addMyInputTo(this.list)});
}
}
const inputControler = new MyInputControler(btn, list);
const start = function(){
    inputControler.init();
}();

let dir = 1;
function setListenerFromSort(btn){
    btn.addEventListener('click', (e) => {
        let arr = getMyInputsArr()
        dir = -dir
        let sorted = mySort(arr,dir)
        rerender(sorted, list) 
        changeBtnIcon()
    })
}
function getMyInputsArr(){
    let nodeList = list.querySelectorAll('.input')
    let arr = [].slice.call(nodeList);
    return arr;
    
}
function mySort(arr,direction){
    const resArr = [...arr];
    resArr.sort((a,b) => {
    if(a.querySelector('input').value > b.querySelector('input').value) return direction;
    return -direction;
    })
    return resArr;
}

function rerender(arr, list){
    list.innerHTML = '';
    arr.forEach((element) => {
        list.append(element)
    })
}
function changeBtnIcon(){
    sortBtn.classList.toggle('sortUp')
    sortBtn.classList.toggle('sortDown')
}
function init(){
    setListenerFromSort(sortBtn)
}

init()

















