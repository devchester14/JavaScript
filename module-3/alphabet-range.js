/**
 * given to alphabets a and b, 
 * print the range of alphabets
 *  starting the first alphabet to end
 * 🙃🙃🙃🙃🙃
 */


let  alphabets = (a, b) => {
    let start=a.charCodeAt(a);
    let end = b.charCodeAt(b);
    let answer=""
    for( let i=start;i<=end;i++){
    answer+= String.fromCharCode(i)
    }
    return answer}
    
    let result = alphabets("b","e")
    console.log(typeof result)
    console.log(String(result))