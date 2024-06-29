function checkAutobuyerDisplay(){
    //TODO: I REALLY need to optimize this garbage :(
    DOM('t2AutoText2').style.display = hasSluggishMilestone(2) ? 'block' : 'none'
    DOM('t2AutoText3').style.display = hasSluggishMilestone(2) ? 'block' : 'none'
    DOM('t2AutoText4').style.display = hasSluggishMilestone(3) ? 'block' : 'none'
    DOM('t2AutoText5').style.display = data.sing.hasEverHadFunction[1] ? 'block' : 'none'
    DOM('t2AutoText6').style.display = data.sing.hasEverHadFunction[3] ? 'block' : 'none'
    DOM('t2AutoText7').style.display = hasPassiveUpgrade(21) ? 'block' : 'none'
    DOM('t2AutoText8').style.display = hasPassiveUpgrade(22) ? 'block' : 'none'
    DOM('auto4').style.display = hasSluggishMilestone(2) ? 'block' : 'none'
    DOM('auto5').style.display = hasSluggishMilestone(2) ? 'block' : 'none'
    DOM('auto6').style.display = hasSluggishMilestone(3) ? 'block' : 'none'
    DOM('auto7').style.display = data.sing.hasEverHadFunction[0] ? 'block' : 'none'
    DOM('auto8').style.display = data.sing.hasEverHadFunction[3] ? 'block' : 'none'
    DOM('auto9').style.display = hasPassiveUpgrade(21) ? 'block' : 'none'
    DOM('auto10').style.display = hasPassiveUpgrade(22) ? 'block' : 'none'
}

let bupData = [
    {
        desc: "Each Factor's effect is doubled",
        cost: 1,
        eff: () => 2,
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Boost OP gain by 5x",
        cost: 5,
        eff: () => 5,
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "The Ordinal Base is always 5 in Challenges",
        cost: 72,
        eff: () => 5,
        baseEff: () => data.ord.base,
        bottomRow: false
    },
    {
        desc: "Dynamic Gain is multiplied by your C5 completions in C1-C4",
        cost: 53,
        eff: () => Math.max(Math.pow(2, data.chal.completions[4]), 1),
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Every 10 Darkness Upgrades purchased reduces Hierarchy Bases by 1",
        cost: 3522,
        eff: () => Math.min(6, Math.floor(getTotalDUPs()/10)),
        baseEff: () => 1,
        bottomRow: true
    },

    {
        desc: "Unlock the Max All AutoBuyer",
        cost: 1,
        eff: () => 1,
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Boosters Boost Tier 1 and Tier 2 Automation",
        cost: 4,
        eff: () => Math.max(Math.sqrt(data.boost.total)*getAOREffect(6), 1),
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain 10x OP at Ordinal Base 5 or higher",
        cost: 73,
        eff: () => 10,
        baseEff: () => 0,
        bottomRow: false
    },
    {
        desc: "The Ordinal Base boosts Factors (higher is better)",
        cost: 74,
        eff: () => Math.max(1,data.ord.base-2),
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Each SGH Buyable Purchased boosts the SGH Effect Exponent",
        cost: 3522,
        eff: () => Math.sqrt(getTotalHBuyables(true)),
        baseEff: () => 0,
        bottomRow: true
    },

    {
        desc: "Unlock the Markup AutoBuyer",
        cost: 1,
        eff: () => 1,
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain 20 Free OP/s",
        cost: 8,
        eff: () => 20*getOverflowEffect(1),
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain 3 free levels of each Factor",
        cost: 16,
        eff: () => 3,
        baseEff: () => 0,
        bottomRow: false
    },
    {
        desc: "Boosters boost Dynamic gain if the Ordinal Base is less than 6",
        cost: 66,
        eff: () => Math.max(Math.log2(data.boost.amt), 1),
        baseEff: () => 1,
        bottomRow: false
    },
    {
        desc: "The Total ℵ effect applies to Incrementy gain",
        cost: 3562,
        eff: () => alephTotalEffect()*getOverflowEffect(7),
        baseEff: () => 1,
        bottomRow: true
    },
]


