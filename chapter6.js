//test code for chapter 6 of eloquent javascript

function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(map, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row){
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var width = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return blcok[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum){
            return cell.draw(width[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }
    return rows.map(drawRow).join("\n");
}

var rows = [];
for (var i = 0; i < 5; i++) {
   var row = [];
   for (var j = 0; j < 5; j++) {
     if ((j + i) % 2 == 0)
       row.push(new TextCell("##"));
     else
       row.push(new TextCell("  "));
   }
   rows.push(row);
}


//I need to make a commit today lol


//Excersize 1 I litterally just want karma

function deepEqual(obj) {
    console.log('yolo');
    console.log('swag');
}
