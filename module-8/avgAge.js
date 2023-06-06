const family = [
    {
        name:"a",
        age:42,
    },
    {
        name:"b",
        age:52,
    },
    {
        name:"c",
        age:2,
    },
    {
        name:"d",
        age:12,
    },
]

const result = family.reduce((acc,cur)=>acc+cur.age,0)
console.log(result/family.length);