/*
    Yes, quite a bit of this logic is redundant.
    To be honest, I just want something clear and easy to work with.
*/

function makeNormalStatusText(){
    if(data.boost.times === 0 && data.collapse.times === 0 && data.obliterate.times === 0) return "???"
    let text = ""
    if(data.boost.times > 0 || data.collapse.times > 0 || data.obliterate.times > 0) text += "You are not in any Challenges"
    if(isTabUnlocked('baseless')){
        text += !isTabUnlocked('purification') ? " or Realms" : ", Realms, or Purifications"
    }
    return text
}

function updateStatusHTML(){
    const el = DOM(`header`)
    const escapeText = '<br><span style="font-size: 0.7rem">Click to Escape</span>'

    if(!data.chal.active.includes(true) && !data.baseless.baseless && !inAnyPurification()){
        return el.innerHTML = makeNormalStatusText()
    }
    if(inAnyPurification()){
        let text = `You are in the ${purificationData[data.omega.whichPurification].alt} Purification`
        text += data.darkness.darkened ? `<br>${getDarknessText()}` : escapeText
        return el.innerHTML = text
    }
    if(data.baseless.baseless){
        let text = `You are in the ${getBaselesssName(data.baseless.mode)} Realm`

        if(inAnyRealmChallenge()) text += ` and Baseless Challenge ${data.baselessRealm.chalActive}`
        text += `<br>Your theoretical ℵ<sub>0</sub> gain is ${format(alephNullGain())}`

        return el.innerHTML = text + escapeText
    }
    if(data.darkness.darkened){
        return el.innerHTML = `${getDarknessText()}${escapeText}`
    }
    if(data.chal.active[7]){ // Separate from Darkness due to the click maximum
        let text = `You are in Challenge 8 and there is ${format(data.chal.decrementy)} Decrementy and ${Math.max(1000-data.successorClicks,0)} clicks left`
        return el.innerHTML = text + escapeText
    }
    if(data.chal.active[6]){
        let text = `You are in Challenge 7 and there are ${Math.max(1000-data.successorClicks,0)} clicks left`
        return el.innerHTML = text + escapeText
    }

    let text = `You are in Challenge ${data.chal.html + 1}`
    return el.innerHTML = text + escapeText
}

function universalEscape(){
    if(inAnyPurification()) return exitPurification(data.omega.whichPurification)
    if(data.baseless.baseless) return baselessControl()
    if(data.darkness.darkened) return chalExit(false)
    if(data.baselessRealm.chalActive > -1) return controlRealmChallenge()
    if(data.chal.active.includes(true)){ // The challenge exiting functionality is really confusing :/
        if(data.darkness.darkened) chalExit(false)
        return chalExit(true)
    }
}