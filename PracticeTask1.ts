
// Leap year function

let isLeap = (year: number): boolean =>{
    if(year % 4 == 0  && (year % 400 == 0 || year % 100 != 0 ))
        return true;
    else
        return false;
};

isLeap(800);


// Reverse function

let reverseStr = (str: string): string => {
    let reversedStr = '';
    for(let i=str.length-1;i>=0;i++){
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}

reverseStr('narahdinarahDmaI');