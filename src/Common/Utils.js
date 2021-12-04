export const addPieDivision = (element) => {
    let totalLength = element.length - 1;
    if (element.length > 6) {
        return element;
    }
    element.sort((a, b) => b - a);
    for (let i = 0; i < totalLength; i++) {
        element[i % totalLength] = element[i % totalLength] - 1;
    }
    element.push(totalLength);
    return element;
}

export const removePieDivision = (element) => {
    if (element.length > 1 && element.length <= 7) {
        let top = element.shift();
        element[0] = element[0] + top;
    }
    return element;
}