function changeBG() {
    var colors = document.querySelectorAll(".color")
    for (let index = 0; index < colors.length; index++) {
        colors[index].style.backgroundColor = colors[index].innerText        
    }
}

async function getData(params) {
    var response = await fetch("https://api.github.com/users/dev-marisa")
    var data = response.json()
    console.log(data);
}

getData()


function scale(ele,value) {
    console.log(ele);
    ele.style.transform= "scale( " + value + ")";
}

// TODO:@rawan . create function to return hello world 