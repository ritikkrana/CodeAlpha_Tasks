function addRecipe() {
    let name = document.getElementById("inp1").value;
    let ingredients = document.getElementById("textArea1").value;
    let method = document.getElementById("textArea2").value;

    if (document.getElementById("result1").style.display != "block") {
        document.getElementById("result1").style.display = "block";
        document.querySelector("#result1>p").innerHTML = name;
        document.querySelector("#myDiv1").innerHTML = ingredients;
        document.querySelector("#meth1").innerHTML = method;
    }
    else if (document.getElementById("result2").style.display != "block") {
        document.querySelector("#result2>p").innerHTML = name;
        document.getElementById("result2").style.display = "block";
        document.querySelector("#result2>p").innerHTML = name;
        document.querySelector("#myDiv2").innerHTML = ingredients;
        document.querySelector("#meth2").innerHTML = method;
    }
    else if (document.getElementById("result3").style.display != "block") {
        document.querySelector("#result3>p").innerHTML = name;
        document.getElementById("result3").style.display = "block"
        document.querySelector("#result3>p").innerHTML = name;
        document.querySelector("#myDiv3").innerHTML = ingredients;
        document.querySelector("#meth3").innerHTML = method;
    }
    else if (document.getElementById("result4").style.display != "block") {
        document.querySelector("#result4>p").innerHTML = name;
        document.getElementById("result4").style.display = "block";
        document.querySelector("#result4>p").innerHTML = name;
        document.querySelector("#myDiv4").innerHTML = ingredients;
        document.querySelector("#meth4").innerHTML = method;
    }
    else if (document.getElementById("result5").style.display != "block") {
        document.querySelector("#result5>p").innerHTML = name;
        document.getElementById("result5").style.display = "block";
        document.querySelector("#result5>p").innerHTML = name;
        document.querySelector("#myDiv5").innerHTML = ingredients;
        document.querySelector("#meth5").innerHTML = method;
    }
    else if (document.getElementById("result6").style.display != "block") {
        document.querySelector("#result6>p").innerHTML = name;
        document.getElementById("result6").style.display = "block";
        document.querySelector("#result6>p").innerHTML = name;
        document.querySelector("#myDiv6").innerHTML = ingredients;
        document.querySelector("#meth6").innerHTML = method;
    }
    else {
        alert("Space is full, please delete some items first !!")
    }
    
    resetRecipe();
}
function resetRecipe() {
    document.getElementById("inp1").value = "";
    document.getElementById("textArea1").value = "";
    document.getElementById("textArea2").value = "";
}

// View Functions Start
function view1() {
    if (document.getElementById("result1").style.display == "block") {
        document.getElementById("result1").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv1").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth1").innerHTML
}
function view2() {
    if (document.getElementById("result2").style.display == "block") {
        document.getElementById("result2").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv2").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth2").innerHTML
}
function view3() {
    if (document.getElementById("result3").style.display == "block") {
        document.getElementById("result3").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv3").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth3").innerHTML
}
function view4() {
    if (document.getElementById("result4").style.display == "block") {
        document.getElementById("result4").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv4").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth4").innerHTML
}
function view5() {
    if (document.getElementById("result5").style.display == "block") {
        document.getElementById("result5").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv5").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth5").innerHTML
}
function view6() {
    if (document.getElementById("result6").style.display == "block") {
        document.getElementById("result6").style.visibility = "hidden";
    }
    document.getElementById("showBroad1").style.display = "block";
    document.getElementById("textArea3").value = document.querySelector("#myDiv6").innerHTML
    document.getElementById("textArea4").value = document.querySelector("#meth6").innerHTML
}
// View Functions End

// Close Function Start
function closeBTN() {
    if (document.getElementById("result1").style.visibility = "hidden") {
        document.getElementById("result1").style.visibility = "visible";
    }
    if (document.getElementById("result2").style.visibility = "hidden") {
        document.getElementById("result2").style.visibility = "visible";
    }
    if (document.getElementById("result3").style.visibility = "hidden") {
        document.getElementById("result3").style.visibility = "visible";
    }
    if (document.getElementById("result4").style.visibility = "hidden") {
        document.getElementById("result4").style.visibility = "visible";
    }
    if (document.getElementById("result5").style.visibility = "hidden") {
        document.getElementById("result5").style.visibility = "visible";
    }
    if (document.getElementById("result6").style.visibility = "hidden") {
        document.getElementById("result6").style.visibility = "visible";
    }

    document.getElementById("showBroad1").style.display = "none";
}
// Close Function End

// Edit Functions Start
function edit1() {
    document.getElementById("inp1").value = document.querySelector("#result1>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv1").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth1").innerHTML;
}
function edit2() {
    document.getElementById("inp1").value = document.querySelector("#result2>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv2").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth2").innerHTML;
}
function edit3() {
    document.getElementById("inp1").value = document.querySelector("#result3>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv3").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth3").innerHTML;
}
function edit4() {
    document.getElementById("inp1").value = document.querySelector("#result4>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv4").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth4").innerHTML;
}
function edit5() {
    document.getElementById("inp1").value = document.querySelector("#result5>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv5").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth5").innerHTML;
}
function edit6() {
    document.getElementById("inp1").value = document.querySelector("#result6>p").innerHTML;
    document.getElementById("textArea1").value = document.querySelector("#myDiv6").innerHTML;
    document.getElementById("textArea2").value = document.querySelector("#meth6").innerHTML;
}
// Edit Functions End

// Delete Functions Start
function delete1(){
    document.getElementById("result1").style.display = "none";
    resetRecipe();
}
function delete2(){
    document.getElementById("result2").style.display = "none";
    resetRecipe();
}
function delete3(){
    document.getElementById("result3").style.display = "none";
    resetRecipe();
}
function delete4(){
    document.getElementById("result4").style.display = "none";
    resetRecipe();
}
function delete5(){
    document.getElementById("result5").style.display = "none";
    resetRecipe();
}
function delete6(){
    document.getElementById("result6").style.display = "none";
    resetRecipe();
}
// Delete Functions End