var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var lineIndex = 0
var numberOfDays = 0
var uncertainty = 0

rl.on('line', function (line) {
    // console.log('current line: ', line)
    // console.log('current lineIndex: ', lineIndex)
    if (lineIndex == 0) { // 1st line: # of days

        numberOfDays = parseInt(line)

    } else {

        if (numberOfDays == 1) {
            console.log(1)
            rl.close()
            return
        }

        const temps = line.split(' ').map(item => parseInt(item))

        for (var i = 1; i < temps.length; i++) {
            if (i == 1 && temps[i] < temps[0]) { // if 1st day's temp > 2nd day
                uncertainty += 1
            } else if (temps[i] > temps[i - 1] && temps[i] > temps[i + 1]) {
                uncertainty += 1
            } else if (i == temps.length - 1 && temps[i] > temps[i - 1]) { // if last day's temp > previous
                uncertainty += 1
            }
        }

        console.log(uncertainty)

        rl.close()

    }
    lineIndex += 1
})