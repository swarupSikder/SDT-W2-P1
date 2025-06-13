const sortList = (list) => {
    list.sort((a,b)=> a - b);
    console.log(...list);
}

//implement
let list = [12, 5, 17, 3, 8, 20, 1, 14, 7, 11, 6, 4, 15, 2, 18, 10, 13, 19, 16, 9];
sortList(list);