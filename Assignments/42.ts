let magicians:string[] = ["Adeel","Junaid","Amir","Ahmad","Fahad"];
let magicians2:string[] = [];

function make_great(name:string[], secondArray:string[])
{
    for(let i=0; i < name.length;i++)
    {
        console.log(name[i]);
    }
    console.log("<================================>");
    
    for(let i=0; i < secondArray.length;i++)
    {
        console.log("Greate " + name[i]);
    }
    
}

function show_magicians(funName: (name:string[],name2:string[])=> void)
{
    magicians.forEach(val => magicians2.push(Object.assign({},val)));
     funName(magicians, magicians2);
}

 show_magicians(make_great);