const initialState = {
    paintColor: '#000000',
    paintSize: 5,
    eraserActive: false,
    bgColor: '#ffffff'
}

window.state = initialState;

const getState = (key) => {
    return window.state[key];
}

const setState = (key, value) => {
    window.state[key] = value;
}

export { getState, setState }