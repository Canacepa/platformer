/*************************************/
/***************LEVEL 1***************/
/*************************************/


const level1 = [153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 0, 0, 0, 82, 65, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0, 0, 0, 116, 104, 104, 104, 104, 104, 104, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 186, 0, 0, 0, 116, 104, 104, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 116, 104, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 104, 104, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 116, 104, 104, 92, 0, 0, 0, 116, 104, 104, 92, 0, 0, 0, 0, 225, 0, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 104, 104, 92, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
    153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 153,
    153, 224, 0, 0, 0, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 0, 104, 104, 104, 153,
    153, 104, 104, 104, 104, 103, 103, 103, 104, 104, 104, 103, 103, 103, 104, 104, 103, 103, 103, 104, 104, 104, 104, 153, 153, 153, 153]

const colisionsLevel1 = [0, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 0,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 223, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 221, 221, 221, 221, 221, 221, 0,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 221, 221, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 221, 221, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    0, 221, 221, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 221, 221, 221, 221, 0, 0, 0, 221, 221, 221, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 221, 221, 221, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221,
    221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 221, 221, 0,
    0, 221, 221, 221, 221, 222, 222, 222, 221, 221, 221, 222, 222, 222, 221, 221, 222, 222, 222, 221, 221, 221, 221, 0, 0, 0, 0]


/*************************************/
/***************LEVEL 1***************/
/*************************************/


const level2 = []

const colisionsLevel2 = []