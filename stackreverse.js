// Q1 reverse the string s reverse the word of order 

// "the sky is blue" => "blue is the sky"

//  "a good   example"  "example a good"

const reverseStr = function(s){
    const splits = s.split(" ")
    const stack = []

    for(let i of splits){
        stack.push(i)
    }

    let finals = ""
    while(stack.length){
        const current = stack.pop()

        if(current){
        finals+= " "+current
        }   
    }
    return finals.trim()
}

// console.log( reverseStr("the sky is blue"))
console.log( reverseStr("a good    example"))