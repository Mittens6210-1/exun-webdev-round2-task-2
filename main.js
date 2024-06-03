function displayInputsContact() {
    // Getting form inputs
    var name = document.getElementById("cont-Name").value;
    var email = document.getElementById("cont-Email").value;
    var message = document.getElementById("cont-Message").value;

    var output = "Name: " + name + "\n";
    output += "Email: " + email + "\n"
    output += "Message: " + message + "\n"

    alert(output)
}

function displayInputsWaitlist() {
    // Getting form inputs
    var Email = document.getElementById("wait-Email").value;
    var Radio = document.querySelector('input[name="99"]:checked').value;

    var outpuT = "Email: " + Email + "\n";
    outpuT += "Notifications: " + Radio + "\n"

    alert(outpuT)
}