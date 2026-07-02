class GetDataStorage<T> {
    private data: T[] = [];


    addItem(item: T): void {
        this.data.push(item);
    }
    getFirst(): T {
        return this.data[0]!;
    }
    getAll(): T[] {
        return this.data;
    }

    count(): number {
        return this.data.length;
    }
}

let statuscodeStore = new GetDataStorage<number>();
statuscodeStore.addItem(200);
statuscodeStore.addItem(404);
statuscodeStore.addItem(500);

let testScoreStore = new GetDataStorage<string>();
testScoreStore.addItem("A");
testScoreStore.addItem("B");
testScoreStore.addItem("C");

console.log("First Status Code:", statuscodeStore.getFirst());
console.log("All Status Codes:", statuscodeStore.getAll());
console.log("Total Status Codes:", statuscodeStore.count());
