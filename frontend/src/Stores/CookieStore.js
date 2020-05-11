const setCookie = (playerId, playerName, roomCode) => {
    const json = JSON.stringify({playerId, playerName, roomCode})
    document.cookie = `playerInfo=${json}`;
}

const getCookie = () => {
    return document.cookie
}

export {setCookie, getCookie}