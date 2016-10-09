function getLiveGame(id){
  return {
    type: 'GET LIVE GAME',
    payload: parseInt(id)
  }
}

export default getLiveGame
