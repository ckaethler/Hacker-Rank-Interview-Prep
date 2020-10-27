// INPUT: number of steps, path as a string of U (up) and D (down)
// RETURNS: number of valleys
// valley: starts at sea level, dips down, ends at sea level
const CountingValleys = (stepsNum=0, pathStr="") => {
    let valleyCount = 0;
    let currentLevel = 0;

    for (let i = 0; i < pathStr.length; i++) {
        if (pathStr[i] === "D") currentLevel--;
        else if (pathStr[i] === "U") {
            currentLevel++;
            if (currentLevel === 0) valleyCount++;
        }
    }
    return valleyCount;
}

const exampleSteps = 8;
const examplePath = "UDDDUDUU";
const answer = 1;
console.log(answer, CountingValleys(exampleSteps, examplePath));