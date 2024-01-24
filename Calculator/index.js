let input = '';

function addElements(element) {
    input += element;
    document.getElementById('result').innerText = input;
    input = input.slice(0,14);
}

function removeElement(){
    input = input.slice(0,-1);
    document.getElementById('result').innerText = input;
    if(input == ''){
        document.getElementById('result').innerText = '0';
    }
}

function performEvaluation() {
    try {
        let result = eval(input);
        document.getElementById('result').innerText = result;
        input = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';

        setTimeout(function(){ resetCalci();} ,2000);
    }

}

function resetCalci(){
    document.getElementById('result').innerText = '0';
    input='';
}