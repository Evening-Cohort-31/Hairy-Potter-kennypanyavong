const uncrackedPottery = []

export const toSellOrNotToSell = (firedPottery) => {
    if (firedPottery.cracked) {
        return firedPottery
    }

    const price = firedPottery.weight >= 6 ? 40 : 20

    const pricedPottery = {
        ...firedPottery,
        price: price
    }

    uncrackedPottery.push(pricedPottery)
    return pricedPottery
}

export const usePottery = () => structuredClone(uncrackedPottery)