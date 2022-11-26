let rangevalue = document.getElementById("myRange");
let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange")
    //setvalue.innerHTML = rangevalue.value;
    //console.log(rangevalue.value)

//Now will use oninput event.
rangevalue.oninput = function() {
    let getvalue = rangevalue.value;
    setvalue.innerHTML = this.value;
    if (getvalue > 0 && getvalue < 16) {
        imgchangevalue.setAttribute("src", "images/range-slider/0.jpg")
    } else if (getvalue >= 17 && getvalue <= 33) {
        imgchangevalue.setAttribute("src", "images/range-slider/1.jpg")
    } else if (getvalue >= 34 && getvalue <= 49) {
        imgchangevalue.setAttribute("src", "images/range-slider/2.jpg")
    } else if (getvalue >= 50 && getvalue <= 66) {
        imgchangevalue.setAttribute("src", "images/range-slider/3.jpg")
    } else if (getvalue >= 67 && getvalue <= 83) {
        imgchangevalue.setAttribute("src", "images/range-slider/4.jpg")
    } else if (getvalue >= 84 && getvalue <= 99) {
        imgchangevalue.setAttribute("src", "images/range-slider/5.jpg")
    } else if (getvalue >= 100) {
        imgchangevalue.setAttribute("src", "images/range-slider/6.jpg")
    }
}