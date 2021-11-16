import { Friend } from "./friend";

let friends: Friend[] = [
    new Friend("Todd", 22, "Todd@gmail.com", true),
    new Friend("Frank", 25, "Frank@gmail.com", false),
    new Friend("Mark", 32, "Mark@gmail.com", false),
    new Friend("Mike", 54, "Mike@gmail.com", false),
    new Friend("Andy", 82, "Andy@gmail.com", false)
];

console.log(Friend.printHeader());
for(let friend of friends) {
    console.log(friend.print())
}