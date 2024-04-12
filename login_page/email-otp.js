function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody =`<h1>Your OTP is </h1>${otp_val}`;
    Email.send({
        SecureToken :"1083d43c-d6c4-4b71-bb1c-a4ce5abf392c",
        To : email.value,
        From : "dhineshsurya0829@gmail.com",
        Subject : "email otp for verification",
        Body : emailbody
}).then(

    message => {
        if(message === "OK") {
            alert("OTP sent to your email " + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert("Email address verified...");
                }
                else {
                    alert("Invalid OTP");
                }
            })
        }
    }
);
}