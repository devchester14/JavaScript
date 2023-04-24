/**
 * Given a positive integer, N. Find the factorial of N.
 * 🚀🚀🚀🚀🚀
 * 🤩🤩🤩🤩
 * 🪐🪐🪐
 */

function factorial(n){
    let answer=1;
if(n==1 || n==0){
return 1
} else if(n>1) {
for (let i=n;i>=1;i--){
     answer*=i
}
return answer;
}
}