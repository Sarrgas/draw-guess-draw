const initialState = {
    playerId: 0,
    playerName: 'Unnamed',
    roomCode: '',
    paintColor: '#000000',
    paintSize: 5,
    eraserActive: false,
    bgColor: '#ffffff',
    currentImage: {},
}

window.state = initialState;

const getState = (key) => {
    return window.state[key];
}

const setState = (key, value) => {
    window.state[key] = value;
}

export { getState, setState }