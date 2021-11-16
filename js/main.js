"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends = [
    new friend_1.Friend("Todd", 22, "Todd@gmail.com", true),
    new friend_1.Friend("Frank", 25, "Frank@gmail.com", false),
    new friend_1.Friend("Mark", 32, "Mark@gmail.com", false),
    new friend_1.Friend("Mike", 54, "Mike@gmail.com", false),
    new friend_1.Friend("Andy", 82, "Andy@gmail.com", false)
];
console.log(friend_1.Friend.printHeader());
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log(friend.print());
}
