var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let maxLenFriend = friends[0];

friends.map(friend=> {
    if(maxLenFriend.length < friend.length){
        maxLenFriend = friend;
    }
})

console.log(maxLenFriend);