let chargedBUPData = [
    {
        desc: "Each Factor's effect is Quadrupled",
        eff: () => 4,
        bottomRow: false
    },
    {
        desc: "Boost OP gain by 500x",
        eff: () => 500,
        bottomRow: false
    },
    {
        desc: "The Base is always 4 in Challenges",
        eff: () => 4,
        bottomRow: false
    },
    {
        desc: "Dynamic Gain is multiplied by your C5 completions",
        eff: () => Math.max(Math.pow(2, data.chal.completions[4]), 1),
        bottomRow: false
    },
    {
        desc: "Every 10 Darkness Upgrades or Drains purchased reduces Hierarchy Bases by 1",
        eff: () => Math.min(6, Math.floor((data.darkness.totalDrains+getTotalDUPs())/10)),
        bottomRow: true
    },

    {
        desc: "The AutoBuyers are boosted by Factor 7 (does not stack with Upgrade 3x1)",
        eff: () => Math.sqrt(factorEffect(6)),
        bottomRow: false
    },
    {
        desc: "Boosters Boost Tier 1 and 2 Automation at a much higher rate",
        eff: () => Math.max(Math.sqrt(data.boost.total)*3*getAOREffect(6), 1),
        bottomRow: false
    },
    {
        desc: "Gain 100x OP at Ordinal Base 4 or higher",
        eff: () => 100,
        bottomRow: false
    },
    {
        desc: "The Base boosts Factors but lower Base is better",
        eff: () => Math.max(1,(-data.ord.base + 6)),
        bottomRow: false
    },
    {
        desc: "Each SGH, FGH, and Incrementy Buyable Purchased boosts the SGH Effect Exponent",
        eff: () => Math.sqrt(getTotalHBuyables(false)+getTotalIBuyables()),
        bottomRow: true
    },

    {
        desc: "The AutoBuyers are boosted by Factor 7 (does not stack with Upgrade 2x1)",
        eff: () => Math.sqrt(factorEffect(6)),
        bottomRow: false
    },
    {
        desc: "Gain Free OP/s based on your Base",
        eff: () => Math.max(20*(-data.ord.base+11)*getOverflowEffect(1), 1),
        bottomRow: false
    },
    {
        desc: "Gain 4 free levels of each Factor",
        eff: () => 4,
        bottomRow: false
    },
    {
        desc: "Boosters boost Dynamic Gain",
        eff: () => Math.max(Math.log2(data.boost.amt), 1),
        bottomRow: false
    },
    {
        desc: "The Total ℵ effect is multiplied by Darkness Upgrade 1 and applied to Incrementy gain",
        eff: () => alephTotalEffect()*dupEffect(0)*getOverflowEffect(7),
        bottomRow: true
    },
]

let destabilizedBUPData = [
    {
        desc: "Each Factor's effect is applied to Incrementy gain",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Turn the OP hardcap into a softcap",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "The Ordinal Base in the Forgotten Realm is reduced by your Instability<br>(Caps at -10)",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Dynamic Gain and Cap are multiplied by your ℵ<sub>&omega;</sub>",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "???",
        eff: () => 1,
        bottomRow: true
    },

    {
        desc: "The AutoBuyers are boosted by OP",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Boosters boost Tier 1 and 2 automation at an insanely high rate",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain more OP, Decrementy, and Cardinals based on your Instability",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Incrementy boosts Factors",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "???",
        eff: () => 1,
        bottomRow: true
    },

    {
        desc: "The AutoBuyers are boosted by Factor 1",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain 100% of OP gained on Markup/s and the second Booster Power effect is changed",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Gain free Factor Levels equal to your Instability",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "Boosters and Cardinals boost Dynamic Gain",
        eff: () => 1,
        bottomRow: false
    },
    {
        desc: "???",
        eff: () => 1,
        bottomRow: true
    },
]

