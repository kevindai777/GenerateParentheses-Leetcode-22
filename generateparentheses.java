//Java Solution

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        
        backtrack("", result, n, n);
        return result;
    }
    
    public void backtrack(String temp, List<String> result, int left, int right) {
        if (left == 0 && right == 0) {
            result.add(temp);
            return;
        }
        
        if (left > 0) {
            backtrack(temp + "(", result, left - 1, right);
        }
        
        if (right > left) {
            backtrack(temp + ")", result, left, right - 1);
        }
    }
}