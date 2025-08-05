const firedPotteryInventory = []

export const firePottery = (potteryObject, fireTemp) => {
    const firedPottery = {
        ...potteryObject,
        fired: true,
        cracked: fireTemp > 2200
    }

    firedPotteryInventory.push(firedPottery)

    return firedPottery
}