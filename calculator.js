const user = document.getElementById('user');
var exp = '';

function press(num){
    exp += num;
    user.value=exp;
}
function equal(){
    user.value=eval(exp);
    exp='';
}
function del(){
    exp ='';
    user.value = exp;
}
