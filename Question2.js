process.stdin.resume();
process.stdin.setEncoding("utf-8");
var std_inputs = '';
process.stdin.on('data', function(input) {
    std_inputs += input;
});

process.stdin.on('end', function() {
    main(std_inputs);
});

function main(input) {
    var input_array = input.split('\n');
    var No_TestCases = input_array[0];

    for(var k = 1; k<=(No_TestCases * 2); k = (k+2) ) {
        let binSort = [], bin = [], No_Tasks = [];

     //   No_Days = input_array[k];
        No_Tasks = input_array[k + 1].split(' ');
        
        for (i in No_Tasks) {
            // let binary = [], count = 0, b;
            // b = Number(No_Tasks[i]).toString(2);
            
            // binary = b.split('');
    
            // for (let j = 0; j< binary.length;j++) {
            //     if (binary[j] == '0') count++;
            // }
            // bin.push(count);
            bin.push((Number(No_Tasks[i]).toString(2).match(/0/g) || []).length);
        }
    
        binSort = bin.concat();
        //binSort.sort().reverse();
        binSort.sort(function(a, b){return b - a}); 
        let leng=binSort.length;
        for (let i=0;i<No_Days;i++) {
            for (let j=0;j<leng-i+1;j++) {
                if (binSort[i] == bin[j]) {
                    binSort[i] = No_Tasks[j];
                    bin.splice (j, 1);
                    No_Tasks.splice (j, 1);
                    break;
                }
            }
        }
        console.log(binSort.join(' '));
    }
    
}
