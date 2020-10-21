


function textColoring(string) {
    var colors = ["\x1b[31m","\x1b[32m","\x1b[33m","\x1b[34m","\x1b[35m","\x1b[36m","\x1b[37m", "\x1b[37m", "\x1b[41m", "\x1b[42m", "\x1b[40m"];
    var reset = "\x1b[0m";
    var output = "";
    for(let i = 0; i < string.length; i++) {
        output +=  colors[i % colors.length] + string[i] +  reset;
       
    }
    console.log(output);
}
module.exports = textColoring;
// textColoring("Hi Verden!")