let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState (puestos) {
    let disponibles = 0;
    let ocupados = 0;
    for (let i=0; i<3; i++){
      for (let j=0; j<3; j++){
          console.log(puestos[i][j])
          if (puestos[i][j] == 1){
            ocupados++;
          } else if (puestos[i][j] == 2){
            disponibles++;
          }
      }
    }
    const state = {totalSlots: disponibles+ocupados, availableSlots: disponibles, occupiedSlots: ocupados};
    return state;
}
console.log(getParkingLotState(parking_state))