// selecting =>1st,2nd,3rd input and Parent Division.
const firstInput = document.getElementById('firstFeild');
const secondInput = document.getElementById('secondFeild');
const thirdInput = document.getElementById('thirdFeild');
const parent = document.getElementById('box');

// event to submit Button
btn.addEventListener('click',() => {
    if(firstInput.value && secondInput.value && thirdInput.value){
let btn = document.getElementById('btn');
// removing all things after clicking button to add New elements.
parent.removeChild(firstInput);
parent.removeChild(secondInput);
parent.removeChild(thirdInput);
parent.removeChild(btn);
    
  // condition for Profit. 
    if(+firstInput.value < +thirdInput.value){   
    //  absolute profit.
     let absProfit =  thirdInput.value -firstInput.value;
    //  profit in percentage.
     let percentage = Math.floor(((thirdInput.value - firstInput.value)/firstInput.value)*100);
    //  Heading Division
     let head = document.createElement('h4');
     head.innerHTML = 'PROFIT';
     head.style = 'color : green';
     head.classList.add('heading');
     parent.appendChild(head);
    //  Creating div elemet to add to show profit.
     message = document.createElement('div');
     message.innerHTML = `🎉Profit In Rs: ${absProfit}Rs And Profit In % : ${percentage}%🎉`
     message.classList.add('profit')
     parent.appendChild(message);
    //  creating Element img  to add Profit GIF.
     let profit = document.createElement('img');
     profit.setAttribute('src','images/1.gif');
     profit.classList.add('gif');
     parent.appendChild(profit);
    
    // if Both values are same.
    }else if(firstInput.value == thirdInput.value){
        let equal = document.createElement('div');
        equal.innerHTML = "NO LOSS ! NO PROFIT ! 😊";
        equal.classList.add('profit');
        parent.appendChild(equal);

        // condition for LOSS.
    }else{
        // absolute loss.
        let absLoss = firstInput.value - thirdInput.value;
        // loss in percentage.
        let lossPercent = Math.floor(((firstInput.value - thirdInput.value)/thirdInput.value)*100);
        // Element for Heading.
        let heading = document.createElement('h4');
        heading.innerHTML = "LOSS";
        heading.classList.add('heading')
        parent.appendChild(heading);
        // Div element to show LOSS.
        let lossmessage = document.createElement('div');
        lossmessage.innerHTML = `😑Loss In Rs: ${absLoss}Rs And Loss In % : ${lossPercent}%😑`;
        lossmessage.classList.add('profit');
        parent.appendChild(lossmessage);
        // Element img  for appending GIF for LOSS.
        let loss = document.createElement('img');
        loss.setAttribute('src','images/2.gif');
        loss.classList.add('gif');
        parent.appendChild(loss);
      

        // If loss is Greater than 50%
        if(lossPercent >= 50){
            // removed loss GIF to not Intrrupt while Showing Big lOSS GIF.
            parent.removeChild(heading);
            parent.removeChild(lossmessage);
            parent.removeChild(loss);

            // Creating Element To add Big loss Title.
            let bLoss = document.createElement('div');
            bLoss.innerHTML = "😫BIG LOSS😫";
            bLoss.classList.add('heading');
            bLoss.style ="font-weight: 900"
            parent.appendChild(bLoss);
            // img Element to add Big loss Sad GIF.
            let bigLoss = document.createElement('img');
            bigLoss.setAttribute('src','images/4.gif');
            bigLoss.classList.add('gif');
            parent.appendChild(bigLoss);
            
        }
}
    }else{
        alert('All feilds are mandatory')
    }
}) 
