/*
Instructions:
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
*/


const timeConversion = s => {
    let ampm = s.slice(8, 10);
    let str = s.replace(/AM|PM/, '')
    let timeArr = str.split(':')



    if (ampm === 'AM') {
        let t = (parseInt(timeArr[0]) % 12).toString();

        if (t.length < 2) t = '0' + t;

        
        timeArr[0] = t

        return(timeArr.join(':'))
    }
    else {
        let t = (parseInt(timeArr[0])%12 + 12).toString();

        timeArr[0] = t

        return(timeArr.join(':'))
    }

}

let t1 = "07:05:45PM";
let t2 = "12:45:54PM";

let r = timeConversion(t2);

console.log(r)