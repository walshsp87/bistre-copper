export const PATCH = (room) => (
  fetch(new Request(
    `http://localhost:3001/rooms/${room.id}`, 
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(room)
    }
  ))
    .then(res => res.json())
)
  
    