const password = document.getElementById("pwd");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitBtn = document.querySelector(".button");

let strengthValue = "";

password.addEventListener("input", function () {
    const pwdValue = password.value;

    const hasUpper = /[A-Z]/.test(pwdValue);
    const hasLower = /[a-z]/.test(pwdValue);
    const hasNumber = /[0-9]/.test(pwdValue);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwdValue);
    const isLong = pwdValue.length >= 8;

    let passedConditions = 0;
    if (hasUpper) passedConditions++;
    if (hasLower) passedConditions++;
    if (hasNumber) passedConditions++;
    if (hasSpecial) passedConditions++;
    if (isLong) passedConditions++;

    if (pwdValue.length === 0) {
        message.style.display = "none";
        strengthValue = "";
    } else {
        message.style.display = "block";
        if (passedConditions <= 2) {
            strengthValue = "Weak";
            strength.style.color = "red";
        } else if (passedConditions === 3 || passedConditions === 4) {
            strengthValue = "Medium";
            strength.style.color = "orange";
        } else if (passedConditions === 5) {
            strengthValue = "Strong";
            strength.style.color = "green";
        }
        strength.textContent = strengthValue;
    }
});

submitBtn.addEventListener("click", function () {
    const pwdValue = password.value;

    const hasUpper = /[A-Z]/.test(pwdValue);
    const hasLower = /[a-z]/.test(pwdValue);
    const hasNumber = /[0-9]/.test(pwdValue);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwdValue);

    if (pwdValue.length === 0) {
        confirm("❗ Please enter a password.");
        return;
    }

    if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
        confirm("❗ Password must include uppercase, lowercase, number, and special character.");
        return;
    }

    confirm(`✅ Password Entered: ${pwdValue}\n🔒 Strength: ${strengthValue}`);
});
