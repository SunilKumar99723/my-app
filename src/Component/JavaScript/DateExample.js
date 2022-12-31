///Date Objects

const d = new Date(); // Date objects are static. The "clock" is not "running".
console.log(" current date and time-- " +d)

const d1 = new Date("2022-03-25"); //The computer clock is ticking, date objects are not.
console.log(" setted date and time-- " +d1)

/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/