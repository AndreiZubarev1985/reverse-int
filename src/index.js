module.exports = function reverse (n) {
    if(n > 0) {
        let value = String(n);
        let result = value.split('').reverse().join(''); 
        return +result;
    } else {
        let value = String(n);
        let res = value.split('');
        res.splice(0, 1);
        let finalResult = res.reverse().join('');
        return +finalResult;
    }
    
}
