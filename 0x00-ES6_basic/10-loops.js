export default function appendToEachArrayValue(array, appendString) {
	for (var value in array) {
		const idx = array.indexOf(value);
		array[idx] = appendString + value;
	}

	return array;
}
