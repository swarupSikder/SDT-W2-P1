let list2 = [];
for (let index = 1; index <= 50; index++) {
    list2.push(index);
}

const findThreeFiveDivisible = (list) => {
    const new_list = list.filter(item=> item%3===0 && item%5===0);
    return new_list;
}

list2 = findThreeFiveDivisible(list2);

console.log(...list2);