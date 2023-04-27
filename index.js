const express = require('express')
const app = express()

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Smith' }
]

// Get all users
app.get('/api/users', (req, res) => {
  res.send(users)
})

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) res.status(404).send('User not found')
  res.send(user)
})

// Create new user
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  }
  users.push(user)
  res.send(user)
})

// Update user by ID
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) res.status(404).send('User not found')
  user.name = req.body.name
  res.send(user)
})

// Delete user by ID
app.delete('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) res.status(404).send('User not found')
  const index = users.indexOf(user)
  users.splice(index, 1)
  res.send(user)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
