function createIssue(event) {
    event.preventDefault();

    let name = document.getElementById("issueName").value;
    let desc = document.getElementById("issueDscrptn").value;

    // Displaying Created Issues 
    if (name && desc) {
        let createdIssuesBox = document.getElementById("createdIssuesBox");

        let createDiv = document.createElement("div");

        let createh4 = document.createElement("h4");
        createh4.style = "display : inline-block; margin-bottom : 0px";
        createh4.textContent = "> " + name ;

        let createPara = document.createElement("p");
        createPara.style = "display : inline-block; margin-left : 10px; margin-top: 0px";
        createPara.textContent = desc;

        createDiv.appendChild(createh4);
        createDiv.appendChild(createPara);

        createdIssuesBox.appendChild(createDiv);

        document.getElementById("form").reset();
        alert("Created Successfully");
    }
    else{
        alert("Please provide complete details");
    }

}