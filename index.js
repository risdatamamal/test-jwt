const jwt = require('jsonwebtoken')

const JWT_SECRET = 'englishlearner123'

// create basic token dengan proses syncronous
const token = jwt.sign({ 
    data: { kelas: 'english' } }, 
    JWT_SECRET,
    { expiresIn: '30m' })
console.log(token)

// asyncronous - create token
// jwt.sign({ data: { kelas: 'english' } }, JWT_SECRET, { expiresIn: '30m' }, (err, token) => {
//     console.log(token)
// })

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiZW5nbGlzaCJ9LCJpYXQiOjE2MzMwODY0ODYsImV4cCI6MTYzMzA4ODI4Nn0.aT2201PqoY0e4n_ZimPao45EEJotxrPUXdEC66oRpTY'

// Cara 1
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//     console.log(decoded)
// })

// Cara 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET)
    console.log(decoded)
} catch (error) {
    console.log(error.message)
}

