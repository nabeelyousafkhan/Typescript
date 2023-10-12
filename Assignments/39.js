function make_album(name, title, track) {
    let result;
    if (track != null)
        result = "Artis: " + name + " Album: " + title + " Track " + track;
    else
        result = "Artis: " + name + " Album: " + title;
    return result;
}
console.log(make_album("Atif Aslam", "Album 1"));
console.log(make_album("Ali Zafar", "Album 3"));
console.log(make_album("Hadiqa Kiani", "Album 5", 3));
export {};
