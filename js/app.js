
function gen() {
    return fetch("https://type.fit/api/quotes")
    .then(resp => resp.json())
    .then((resp)=>{
    let ranInt = Math.floor(Math.random() * (resp.length-1))
    let text = document.querySelector(".text")
    let auth = document.querySelector(".author")
    let quoteObj = resp[ranInt]
    text.textContent = `❝${quoteObj.text}❞`
    if(quoteObj.author != null) {
        auth.textContent = `-${quoteObj.author}`
    }
})}
async function img() { 
    let con = document.querySelector(".container");
    con.src = ``
    let imgArr = [
        "https://source.unsplash.com/random?peace",
        "https://source.unsplash.com/random?chill",
        "https://source.unsplash.com/random?aqua",
        "https://source.unsplash.com/random?scifi",
        "https://source.unsplash.com/random?loove",
        "https://source.unsplash.com/random?chill",
        "https://source.unsplash.com/random?food",
        "https://source.unsplash.com/random?asthetic",
        "https://source.unsplash.com/random?sky",
        "https://source.unsplash.com/random?train",
        "https://source.unsplash.com/random?india",
        "https://source.unsplash.com/random?random",
        "https://source.unsplash.com/random?science"
    ]
    let ranInt = Math.floor(Math.random() * (imgArr.length-1))
    let set = () => {return new Promise((y,n) => {
        con.style.background = `url(${imgArr[ranInt]})`
        y()
    })}
    await set()
}

   

document.querySelector("#button").onclick = () => {
    promiseFullFiledChecker()
}
function shot() {
    let a = document.querySelector("#download")
    let con = document.querySelector(".container");
    domtoimage.toPng(con)
 .then((dataUrl) => {
    a.setAttribute("href", dataUrl)
 })
}
function promiseFullFiledChecker() {
    let stagea = gen()
    let stageb = img()
    let allSet = Promise.all([stagea, stageb])
    allSet.then(() => {
        shot()
    })
    }
    promiseFullFiledChecker()
