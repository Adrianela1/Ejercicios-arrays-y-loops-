function sumResistance(resistances) {

    const sum = resistances.reduce((acc, resistance) => acc + Math.abs(resistance), 0);

    return `${sum} ohms`;
}

console.log(sumResistance([-1, 5, 6, 3]));   
console.log(sumResistance([14, 3.5, 6]));   
console.log(sumResistance([8, 15, 100]));    
//////////////////////////////////////////////////////////////////////////////////////////
function numDiv(number) {
    if (typeof number !== 'number') {
        return "Input must be a number.";
    }

    const half = number / 2;

    return [half, half];
}

console.log(numDiv(4));   
console.log(numDiv(10));  
///////////////////////////////////////////////////////////////////////////////////////////
function secretName(members) {
    
    const initials = members.map(member => member.charAt(0)).join('');

    return initials;
}

console.log(secretName(["Esperanza", "Franco", "Nia"])); 
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));  
console.log(secretName(['Harry', 'Ron', 'Hermione'])); 
////////////////////////////////////////////////////////////////////////////////////////////

function onlineStatus(users) {
    const onlineUsers = users.filter(user => isUserOnline(user));

    if (onlineUsers.length === 0) {
        return 'No one is online.';
    } else if (onlineUsers.length === 1) {
        return `${onlineUsers[0]} is online.`;
    } else if (onlineUsers.length === 2) {
        return `${onlineUsers[0]} and ${onlineUsers[1]} are online.`;
    } else {
        const remainingUsers = onlineUsers.length - 2;
        return `${onlineUsers[0]}, ${onlineUsers[1]}, and ${remainingUsers} more are online.`;
    }
}

function isUserOnline(username) {
    const onlineUsernames = ['mockIng99', 'J0eyPunch'];
    return onlineUsernames.includes(username);
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
//////////////////////////////////////////////////////////////////////
function arrayMultiplos(number, length) {
    const multiplesArray = [];

    for (let i = 1; i <= length; i++) {
        multiplesArray.push(number * i);
    }

    return multiplesArray;
}
console.log(arrayMultiplos(2, 10));   
console.log(arrayMultiplos(17, 6));   
////////////////////////////////////////

function antipodalAverage(arr) {
    const length = arr.length;

    const firstPart = arr.slice(0, Math.floor(length / 2));
    const secondPart = arr.slice(Math.ceil(length / 2)).reverse();
    
    const summedArray = firstPart.map((num, index) => num + secondPart[index]);
    
    const averagedArray = summedArray.map(num => num / 2);
    
    return averagedArray;
}

const result = antipodalAverage([1, 2, 3, 5, 22, 6]);
console.log(result);  