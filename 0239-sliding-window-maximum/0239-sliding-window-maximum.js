const maxSlidingWindow = (nums, k) => {
    const maxValues = [];
    const deque = [];

    // Iterate over the input array
    for (let i = 0; i < nums.length; i++) {
        // Remove the indices of elements that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove the indices of elements that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the index of the current element to the deque
        deque.push(i);

        // If the window is full, add the maximum value to the result array
        if (i >= k - 1) {
            maxValues.push(nums[deque[0]]);
        }
    }

    return maxValues;
};