    const quoteE1 = document.getElementById('quote');
    const authorE1 = document.getElementById('author');
    const btnE1 = document.getElementById('btn');

    const apiURL = "https://quoteslate.vercel.app/api/quotes/random"

    async function getQuote() {
        try{
            btnE1.innerText = "Loading...";
            btnE1.disabled = true;

            const response = await fetch(apiURL);
            const data =  await response.json();

            // Maping API data with the elements 
            quoteE1.innerText = data.quote; // can be written as `"${data.quote}"` to place quotes marks around 
            authorE1.innerText = data.author;
            btnE1.innerText = "Get a Quote";
            btnE1.disabled = false;

        } catch(error){
            quoteE1.innerText = "Check your Internet Connection";
            authorE1.innerText = "Error";
            btnE1.innerText = "Try Again";
            btnE1.disabled = false;
        }
    };
    getQuote();
    btnE1.addEventListener('click', getQuote);