let getBUPCosts = (i) => bupData[i].cost
function getBUPEffect(i) {
    // Special Case for BUPs 5 and 10 (if they're not Destabilized)
    if((i === 5 && !data.boost.isDestab[5]) || (i === 10 && !data.boost.isDestab[10]) ){
        if(data.boost.isCharged[5] && data.boost.isCharged[10] && data.hierarchies.hasUpgrade[3]) return bupData[5].eff()**2
        if(data.boost.isCharged[5] || data.boost.isCharged[10]) return bupData[5].eff()
    }

    if(data.boost.isDestab[i]) return destabilizedBUPData[i].eff()
    if(data.boost.isCharged[i]) return chargedBUPData[i].eff()
    if(data.boost.hasBUP[i]) return bupData[i].eff()
    return bupData[i].baseEff()
}
let getBaseBUPDesc = (i) => `${bupData[i].desc}<br>${getBUPCosts(i)} Boosters`
function getBUPDesc(i, showNextLevel = false){
    if(data.boost.isDestab[i]) return destabilizedBUPData[i].desc
    if(data.boost.isCharged[i]) return showNextLevel ? destabilizedBUPData[i].desc : chargedBUPData[i].desc
    if(data.boost.hasBUP[i]) return showNextLevel ? chargedBUPData[i].desc : getBaseBUPDesc(i)
    return getBaseBUPDesc(i)
}

function initBUPs(){
    let rows = [DOM('bupColumn0'), DOM('bupColumn1'), DOM('bupColumn2')]
    let total = 0
    for (let i = 0; i < rows.length; i++) {
        for (let n = 0; n < 5; n++) {
            let bup = document.createElement('button')
            bup.className = data.boost.isDestab[total] ? 'destabBUP' : data.boost.isCharged[total] ? 'chargedBUP' : 'bup'
            bup.id = `bup${total}`
            bup.innerHTML = `${getBUPDesc(total)}`

            rows[i].append(bup)
            ++total
        }
    }
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        let bottomRow = i===4 || i===9 || i===14
        DOM(`bup${i}`).addEventListener('click', ()=>buyBUP(i, bottomRow, true))
        DOM(`bup${i}`).addEventListener('mouseenter', ()=>showNextBUPLevelEffect(i, true))
        DOM(`bup${i}`).addEventListener('mouseleave', ()=>showNextBUPLevelEffect(i, false))
        DOM(`bup${i}`).style.backgroundColor = data.boost.hasBUP[i] && !data.boost.isDestab[i] ?'#002480':'black'
    }
    for (let i = 0; i < data.boost.unlocks.length; i++) {
        DOM(`bu${i}`).style.backgroundColor = data.boost.unlocks[i]?'#002480':'black'
    }

    checkSpecialBUPs()
}

function checkSpecialBUPs(){
    DOM(`bup4`).style.display = hasSluggishMilestone(3) ? `block` : `none`
    DOM(`bup9`).style.display = hasSluggishMilestone(3) ? `block` : `none`
    DOM(`bup14`).style.display = hasSluggishMilestone(3) ? `block` : `none`
    DOM(`bu4`).style.display = hasSluggishMilestone(3) ? `block` : `none`
}

