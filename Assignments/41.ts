let magicians:string[] = ["Adeel","Junaid","Amir","Ahmad","Fahad"];

function make_great(name:string[])
{
    for(let i=0; i < name.length;i++)
    {
        console.log(name[i] = "Congratulation " + name[i]);
    }
    
}

function show_magicians(funName: (name:string[])=> void)
{
     funName(magicians);
}

 show_magicians(make_great);