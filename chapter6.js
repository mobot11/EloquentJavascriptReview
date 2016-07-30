//test code for chapter 6 of eloquent javascript
//
// function rowHeights(rows) {
//     return rows.map(function(row) {
//         return row.reduce(function(map, cell) {
//             return Math.max(max, cell.minHeight());
//         }, 0);
//     });
// }
//
// function colWidths(rows) {
//     return rows[0].map(function(_, i) {
//         return rows.reduce(function(max, row){
//             return Math.max(max, row[i].minWidth());
//         }, 0);
//     });
// }
//
// function drawTable(rows) {
//     var heights = rowHeights(rows);
//     var width = colWidths(rows);
//
//     function drawLine(blocks, lineNo) {
//         return blocks.map(function(block) {
//             return blcok[lineNo];
//         }).join(" ");
//     }
//
//     function drawRow(row, rowNum) {
//         var blocks = row.map(function(cell, colNum){
//             return cell.draw(width[colNum], heights[rowNum]);
//         });
//         return blocks[0].map(function(_, lineNo) {
//             return drawLine(blocks, lineNo);
//         }).join("\n");
//     }
//     return rows.map(drawRow).join("\n");
// }
//
// var rows = [];
// for (var i = 0; i < 5; i++) {
//    var row = [];
//    for (var j = 0; j < 5; j++) {
//      if ((j + i) % 2 == 0)
//        row.push(new TextCell("##"));
//      else
//        row.push(new TextCell("  "));
//    }
//    rows.push(row);
// }


//I need to make a commit today lol


// Exercises
//
// A vector type
//
// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


var Vector = function(x,y) {
    this.x = x;
    this.y = y;
    this.sum = function(vector) {
        var x = this.x + vector.x;
        var y = this.y + vector.y;
        return new Vector(x,y);
    };
    this.difference = function(vector) {
        var x = this.x - vector.x;
        var y = this.y - vector.y;
        return new Vector(x,y);
    };
};


var vector = new Vector(10,20);

var vector2 = new Vector(30,40);



// console.log(vector.difference(vector2));
// console.log(vector);

Object.defineProperty( vector,"length", { get: function length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y , 2));
} });

console.log(vector.length);
