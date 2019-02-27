const fs = require('fs');

module.exports = {
    convertToJson: csv => {

        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(',');

        lines.map(function (line, indexLine) {
            if (indexLine < 1) return; // Jump header line

            let obj = {};
            let currentLine = line.replace(/(?:\\[rn*]|[\r\n*]+)+/g, '').split(",");

            headers.map(function (header, indexHeader) {
                obj[header] = currentLine[indexHeader];
            });

            result.push(obj)
        });

        result.pop(); // remove the last item because undefined values

        return result; // JavaScript object
    },

    sanitize: (path) => {

        return new Promise((resolve, reject) => {

            fs.readFile(path, 'utf8', function (err, contents) {

                let lines = contents.split('\n');

                //Remove the heterogeneous lines
                lines.splice(0, 3);

                //Prefix with sanitised header to simplify the JSON
                lines = ['month,meanMaximum,meanMinimum', ...lines];
                let sanitisedCSVContent = lines.join('\n');

                resolve(sanitisedCSVContent);

            });

        });

    },

};
