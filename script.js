let otp2 = '1234'
let otp = ''
function validate() {
    let num = document.getElementById('usr').value;
    let number = document.getElementById("con").value;
    number += num;
    if (Number(num) && num.length == 10) {
        nextPage(number);
    }
    else {
        document.getElementById("msg").innerHTML = "*Enter Valid Number"
    }
}

function nextPage(num) {
    let page2 = `<div class="container">
    <div class="head">
        <h3>Please verify phone number</h3>
        <p class="text-info">An OTP is sent to <strong class="text-dark">${num}</strong></p>
        <p class="text-primary"><button class="btn btn-link" onclick="reload()">Change Phone Number</button></p>
    </div>
</div>
<div class="container-fluid">
    <div class="inputfield2">
        <input type="text" class="form-control p-1" id="1" maxlength="1" onkeyup="change(id)">
        <input type="text" class="form-control p-1" id="2" maxlength="1" onkeyup="change(id)">
        <input type="text" class="form-control p-1" id="3" maxlength="1" onkeyup="change(id)">
        <input type="text" class="form-control p-1" id="4" maxlength="1" onkeyup="change(id)">
    </div>
    <div class="container msg">
        <label class="text-danger" id="msg"></label>
    </div>
    <div class="resend">
        <p class="text-secondary">Don't recieve the code?<button class="btn btn-link" onclick="resend()">Resend</button></p>
    </div>
    <div class="container button">
        <button type="button" class="btn btn-outline-primary" id="btn1" onclick="verifyOtp()">Verify</button>
    </div>
</div>`
    document.getElementById("page").innerHTML = page2;

}
function finalPage() {
    let page3 = `<div class="container">
    <div class="head">
        <h3>Wellcome To Admit Kard</h3>
        <p class="text-secondary">In order to provide you with<br>a custom experience</p>
        <p class="text-black">We need to ask you a few questions</p>
    </div>
</div>
<div class="container-fluid">
    <div class="container button">
        <button type="button" class="btn btn-outline-primary" id="btn1">Get Started</button>
    </div>
    <div class="container msg">
        <label class="text-info" id="msg">* This will take 5 min</label>
    </div>
</div>`
    document.getElementById("page").innerHTML = page3;
}

function change(id) {
    otp = document.getElementById(id).value;
    if (Number(otp)) {
        document.getElementById('msg').innerHTML = ""
        if (id < 4) {
            document.getElementById(Number(id) + 1).focus();
        }
        if (id == 4) {
            document.getElementById("btn1").setAttribute("class", "btn btn-outline-success")
        }
    }
    else if (otp == '') {
        if (id > 1) {
            document.getElementById(Number(id) - 1).focus();

        }
    }
    else {
        document.getElementById('msg').innerHTML = "Invalid Number"
    }
}

function verifyOtp() {
    otp = '';
    for (let i = 0; i < 4; i++) {
        otp += document.getElementById(i + 1).value;
    }
    if (otp == otp2) {
        finalPage()
    }
    else {
        document.getElementById('msg').innerHTML = "OTP doesn't Match"
    }
}
function reload() {
    location.reload();
}
function resend(){
    window.alert("OTP has been Sent");
}