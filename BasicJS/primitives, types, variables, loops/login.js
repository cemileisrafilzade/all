const MSG_WHO_Q = 'Who?';
const MSG_PASS_Q = 'Pass?';
const MSG_WELCOME = 'Welcome';
const MSG_CANCELLED = 'Cancelled';
const MSG_DONT_KNOW = 'Dont know';
const MSG_WRONG_PASS = 'Wrong pass';

const who = prompt(MSG_WHO_Q);

if(who !== 'admin') {
    const isCancelled = who == null;
    alert(isCancelled ? MSG_CANCELLED : MSG_DONT_KNOW);
} else {

    const pass = prompt(MSG_PASS_Q);
    if(pass !== 'root') {
        const isCancelled = pass == null;
        alert(isCancelled ? MSG_CANCELLED : MSG_WRONG_PASS);
    } else {
        alert(MSG_WELCOME)
    }
}