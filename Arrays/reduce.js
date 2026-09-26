function sum(...nums) {
    const sum = nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    console.log(sum);
}

sum(100, 200, 300, 400);