// part 2 solution

// points
// let PTS;
// rebound
// let REB;
// assist
// let AST;
// steal
// let STL;
// block
// let BLK;
// Missed Field Goal
// let MFG;
// Missed Free Throw
// let MFT;
// Turnover
// let TO;


// We are to find the EFF (efficiency) of a player on stats input

function calculateEFF(name, stats) {
    let EFF = (stats.PTS + stats.REB + stats.AST + stats.STL + stats.BLK - stats.MFG - stats.MFT - stats.TO)

    console.log(`EFF (efficiency) of ${name}:`, EFF)

    return EFF
}



let leborn_james_stats = {
    PTS: 40,
    REB: 4,
    AST: 1,
    STL: 1,
    BLK: 1,
    MFG: 12,
    MFT: 2,
    TO: 1
}


let leborn_james = {
    name: "Leborn James ,The Goat",
    stats: leborn_james_stats
}


calculateEFF(leborn_james.name, leborn_james.stats)

let euro_lo = {
    name: "The guy from europe",
    stats: {
        PTS: 40,
        REB: 4,
        AST: 1,
        STL: 1,
        BLK: 1,
        MFG: 0,
        MFT: 0,
        TO: 0
    }
}

calculateEFF(euro_lo.name, euro_lo.stats)