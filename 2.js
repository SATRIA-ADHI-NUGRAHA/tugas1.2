const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (search, limit, callback) =>{
    const hrfkecil = name.map(hk => hk.toLowerCase())
    const data = hrfkecil.filter(a => a.includes(search))
    data.length = limit
    return callback(data)
} 
const callback = (data) => {
    return data
}

console.log(searchName('an',3,callback))

