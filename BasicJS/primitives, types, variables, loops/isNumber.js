let value = null;
do {
    const input = prompt('Say number');
    const isError = ((input == null) || (input == '') || isNaN(+input));
    // debugger
    isError ? 
        alert('Error') 
        : 
        value = input    
} while(value == null)