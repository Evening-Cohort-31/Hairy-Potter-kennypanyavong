const potteryInventory = []
let id = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: id++
    }
    potteryInventory.push(potteryObject)

    return potteryObject
}