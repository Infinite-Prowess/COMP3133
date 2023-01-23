const csv = require('csv-parser')
const fs = require('fs')

fs.unlink('canada.txt', function (e) {
    if (e) return console.log(e)
    console.log('canada.txt has been deleted')
})

fs.unlink('usa.txt', function (e) {
    if (e) return console.log(e)
    console.log('use.txt has been deleted')
})

function filterData(country, callback) {
    const result = []
    fs.createReadStream('input_countries.csv')
        .pipe(csv())
        .on('data', (row) => {
            const headers = Object.keys(row)

            if (row[headers[0]] === country)
                result.push(row)
        })
        .on('end', () => {
            callback(result)
            console.log(`${country}.txt has been processed`)
        })
}

filterData("Canada", canadaCallback)
filterData("United States", usaCallback)

function canadaCallback(result) {

    var csv = result.map(function (d) {
        return JSON.stringify(Object.values(d))
    }).join('\n').replace(/(^\[)|(\]$)/mg, '')

    fs.writeFileSync('canada.txt', '"country","year","population" \n')
    fs.writeFileSync('canada.txt', csv, { flag: 'a' })
}

function usaCallback(result) {
    var csv = result.map(function (d) {
        return JSON.stringify(Object.values(d))
    }).join('\n').replace(/(^\[)|(\]$)/mg, '')
    fs.writeFileSync('usa.txt', '"country","year","population" \n')
    fs.writeFileSync('usa.txt', csv, { flag: 'a' })
}