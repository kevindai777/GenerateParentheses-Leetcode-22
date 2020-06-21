//Given an integer, return all of the possible combinations of valid parentheses
//using ().

let n = 3


//O() solution

let result = []
backtrack('', n, n)

function backtrack(temp, left, right) {
    if (left == 0 && right == 0) {
        result.push(temp)
        return
    }

    if (left > 0) {
        backtrack(temp + '(', left - 1, right)
    }

    if (right > left) {
        backtrack(temp + ')', left, right - 1)
    }
}

console.log(result)