const autoNames = ['Max All', 'Markup', 'Sacrifice for Charge', 'RUP', 'Hierarchy Buyable', 'Booster Upgrade', 'Supercharge', 'ℵ<sub>0</sub> Upgrade', 'ℵ<sub>&omega;</sub> Upgrades']
const autoDisplayNames = ['Max All', 'Markup', 'Charge', 'RUP', 'Hierarchy Buyable', 'Booster Upgrade', 'Supercharge', 'ℵ<sub>0</sub> Upgrades', 'ℵ<sub>&omega;</sub> Upgrades']
const autoRequirements = [', but only if you can\'t Factor Shift', ', but only if you\'re past Ψ(Ω)', '', ', but only if you can\'t afford a Charge', '', '', ', but only if you already have the required Booster Upgrade', '', '']
const autoUps = [5, 10]
function updateBoostersHTML(){
    DOM('boosterText').innerHTML = data.boost.unlocks[1] > 0 ?
        `You have <span style="color: #8080FF; font-family: DosisSemiBold">${(data.boost.amt)} Boosters</span> (${(data.boost.total)} total) and <span style="color: goldenrod; font-family: DosisSemiBold">${data.incrementy.charge} Charge</span> (${data.incrementy.totalCharge} total)`
        : `You have <span style="color: #8080FF; font-family: DosisSemiBold">${(data.boost.amt)} Boosters</span> (${(data.boost.total)} total)`
    DOM('boosterTimesText').innerHTML = `You have <span style="color: #8080FF">Boosted</span> ${data.boost.times} times`
    for (let i = 0; i < data.autoStatus.enabled.length; i++) {
        DOM(`t2AutoText${i}`).innerHTML = `Your <span style="color: #80ceff">${autoDisplayNames[i]} AutoBuyer</span> is clicking the ${autoNames[i]} button${i > 2 ? 's' : ''} <span style="color: #8080FF">${i < 2 ? format(t2Auto()) : 20} times/second</span>${autoRequirements[i]}`
        DOM(`auto${i+2}`).innerHTML = data.boost.hasBUP[autoUps[i]] || i > 1 ?`${autoDisplayNames[i]} AutoBuyer: ${formatBool(data.autoStatus.enabled[i], 'EDL')}`:`${autoDisplayNames[i]} AutoBuyer: LOCKED`

    }
    DOM("factorText2").innerText = `Your Challenges are multiplying AutoBuyer speed by a total of ${format(chalEffectTotal())}x`

    if(boostTab === 'chal') updateAllChalHTML()
    if(boostTab === 'incrementy') updateIncrementyHTML()
    if(boostTab === 'hierarchies') updateHierarchiesHTML()
    if(boostTab === 'overflow') updateOverflowHTML()

    DOM("chalTab").innerText = data.boost.unlocks[0]?'Challenges':'???'
    DOM("incrementyTab").innerText = data.boost.unlocks[1]?'Incrementy':'???'
    DOM("hierarchiesTab").innerText = data.boost.unlocks[2]?'Hierarchies':'???'
    DOM("overflowTab").innerText = data.boost.unlocks[3]?'Overflow':'???'

    if(data.chal.active[6] || data.chal.active[7]) updateHeaderHTML()
}

function updateHeaderHTML(){
    const el = DOM(`chalIn`)
    el.style.display = data.chal.active.includes(true) || data.baseless.baseless || inAnyPurification() ? 'block' : 'none'
    el.innerText = inAnyPurification() ? `The ${purificationData[data.omega.whichPurification].alt} will be Purified`
        : data.baseless.baseless ? `You are in the ${baselessNames[data.baseless.mode]} Realm`
        : data.chal.active[7] ? `You are in Challenge 8 and there is ${format(data.chal.decrementy)} Decrementy and ${Math.max(1000-data.successorClicks,0)} clicks left` : `You are in Challenge ${data.chal.html+1}` + (data.chal.active[6] ? ` and there is ${Math.max(1000-data.successorClicks,0)} clicks left` : "")
}

function updateAllBUPHTML(){
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        DOM(`bup${i}`).innerHTML = `${getBUPDesc(i)}`
    }
}

function showNextBUPLevelEffect(i, showNextLevel) {
    if(data.incrementy.totalCharge === 0 && data.darkness.sacrificedCharge === 0) return
    if(!getEUPEffect(4, 0) && data.boost.isCharged[i]) return
    DOM(`bup${i}`).style.color = data.boost.isDestab[i] || (data.boost.isCharged[i] && showNextLevel) ? 'rgba(228,105,255,0.88)' : showNextLevel || data.boost.isCharged[i] && data.boost.unlocks[1] ? 'goldenrod' : '#8080FF'
    DOM(`bup${i}`).innerHTML = `${getBUPDesc(i, showNextLevel)}`
}

function updateBUPInfoText(){
    let bottomAddon = hasSluggishMilestone(3) ? `Bottom-Row <span style="color: #8080FF">Upgrades</span> are unique and currently cost <span style="color: goldenrod">${getBottomRowChargeCost()} Charge</span> to <span style="color: goldenrod">Supercharge.</span><br>` : ``
    let superchargeAddon = data.boost.unlocks[1] ? `Purchased <span style="color: #8080FF">Upgrades</span> can be <span style="color: goldenrod">Supercharged</span> for <span style="color: goldenrod">1 Charge!</span><br>` : ``
    let text = `${superchargeAddon}${bottomAddon}<span style="color: #8080FF">Upgrades</span> must be bought in <span style="color: #8080FF">descending order</span>. Attempting to buy an <span style="color: #8080FF">Upgrade</span> will also attempt to buy all <span style="color: #8080FF">Upgrades</span> above it.`
    return DOM('bupBottomText').innerHTML = text
}

