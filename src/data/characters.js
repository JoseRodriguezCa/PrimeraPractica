const devilFruits = require("./devilFruits");

const characters = [
        {
          img: "https://i.pinimg.com/originals/40/f1/17/40f117517e1e62c8371774dd1272bc24.png",
          name: "Monkey D. Luffy",
          type: "Captain",
          crew: "Straw Hat Pirates",
          status: "Alive",
          devilFruit: "6621663c022aa4399580f175"
        },
        {
          img: "https://i.pinimg.com/originals/aa/1a/72/aa1a72ed07e995ff6a9bd7179de5070b.png",
          name: "Sengoku",
          type: "Marine",
          crew: "Marines",
          status: "Alive",
          devilFruit: "6621663c022aa4399580f176"
        },
        {
          img: "https://i.pinimg.com/originals/c6/97/78/c697780d3fcff263152b665cd5f221dd.png",
          name: "Portgas D. Ace",
          type: "second-in-command",
          crew: "Whitebeard Pirates",
          status: "Dead",
          devilFruit: "6621663c022aa4399580f177"
        },
        {
          img: "https://i.pinimg.com/originals/27/33/94/2733940d91940f6b44e045d72c2999a6.png",
          name: "Edward Newgate",
          type: "Captain",
          crew: "Whitebeard Pirates",
          status: "Dead",
          devilFruit: "6621663c022aa4399580f178"
        },
        {
          img: "https://i.pinimg.com/originals/3d/b0/64/3db064be82d173ddbff4c97f6608b95d.png",
          name: "Trafalgar D. Water Law",
          type: "Doctor",
          crew: "Heart Pirates",
          status: "Alive",
          devilFruit:"6621663c022aa4399580f179"
        },  
    {
      img: "https://i.pinimg.com/originals/dc/24/00/dc2400e79d0af9572abfe592d34a6b7a.png",
      name: "Roronoa Zoro",
      type: "Swordsman",
      crew: "Straw Hat Pirates",
      status: "Alive",
      devilFruit: null
    },
    {
      img: "https://i.pinimg.com/originals/ee/37/c1/ee37c1e6e2a06b4651de1516a362fe6c.png",
      name: "Nami",
      type: "Navigator",
      crew: "Straw Hat Pirates",
      status: "Alive",
      devilFruit: null
      
    },
    {
      img: "https://i.pinimg.com/originals/48/59/59/485959db11a1972ee9554521c279300f.png",
      name: "Usopp",
      type: "Sniper",
      crew: "Straw Hat Pirates",
      status: "Alive",
      devilFruit: null
    },
    {
      img: "https://www.pngall.com/wp-content/uploads/14/Sanji-PNG-Images.png",
      name: "Sanji",
      type: "Cook",
      crew: "Straw Hat Pirates",
      status: "Alive",
      devilFruit: null
    },
    {
      img: "https://i.pinimg.com/564x/f1/90/ea/f190eac550faf8e5c274f80ce5e224b8.jpg",
      name: "Buggy",
      type: "Pirate",
      crew: "Buggy Pirates",
      status: "Alive",
      devilFruit: null
    },
    {
      img: "https://i.pinimg.com/originals/f4/b4/42/f4b4424d5009e475c3b478f6e01cd9ec.png",
      name: "Dracule Mihawk",
      type: "Swordsman",
      crew: "Red Hair Pirates",
      status: "Alive",
      devilFruit: null
    },
    {
      img: "https://i.pinimg.com/originals/4d/62/b0/4d62b034b41f19d61d877489b7be8073.png",
      name: "Nico Robin",
      type: "Archaeologist",
      crew: "Straw Hat Pirates",
      status: "Alive",
      devilFruit: null
    },
  ];

  console.log(devilFruits[0]._id);
  
  module.exports = characters;