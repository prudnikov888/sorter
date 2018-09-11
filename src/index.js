class Sorter {

    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    at(index) {
        return this.elements[index];
    }

    get length() {
        return this.elements.length;
    }

    toArray() {
        return this.elements;
    }

    sort(indices) {
        let elementsToSort = [];
        for (let i = 0; i < indices.length; i++) {
            elementsToSort.push(this.at(indices[i]));
        }
        if (typeof (this.comparator) === 'function') {
            elementsToSort.sort(this.comparator);
        } else {
            elementsToSort.sort(ascendingComparator);
        }
        let ascendingIndices = indices.slice();
        ascendingIndices.sort(ascendingComparator);
        for (let i = 0; i < ascendingIndices.length; i++) {
            let index = ascendingIndices[i];
            this.elements[index] = elementsToSort[i];
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

function ascendingComparator(a, b) {
    return a - b;
}

module.exports = Sorter;