function boosterReset(){
    data.ord.ordinal = D(0)
    data.ord.over = D(0)
    data.ord.base = data.chal.active[2]?15:10
    data.ord.isPsi = false
    data.markup.powers = D(0)
    data.markup.shifts = 0
    data.dy.level = D(1)
    data.dy.gain = D(0)
    for (let i = 0; i < data.factors.length; i++) {
        data.factors[i] = 0
    }
    for (let i = 0; i < data.autoLevels.length; i++) {
        data.autoLevels[i] = 0
    }
    data.chal.decrementy = D(1)
    data.successorClicks = 0
}

const boosterGain = () => inPurification(0) ? (getAOREffect(3)) * getBulkBoostAmt() : ((data.boost.times * getBulkBoostAmt()) + (getBulkBoostAmt() * (getBulkBoostAmt() + 1) / 2));
function boost(f=false, auto=false, hotkey=false){
    if(data.boost.times === 33 && data.collapse.times === 0 && data.obliterate.times === 0) return createConfirmation("Are you certain?", "This will perform a Collapse, which will reset EVERYTHING you've done so far in exchange for three Cardinals. The next layer awaits....", "Not yet.", "To the beyond!", collapse, true)
    if((!data.ord.isPsi || data.ord.ordinal.lt(boostReq())) && (auto || hotkey)) return
    if((!data.ord.isPsi || data.ord.ordinal.lt(boostReq())) && !f) return createAlert("Failure", "Insufficient Ordinal", "Dang.")

    if(data.boost.times === boostLimit()) return createAlert("The End... for now!", "You've reached the current Endgame!", "Thanks!")

    if(data.boost.times === 0){
        DOM('boostNav').style.display = 'block'
        DOM('factorBoostButton').style.display = 'inline-block'
    }

    let bulkBoostAmt = getBulkBoostAmt();
    if (auto && data.boost.times < 2 && !hasSluggishMilestone(4)) bulkBoostAmt = Math.min(2 - data.boost.times, bulkBoostAmt) // do not automatically boost past SM2

    data.boost.amt += boosterGain()
    data.boost.total += boosterGain()
    data.boost.times += bulkBoostAmt
    if (data.boost.times >= 30 && data.boost.times < 30 + bulkBoostAmt && data.collapse.times === 0) createAlert('Congratulations!', `You've Factor Boosted 30 times! Something new is right around the corner, but these last 4 Boosts will be the hardest...`, 'Onwards!')
    /*for(let i=1;i<=bulkBoostAmt;i++) {
        data.boost.amt += data.boost.times+1
        data.boost.total += data.boost.times+1
        ++data.boost.times

        if(data.boost.times === 30 && data.collapse.times === 0) createAlert('Congratulations!', `You've Factor Boosted 30 times! Something new is right around the corner, but these last 4 Boosts will be the hardest...`, 'Onwards!')
    }*/
    data.boost.amt = Math.min(data.boost.amt, Number.MAX_VALUE)
    data.boost.total = Math.min(data.boost.total, Number.MAX_VALUE)
    data.boost.times = Math.min(data.boost.times, Number.MAX_VALUE)
    boosterUnlock()
    boosterReset()
}
function boostReq(n = data.boost.times){
    if(data.boost.times === 0 && !hasSluggishMilestone(0)) return D(GRAHAMS_VALUE)
    if(n >= 34) return D(BHO_VALUE).times(D(3).pow(n-33))
    let scaling = n < 30 ? 1 : Math.floor(100*(n/15))
    return n < 33 ? D(3 ** (n+1) * 4 * 10 * scaling) : D(BHO_VALUE)
}
//Credit to ryanleonels
let boostLimit = () => (data.collapse.times === 0 && data.obliterate.times === 0) ? 33 : Infinity;
function getBulkBoostAmt(){
    if (!data.sToggles[7] || !data.ord.isPsi || data.ord.ordinal.lte(boostReq()) || data.boost.times >= Number.MAX_VALUE) return 1
    let maxBoost = data.boost.times
    while (data.ord.ordinal.gte(boostReq(maxBoost)) && maxBoost < boostLimit()) {
        maxBoost++
        if (maxBoost >= 34) {
            maxBoost = 34 + Decimal.floor(Decimal.log(data.ord.ordinal.div(BHO_VALUE),3).add(0.000000000001)).toNumber()
            break
        }
    }
    return Math.min(Math.max(maxBoost - data.boost.times, 1), Number.MAX_VALUE)
}
//End credit
function buyBUP(n, bottomRow, useCharge){
    updateHierarchyPurchaseHTML()
    if(data.boost.isCharged[n] && !bottomRow) return destabBUP(n)
    if(data.boost.hasBUP[n]) return useCharge ? chargeBUP(n, bottomRow) : null

    /*
        Force purchasing of BUPs in order, but only in columns
        Attempts to purchase lower BUPs if they aren't available
    */
    if(n % 5 !== 0 && !data.boost.hasBUP[n-1]){
        for (let i = 0; i < n % 5; i++) {
            let index = (i % 5) + (5 * Math.floor(n / 5))
            buyBUP(index, bottomRow, useCharge)
        }
    }

    if (data.boost.amt < getBUPCosts(n)) return
    data.boost.amt -= getBUPCosts(n)
    data.boost.hasBUP[n] = true

    DOM(`bup${n}`).style.backgroundColor = '#002480'
    if(inPurification(2)) updateAllBUPHTML()
}

