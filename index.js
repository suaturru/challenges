function getMaxPossibleProductFromThreeElementsInArray(array) {
    const maximumProductInArray = (array) => {
            let result = array[0];

            for (let i = 1; i < array.length; i++) {
                if ((array[i] * result) > result) result = array[i] * result;
            }

            return result;
        },
        getNBiggestElementOfArray = (array, n) => array.sort((a, b) => b - a).slice(0, n),
        isAnArrayOfIntegers = (array) => array && Array.isArray(array) && !array.some(i => !Number.isInteger(i)),
        commonErrorMessage = "Parameter must be an Array of integers...";

    try {
        if (isAnArrayOfIntegers(array)) {
            return array.length ? maximumProductInArray(getNBiggestElementOfArray(array, 3)) : 0;
        } else {
            console.log(commonErrorMessage);
        }
    } catch (e) {
        console.log(e.message);
    }
}
