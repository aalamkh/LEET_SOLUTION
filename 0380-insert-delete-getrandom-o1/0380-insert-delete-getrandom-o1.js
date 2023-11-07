class RandomizedSet {
    constructor() {
        this.data = new Map(); // A Map to store values and their indices
        this.values = []; // An array to store the actual values
    }

    // Insert operation
    insert(val) {
        // If the value is already in the map, return false (it's a duplicate).
        if (this.data.has(val)) {
            return false;
        }

        // Add the value to the end of the array and store its index in the map.
        this.data.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    // Delete operation
    remove(val) {
        // If the value is not in the map, return false (it doesn't exist).
        if (!this.data.has(val)) {
            return false;
        }

        // Get the index of the value in the array.
        const index = this.data.get(val);

        // Replace the value at the index with the last value in the array.
        // This allows for O(1) removal since you're working at the end of the array.
        const lastValue = this.values[this.values.length - 1];
        this.values[index] = lastValue;
        this.values.pop(); // Remove the last value from the array.

        // Update the index of the last value in the map to the new index.
        this.data.set(lastValue, index);

        // Delete the value from the map.
        this.data.delete(val);
        return true;
    }

    // GetRandom operation
    getRandom() {
        // Generate a random index within the array length.
        const randomIndex = Math.floor(Math.random() * this.values.length);

        // Return the value at the random index.
        return this.values[randomIndex];
    }
}
