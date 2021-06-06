function showparagraph1(){
    var input1 = [];
    for (var j = 1; j <= 6; j++) 
    {
        input1.push(document.getElementById("para1_text_input"+j).value);
        document.getElementById("para1").innerHTML = input1.join(". ");
    }

}

function showparagraph2(){
    var input2 = [];
    for (var j = 1; j <= 6; j++) 
    {
        input2.push(document.getElementById("para2_text_input"+j).value);
        document.getElementById("para2").innerHTML = input2.join(". ");
    }

}