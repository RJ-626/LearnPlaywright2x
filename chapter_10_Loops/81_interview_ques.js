for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; //skip the current iteration and move to the next iteration of the loop
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break; //exit the loop immediately when the condition is met
    }
    console.log(i);
}