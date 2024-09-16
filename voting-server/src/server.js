import { Socket } from "socket.io";
import Server from "./server";

export default function startServer(store) {
    const io = new Server().io;
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );
    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}