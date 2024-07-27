//================= Coding Challange # 3 =====================

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector("textarea").value = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

let button =document.querySelector('button');

//1 Do by My Selft

button.addEventListener('click', function () {
        console.log("By Me")
        const text = document.querySelector('textarea').value;
        let textArray = text.split("\n")
        console.log(textArray)

        for(let [i,row] of textArray.entries()){
                //console.log(row)
                //console.log(row.slice(row.indexOf("_")+1))

                let valueAfter_ = row.slice(row.indexOf("_")+1);
                let correctString = valueAfter_[0].toUpperCase()+valueAfter_.slice(1).toLowerCase()
                //console.log(correctString)

                let valueBefor_ = row.slice(0,-valueAfter_.length-1).toLowerCase();
                let completValue = valueBefor_.concat(correctString)
                let count = i;
                console.log(`${completValue.padEnd(20,' ')}  ${'✅'.repeat(++count)}`)
        }

        console.log("\n")
})

//1 Do by teacher
button.addEventListener('click', function () {
        console.log("By teacher")

        const text = document.querySelector('textarea').value;
        let rows = text.split("\n")

        for(let [i,row] of rows.entries()){
                let [first,second] = row.toLowerCase().trim().split("_");
                let outpu = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
                let count = i;
                console.log(`${outpu.padEnd(20)}  ${'✅'.repeat(++count)}`)
        }
        console.log("\n")
})