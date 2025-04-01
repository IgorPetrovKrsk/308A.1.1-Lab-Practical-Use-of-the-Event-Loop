let stackCounter = 0;

function stackOverflow() {
    stackCounter++;
    stackOverflow();
}

try {
    stackOverflow();
} catch (error) {
    console.error(`Stack counter before the overflow is ${stackCounter}`);
    console.error(Error);
}
