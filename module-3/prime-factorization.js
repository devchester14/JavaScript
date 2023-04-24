/**
 * Given a number N find the prime factorization of the number.
 * 2,3,5,7
 */

function   printPrimeFactorization(n) {
    // write your code here
    let ans="";
    let i=2;
    while(i<=n){
        if(n%i===0){
            ans+=String(i)+" ";
            n=Number(n/i);
            i=2;
        }
        else{i++}
    }
    console.log(ans)
    
}