'use strict';

const io = require('socket.io')(3000);

let counter = 0;
let n = 0;
// let letter = 'A';

io.on('connection', (socket) => {
  socket.on('hi', (payload) => {
    socket.emit('greet', payload);
  });
});

// Namespaces
const numbers = io.of('/numbers');
const letters = io.of('/letters');

// For numbers & letters connections, add some listeners
numbers.on('connection', (socket) => {
  console.log('Connected to Numbers', socket.id);

  // connect to a room
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });

  // This event gets emitted to anyone in any room in the numbers namespace
  socket.on('next-number', () => {
    socket.broadcast.emit('number', counter++);
    // Only connections in the negative room inside of numbers can hear this
    let negCounter = counter;
    socket.in('negative').emit('_number', `-${negCounter}`);
  });
}),

letters.on('connection', (socket) => {
  console.log('Connected to Letters', socket.id);

  // connect to a room
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });

  // This event gets emitted to anyone in any room in the numbers namespace
  socket.on('next-letter', () => {
    let letter = 'A';
    if (n > 26) {
      n = 0;
    }
    

    letter = String.fromCharCode(65 + n);
    socket.broadcast.emit('letter', letter);

    // Only connections in the 'lowercase' room inside of letters can hear this
    let lowercaseLetter = letter.toLowerCase();
    socket.in('lowercase').emit('_letter', lowercaseLetter);

    n++;
  });
});