//Given an integer, return all of the possible combinations of valid parentheses
//using ().

let n = 3


//O(4^n/sqrt(n)) solution

let result = []
backtrack('', n, n)

function backtrack(temp, left, right) {
    //Once all parentheses are used up...
    if (left == 0 && right == 0) {
        result.push(temp)
        return
    }

    //Use up one set of parentheses
    if (left > 0) {
        backtrack(temp + '(', left - 1, right)
    }

    //Then use up the other set
    if (right > left) {
        backtrack(temp + ')', left, right - 1)
    }
}

return result
