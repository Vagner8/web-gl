import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer();
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET'],
  },
});

app.use(cors());

io.on('connection', (socket) => {
  let one: ReturnType<typeof setTimeout>;
  let two: ReturnType<typeof setTimeout>;
  const delay = 100;
  one = setTimeout(function emitRandomNumber() {
    socket.emit('random_number', {
      randomNumber: Math.floor(Math.random() * 6),
    });
    two = setTimeout(emitRandomNumber, delay);
  }, delay);
  socket.on('disconnect', () => {
    clearTimeout(one);
    clearTimeout(two);
    socket.removeAllListeners();
  });
});

server.listen(4000);
