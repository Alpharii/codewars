// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is 
// a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1


export class PaginationHelper {
    collection: number[];
    itemsPerPage: number;

    constructor(collection: number[], itemsPerPage: number) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex: number) {
        const totalPages = this.pageCount();
        if (pageIndex < 0 || pageIndex >= totalPages) {
            return -1;
        }

        if (pageIndex === totalPages - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    pageIndex(itemIndex: number) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}


const collection = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
]
const helper = new PaginationHelper(collection, 10)

console.log(helper.pageCount());
console.log(helper.itemCount())

console.log(helper.pageItemCount(1), 10, "pageItemCount(1)")
console.log(helper.pageItemCount(2), 4, "pageItemCount(2)")
console.log(helper.pageItemCount(3), -1, "pageItemCount(3)")

console.log(helper.pageIndex(40), -1, "pageIndex(40)");
console.log(helper.pageIndex(22), 2, "pageIndex(22)");
console.log(helper.pageIndex(3), 0, "pageIndex(3)");
console.log(helper.pageIndex(0), 0, "pageIndex(0)");
console.log(helper.pageIndex(-1), -1, "pageIndex(-1)");
console.log(helper.pageIndex(-23), -1, "pageIndex(-23)");
console.log(helper.pageIndex(-15), -1, "pageIndex(-15)");