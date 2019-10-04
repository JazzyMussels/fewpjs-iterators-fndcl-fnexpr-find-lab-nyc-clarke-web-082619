

function superbowlWin(rec) {
 let result = rec.find(o => o.result === 'W');
 return result ? result.year : undefined
}