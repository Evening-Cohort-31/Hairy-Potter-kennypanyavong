// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 4)
let bowl = makePottery("Bowl", 2.5, 3)
let vase = makePottery("Vase", 8, 6)
let plate = makePottery("Plate", 2, 1)
let jug = makePottery("Jug", 6, 7)
let urn = makePottery("Urn", 6.5, 8)


// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 2100)
let fireBowl = firePottery(bowl, 3200)
let fireVase = firePottery(vase, 1950)
let firePlate = firePottery(plate, 2200)
let fireJug = firePottery(jug, 2250)
let fireUrn = firePottery(urn, 1700)


// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(fireMug)
let sellBowl = toSellOrNotToSell(fireBowl)
let sellVase = toSellOrNotToSell(fireVase)
let sellPlate = toSellOrNotToSell(firePlate)
let sellJug = toSellOrNotToSell(fireJug)
let sellUrn = toSellOrNotToSell(fireUrn)


// Invoke the component function that renders the HTML list

const potteryHTML = potteryList()
const potteryTaco = document.querySelector(".potteryList")
potteryTaco.innerHTML = potteryHTML

