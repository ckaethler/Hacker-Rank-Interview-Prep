const minimumBribes = (q) => {
    let totalBribes = 0;
    for (let i = 0; i < q.length; i++) {
        const sticker = q[i], originalIndex = sticker - 1, newIndex = i;
        const bribes = originalIndex - newIndex;

        if (bribes > 2) {
            console.log("Too chaotic");
            return;
        }
        else if (bribes > 0 && bribes <= 2) totalBribes += bribes;
        // else if (bribes )
    }
    console.log(totalBribes);
}

const exampleQueue_1 = [2, 1, 5, 3, 4];
const exampleQueue_2 = [2, 5, 1, 3, 4];
minimumBribes(exampleQueue_1);
minimumBribes(exampleQueue_2);