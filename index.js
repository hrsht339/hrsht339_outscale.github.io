let headin = document.querySelector("#headin")
let quote = document.querySelector("#quote")
let body = document.querySelector("body")

const searchParams = new URLSearchParams(window.location.search)

if(searchParams.has("ip")){
    let ip = searchParams.get("ip")
    let date = new Date()
    let hours = date.getHours()
    let text =""
    if(hours>=5 && hours<12){
        text+="Good Morning "
        body.style.backgroundImage=`url("../morning.jpg")`
        quote.innerText="Morning is nature's way of reminding us that every day is a new canvas waiting to be painted with the brushstrokes of possibility and opportunity."
    }
    else if(hours>=12 && hours<18){
        text+="Good Afternoon "
        body.style.backgroundImage=`url("../afternoon.jpg")`
        body.style.color="yellow"
        quote.innerText="Afternoon is a gentle embrace between the hustle of the morning and the calm of the evening—a moment to catch your breath and savor the warmth of the day's journey."
    }
    else{
        text+="Good Night "
        body.style.backgroundImage=`url("../night.jpeg")`
        body.style.color="whitesmoke"
        quote.innerText="In the stillness of the night, the world whispers its secrets, and dreams unfold like constellations in the vast canvas of the sky, painting the darkness with the magic of possibilities."
    }

    if(ip[ip.length-1]=="0"){
        text+="America..."
    }
    else if(Number(ip)%2==0){
        text+="England..."
    }
    else if(Number(ip) && Number(ip)%2!=0){
        text+="India..."
    }

    headin.innerText = text
}


