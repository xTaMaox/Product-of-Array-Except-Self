function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(1);
  const numsLen: number = nums.length;
  const curr: number[] = Array(2).fill(1);
  for (let i: number = 1; i < numsLen; i++) {
    curr[0] *= nums[i - 1];
    curr[1] *= nums[numsLen - i];
    result[i] *= curr[0];
    result[numsLen - i - 1] *= curr[1];
  }
  return result;
}
