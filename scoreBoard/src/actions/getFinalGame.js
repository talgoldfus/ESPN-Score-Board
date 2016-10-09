function getFinalGame(id){
  return {
    type: 'GET FINAL GAME',
    payload: parseInt(id)
  }
}

export default getFinalGame
