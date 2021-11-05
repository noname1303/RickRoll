const stateDefault = {
  roll: true, //true là tài, false là xỉu, tài (3=>11) xỉu(>12)
  imgRoll: [
    { id: 1, img: "./img/1.png" },
    { id: 2, img: "./img/2.png" },
    { id: 3, img: "./img/3.png" },
  ],
  score: 0,
  totalGame: 0,
};

const rollReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BET": {
      state.roll = action.roll;
      return { ...state };
      break;
    }
    case "PLAY_GAME": {
      const newArr = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6 + 1);
        let randomRoll = { id: random, img: `./img/${random}.png` };
        newArr.push(randomRoll);
      }
      state.imgRoll = newArr;
      state.totalGame += 1;
      let tongDiem = newArr.reduce((tongDiem, roll) => {
        return (tongDiem += roll.id);
      }, 0);
      if (
        (tongDiem > 12 && state.roll === false) ||
        (tongDiem < 12 && state.roll === true)
      ) {
        state.score += 1;
      }
      console.log(tongDiem);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default rollReducer;
