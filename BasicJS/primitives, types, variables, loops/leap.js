const year = prompt('Say year');
alert(!(year % 400) || ( !!(year % 100) && !(year % 4)));