




function generate(){
    let quotes = {
        "-Confucius":'"I hear and I forget. I see and I remember. I do and I understand."',
        "-Confucius":'"It does not matter how slowly you go as long as you do not stop."',
        "-St. Jerome":'"Good, better, best. Never let it rest. Til your good is better and your better is best."',
        "-Nelson Mandela":'"It always seems impossible until its done."',
        "-Bo Jackson":'"Set your goals high, and dont stop till you get there."',
        "-Eleanor Roosevelt":'"With the new day comes new strength and new thoughts."',
        "-Charles R. Swindoll":'"Life is 10% what happens to you and 90% how you react to it."',
        "-Samuel Beckett":'"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."',
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()*authors.length)]
    
    let quote = quotes[author];
    
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

}