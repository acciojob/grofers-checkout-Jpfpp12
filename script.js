const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
  let prices = document.getElementsByClassName("price"); 
  let sum = 0;
  
  for (let index = 0; index < prices.length; index++) {
    sum += parseFloat(prices[index].innerText) || 0; 
  }
  
  alert("Total Price: " + sum); 
};

getSumBtn.addEventListener("click", getSum);
