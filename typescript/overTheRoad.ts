function overTheRoad(address: number, n: number):number {
    const totalHouses = 2 * n;

    return totalHouses + 1 - address;


    // let leftHouse = [];
    // let rightHouse = [];
    // for(let i = 1; i <= totalHouses; i++) {
    //     if(i % 2 === 0) {
    //         rightHouse.push(i);
    //     } else {
    //         leftHouse.push(i);
    //     }
    // }
    // rightHouse = rightHouse.reverse();
    // if(rightHouse.includes(address)) {
    //     let index = rightHouse.findIndex((element) => element === address);
    //     return leftHouse[index];
    // }
    // else if (leftHouse.includes(address)) {
    //     let index = leftHouse.findIndex((element) => element === address);
    //     return rightHouse[index];
}

console.log(overTheRoad(1, 3)); // 6
console.log(overTheRoad(2, 3)); // 5
console.log(overTheRoad(3, 3)); // 4
console.log(overTheRoad(5,3)); //2