function boosterRefund(c=false){
    if(data.baseless.baseless) return
    if(getTotalDestabilizedBUPs() > 0) return respecDestabilizedBUPs()
    respecCharge(c)
    updateHierarchyPurchaseHTML()
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        data.boost.hasBUP[i] = false
        DOM(`bup${i}`).style.backgroundColor = 'black'
    }
    data.boost.amt = data.boost.total
    c?boosterReset():chalExit()
}

// TODO: Refactor / Cleanup
function boosterUnlock(){
    if(chalTabUnlocked()){ data.boost.unlocks[0] = true; DOM(`bu0`).style.backgroundColor = '#002480'; }
    else {DOM(`bu0`).style.backgroundColor = 'black';}
    if(incrementyTabUnlocked()){ data.boost.unlocks[1] = true; DOM(`bu1`).style.backgroundColor = '#002480';  }
    else {DOM(`bu1`).style.backgroundColor = 'black';}
    if(hierarchiesTabUnlocked()){ data.boost.unlocks[2] = true; DOM(`bu2`).style.backgroundColor = '#002480'; }
    else {DOM(`bu2`).style.backgroundColor = 'black';}
    if(overflowTabUnlocked()){ data.boost.unlocks[3] = true; DOM(`bu3`).style.backgroundColor = '#002480'; }
    else {DOM(`bu3`).style.backgroundColor = 'black';}
    if((data.boost.total >= 12246 && hasSluggishMilestone(3)) || hasPassiveUpgrade(19) || data.boost.unlocks[4]){ data.boost.unlocks[4] = true; DOM(`bu4`).style.backgroundColor = '#002480'; }
    else {DOM(`bu4`).style.backgroundColor = 'black';}
}

function chalTabUnlocked(){
    return data.boost.total>=6 || hasSluggishMilestone(1);
}

function incrementyTabUnlocked(){
    return data.boost.total>=91 || hasSluggishMilestone(1);
}

function hierarchiesTabUnlocked(){
    return data.boost.total>=325 || hasSluggishMilestone(4);
}

function overflowTabUnlocked(){
    return data.boost.total>=465 || data.boost.unlocks[4];
}

function toggleAuto(i){
    if(!data.boost.hasBUP[autoUps[i]] && i < 2) return
    data.autoStatus.enabled[i] = !data.autoStatus.enabled[i]
}

function getTotalBUPs(){
    let total = 0
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        if (data.boost.hasBUP[i]) ++total
    }
    return total
}
function getTotalSupercharges(){
    let total = 0
    for (let i = 0; i < data.boost.isCharged.length; i++) {
        if (data.boost.isCharged[i]) ++total
    }
    return total
}
function getTotalDestabilizedBUPs(){
    let total = 0
    for (let i = 0; i < data.boost.isDestab.length; i++) {
        if (data.boost.isDestab[i]) ++total
    }
    return total
}
