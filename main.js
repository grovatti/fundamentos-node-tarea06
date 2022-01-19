 
const yargs = require('yargs')
    .option(
        'b',{
            alias:'base',
            type:'number',
            demandOption: true,
            describe: 'Parametro Base (entre 1 y 20)',
            }
        )
    .check( (argv,options) => {
        if(isNaN(argv.b)){throw '"Base" no es un numero';}
        else {return true;} 
    })
    .check( (argv,options) => {
        if(!(argv.b>0 && argv.b < 21)){throw '"Base" debe estar entre 1 y 20';}
        else {return true;}

    })
    .argv;

const argv = process.argv;
console.log(yargs.base);
