const b = prompt('Say your browser');
// console.log(b);

if('Edge' == b) {
    alert('Edge');
} else if ('Safari' == b || 'Chrome' == b || 'Firefox' == b || 'Opera' == b) {
    alert('Supported')
} else {
    alert('We hope its work')
}

