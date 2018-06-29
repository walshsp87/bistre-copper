export const GET = () => (
  fetch(new Request(
    'http://localhost:3001/rooms',
    { method: 'GET' }
  ))
    .then(res => res.json())
)
    