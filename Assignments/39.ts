function make_album(name:string, title:string, track?:number): string
{
    let result:string;
    if(track != null)
    result ="Artis: " + name + " Album: " + title + " Track " + track;
    else
    result = "Artis: " + name + " Album: " + title;

    return result;
    
}

console.log(make_album("Atif Aslam","Album 1"));
console.log(make_album("Ali Zafar","Album 3"));
console.log(make_album("Hadiqa Kiani","Album 5",3));
