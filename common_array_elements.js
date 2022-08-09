let longestCommonPrefix = function(string) {
    let prefix = string.reduce((acc, string) => string.length < acc.length ? string : acc);
    for(let strs of string) {
        while (strs.slice(0, prefix.length) != prefix) {
          prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}

const arr = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr))