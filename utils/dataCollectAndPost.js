const fs = require('fs');


// console.log(data)

module.exports.getOldData = () => {
    const data = JSON.parse(fs.readFileSync('data.json'))
    return data
}

module.exports.postAData = (data) => {
    const dataStringify = JSON.stringify(data)
    return fs.writeFileSync('data.json', dataStringify)
}

