const fs = require('fs')


const saveToDatabase = (db)=>{
    fs.writeFileSync('./src/db/db.json',JSON.stringify(db,null,2),{
        encoding:"utf8",
    })
}

module.exports = {saveToDatabase}