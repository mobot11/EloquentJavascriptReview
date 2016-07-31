//laying out a table

//build a program that given an array of arrays of table cells, builds up a string that contains a laid out table, columns are straight, rows are aligned

//builder function will ask each cell how wide and high it wants to be which determines width of columns and height of rows, we will then ask the cells to draw themselves the correct size and assemble results into a string

//layout program will communicate with cell objects

/*

minHeight() returns number indicating the minimun height cell requires in lines

minWidth() returns a number indicating cell's minimum width in characters

draw(width, height) returns an array of the length `height` which contains a series of strings each  `width` characters wide which represents the contents of each cell
*/
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
//compute arrays of mimum colum widths and row heihts for a grid of cells
//the rows variable will hold an array of arrays, with each inner array represnting a row of cells

//@param rows: contains an array of arrays, each inner array represents a row of cells

//return an array of row heights, one for each row.
function rowHeights(rows) {
    //transform each row
    return rows.map(function(row) {
        //reduce row to a single number, the height of the tallest cell
        return row.reduce(function(max, cell) {
            //return max or the height of current cell, whichever is larger.
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

//Returns array of mimimun column widths, one for each columns
function colWidths(rows) {
    //transform each column by looking at each cell in the first row of the table.
    //an underscore means the argument will not be used.
    return rows[0].map(function(_, i) {
        //reduce each column to a single number, the width of the widest column. Do this by returning max or the width of cell row[i], whichever is larger
        //By looking at row[i] in every row, you will be able to look at every cell in column i
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

//Given an array of rows, draws a table.

function drawTable(rows) {
    //Get an array of heights for each row.
    var heights = rowHeights(rows);
    //Get an array of widths for each column.
    var widths = colWidths(rows);

    function drawLine(blocks,lineNo) {
        //Get a particular line across all blocks in a row, joined by " ".
        return blocks.map(function(block){
            return block[lineNo];
        }).join(" ");
    }

    //Function for drawing a single row.

    function drawRow(row,rowNum) {
        //Turn a single row into blocks.
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        //For each line of content in a block, return a string that goes accross all blocks

        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
            //take each line of content, and join them into a single string separated by newlines. this is a full row.
        }).join("\n");
    }

    //Draw each row and join with newlines.
    return rows.map(drawRow).join("\n");
}

//repeat function that will be used in TextCell.prototype.draw to add padding.

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    //Split text into an array based on newlines.
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    // Get minWidth for each cell by checking the length of each line of content
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    //builds a cell with padding
    var result = [];
    for (var i = 0; i < height; i ++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};
//creates an array of rows where each row is an array of TextCell objects
var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for(var j = 0; j < 5; j++) {
        if ( (j+i) % 2 == 0) {
            row.push(new TextCell("##"));
        } else {
            row.push(new TextCell(" "));
        }
    }
    rows.push(row);
}
//Pass rows to drawTable to output checkerboard to the console.
console.log(drawTable(rows));

//The inner parameter is a TextCell object.
function UnderlinedCell(inner) {
    this.inner = inner;
}


UnderlinedCell.prototype.minWidth = function() {
    //minWidth works the same as it does for TextCell
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
//Add1 to account for the underline, which is just some dashes
        return this.inner.minHeight() + 1;
};


UnderlinedCell.prototype.draw = function(width, height) {
    //When drawing the inner cell, subtract 1 from height since the inner cell doesn't have dashes. and then add dashes
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {

    //Get keys from object. keys will be equal to ['name', 'height', 'country']
    var keys = Object.keys(data[0]);
    //Create an array of Underline Cell objects for each key
    var headers = keys.map(function(name) {
        return new UnderlinedCell (new TextCell(name));
    });
    // Build an array of TextCell objects for each mountain in data
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell (String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));






// Exercises
//
// A vector type
//
// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


var Vector = function(x, y) {
    this.x = x;
    this.y = y;
    this.sum = function(vector) {
        var x = this.x + vector.x;
        var y = this.y + vector.y;
        return new Vector(x, y);
    };
    this.difference = function(vector) {
        var x = this.x - vector.x;
        var y = this.y - vector.y;
        return new Vector(x, y);
    };
};


var vector = new Vector(10, 20);

var vector2 = new Vector(30, 40);



console.log(vector.difference(vector2));
console.log(vector);

Object.defineProperty(vector, "length", {
    get: function length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

console.log(vector.length);

// Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

function StretchedCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchedCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
};

StretchedCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
};

StretchedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
};

var sc = new StretchedCell(new TextCell("abc"), 1, 2);

// Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.
//
// When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.
//
// Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.

function interator() {

}


//
