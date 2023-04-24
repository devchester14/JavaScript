//**Ternary operators */ 

const totalMarks = 84;

// totalMarks < 40 ? console.log('You need to work hard'): console.log('You passed')

const result = totalMarks < 40 ? `You need to work hard` : totalMarks < 60 ? `B grade` : totalMarks < 75 ? `A grade` : totalMarks < 85 ? `A+ Grade` : `Genius`;

console.log(result);