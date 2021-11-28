function findMatching(drivers, string) {
    const result = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driver => driver[0].toUpperCase() === string[0].toUpperCase())
    return result;
}

function matchName(drivers, string) {
    const result = drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase())
    return result;
}