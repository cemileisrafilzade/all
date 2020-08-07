const phone = document.getElementById('phone');
const link = document.getElementById('link');

link.addEventListener('click', (e) => e.preventDefault())

phone.onkeydown = function (event) {
    console.log(event.key);
    if (!checkPhoneKey(event.key)) {
        event.preventDefault();
    }
}

    function checkPhoneKey(key) {
        return (key >= '0' && key <= '9') || key == '+' || key == '-' || key == '(' || key == ')';
    }