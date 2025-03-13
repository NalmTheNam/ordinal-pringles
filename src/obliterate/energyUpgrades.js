const energyUpgradeData = [
    [
        {
            desc: 'Total Fractal Energy boost AutoBuyers',
            sign: 'x',
            cost: 0,
            eff: () => D(10).pow(data.obliterate.times),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 0,
            baseValue: 1,
            isUnlock: false,
        }
    ],
    [
        {
            desc: 'Total Fractal Energy provides free levels of the first ℵ<sub>0</sub> Upgrade',
            sign: '+',
            cost: 1,
            eff: () => D(data.obliterate.times*2),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 101,
            baseValue: 0,
            isUnlock: false,
        },
        {
            desc: 'Total Fractal Energy boosts the Total Charge boost to Baselessness',
            sign: 'x',
            cost: 1,
            eff: () => D(data.obliterate.times).times(10),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 102,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'ℵ<sub>0</sub> boosts the third ℵ<sub>0</sub> Upgrade',
            sign: '+',
            cost: 1,
            eff: () => D(Math.log10(data.baseless.alephNull)/50),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 103,
            baseValue: 0,
            isUnlock: false,
        },
        {
            desc: 'Total Fractal Energy provides free Stabilization levels',
            sign: '+',
            cost: 1,
            eff: () => Math.floor(Math.sqrt(data.obliterate.energy)),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 104,
            baseValue: 0,
            isUnlock: false,
        },
        {
            desc: 'If you have a Row Five Hypercharge, each Stable Hypercharge provides two free Drains',
            sign: '+',
            cost: 2,
            eff: () => hasPassiveHypercharge(4) ? getStableHypercharges()*2 : 0,
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 105,
            baseValue: 0,
            isUnlock: false,
        },
        {
            desc: 'The Stable Hypercharge Effect applies to Cardinal Gain',
            sign: '^',
            cost: 2,
            eff: () => getStableHyperchargeEffect(),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 106,
            baseValue: 0,
            isUnlock: false,
        },
    ],
    [
        {
            desc: 'Total Fractal Energy boosts the first ℵ<sub>ω</sub> effect',
            sign: 'x',
            cost: 1,
            eff: () => D(data.obliterate.times+1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 201,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'Total Fractal Energy boosts the ℵ<sub>ω</sub> cap',
            sign: 'x',
            cost: 1,
            eff: () => D(1).plus(data.obliterate.times/4),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 202,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'Total Fractal Energy boosts the second ℵ<sub>ω</sub> Effect',
            sign: 'x',
            cost: 1,
            eff: () => D(1).plus(data.obliterate.times/4),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 203,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: "While nothing is being Purified, ℵ<sub>ω</sub> Upgrades three to five provide a combined boost to AutoBuyers",
            sign: 'x',
            cost: 1,
            eff: () => D(getAOREffect(2)).plus(getAOREffect(3)).plus(getAOREffect(4)),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 204,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'While the Obscure are being Purified, Total Fractal Energy boost the FGH Successor',
            sign: 'x',
            cost: 1,
            eff: () => D(data.obliterate.times).times(3),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 205,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'While the Infinite are being Purified, Total Fractal Energy divide the Dynamic Factor',
            sign: '/',
            cost: 1,
            eff: () => D(data.obliterate.times/2).plus(1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 206,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'While the Eternal are being Purified, total Fractal Energy provides free levels of the fourth ℵ<sub>ω</sub> Upgrade',
            sign: '+',
            cost: 2,
            eff: () => Decimal.floor(data.obliterate.times/2).plus(1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 207,
            baseValue: 0,
            isUnlock: false,
        },
        {
            desc: 'While the Inferior are being Purified, total Fractal Energy greatly boosts the fifth ℵ<sub>ω</sub> Upgrade',
            sign: 'x',
            cost: 2,
            eff: () => D(data.obliterate.times),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 208,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: 'Cardinals provide free ℶ<sub>ω</sub>',
            sign: '+',
            cost: 3,
            eff: () => Decimal.log10(data.collapse.cardinals.plus(1)),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 209,
            baseValue: 0,
            isUnlock: false,
        },
    ],
    [
        {
            desc: "Total Fractal Energy boosts the <span style='color: #2da000'>Perfected Green</span> Pringle",
            sign: 'x',
            cost: 1,
            eff: () => D(data.obliterate.times+1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 301,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: "Total Fractal Energy boosts the <span style='color: #3e7eab'>Crunchy Blue</span> Pringle",
            sign: 'x',
            cost: 1,
            eff: () => D(10).pow(data.obliterate.times),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 302,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: "Total Fractal Energy boosts the <span style='color: #ae6610'>Perfected Orange</span> Pringle",
            sign: 'x',
            cost: 1,
            eff: () => D(data.obliterate.times/10).plus(1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 303,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: "Total Fractal Energy boosts the <span style='color: #af1fad'>Barbecue</span> Pringle",
            sign: 'x',
            cost: 1,
            eff: () => D(10).pow(data.obliterate.times),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 304,
            baseValue: 1,
            isUnlock: false,
        },
        {
            desc: "??? (Coming Soon!)",
            sign: 'x',
            cost: Infinity,
            eff: () => D(1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 305,
            baseValue: 1,
            isUnlock: false,
        },
    ],
    [
        {
            desc: "(Coming Soon!)",
            sign: 'x',
            cost: 1,
            eff: () => D(1),
            hasExtraReq: false,
            extraReq: true,
            extraReqText: '',
            node: 401,
            baseValue: 1,
            isUnlock: false,
        },
    ]
]

function getEUPEffect (i, j, noDecimal = false) {
    if(noDecimal) return getEUPEffect(i, j).toNumber()

    let id = energyUpgradeData[i][j].node
    let data = energyUpgradeData[i][j]

    if(data.isUnlock) return hasTreeUpgrade(id)

    if(hasTreeUpgrade(id)) return Decimal.max(energyUpgradeData[i][j].baseValue, energyUpgradeData[i][j].eff())
    return D(energyUpgradeData[i][j].baseValue)
}