const url = "https://dummyjson.com/products";

async function loadData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.err(err);
    }
}

loadData();