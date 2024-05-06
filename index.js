#! /usr/bin/env node
import inquirer from 'inquirer';
const { hours, minutes, seconds } = await inquirer.prompt([
    {
        type: 'number',
        name: 'hours',
        message: 'Enter the hours to countdown from:',
        validate: (input) => input >= 0,
    },
    {
        type: 'number',
        name: 'minutes',
        message: 'Enter the minutes to countdown from:',
        validate: (input) => input >= 0 && input < 60,
    },
    {
        type: 'number',
        name: 'seconds',
        message: 'Enter the seconds to countdown from:',
        validate: (input) => input >= 0 && input < 60,
    },
]);
const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;
countdown(totalMilliseconds);
function countdown(totalMilliseconds) {
    const startTime = Date.now();
    const endTime = startTime + totalMilliseconds;
    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = endTime - currentTime;
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            console.log('Countdown complete!');
        }
        else {
            const remainingSeconds = Math.ceil(remainingTime / 1000);
            console.log(`Time remaining: ${remainingSeconds} seconds`);
        }
    }, 1000);
}
