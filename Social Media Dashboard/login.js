function runsubmit(event) {
    event.preventDefault(); 

    let username = document.getElementById("uname").value;
    let password = document.getElementById("psw").value;
    if(username === "Ritik Rana" && password === "98765"){
        window.location.href = "index.html";
        document.getElementById("uname").value = "";
        document.getElementById("psw").value = "";
    }
    else{
        alert("Please enter valid details !!");
        document.getElementById("uname").value = "";
        document.getElementById("psw").value = "";
    }
}