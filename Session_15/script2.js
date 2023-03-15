/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but contains one "needle".
After your function finds the needle it should return a message (as a string) that says: 
"found the needle at position " plus the index it found the needle.

Test Case(Input --> Output)  
["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"] --> "found the needle at position 5"
*/

function findNeedle(array){
if (array.includes("needle")){
    return `found the needle at position ${array.indexOf("needle")}`;
} else {
    return "needle was not found";
}
}

const randomJunk = ["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"];

console.log(findNeedle(randomJunk));
