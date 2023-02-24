import React  from "react";

const App = () => {
  function checkPrime(n) {
    var i,
      flag = true;
    if (n < 2) return false;
    for (i = 2; i <= n - 1; i++)
      if (n % i === 0) {
        flag = false;
        break;
      }
    if (flag === true) return true;
    return false;
  }
  return(
    <div>
    hello
      {Array(32).fill("").map((e,i)=>{
        return(
          <div
            style={{
              height:"50px",
              width:"50px",
              border:"1px solid red",
              backgroundColor:checkPrime(i)?"red" : i%2===0? "green" : "yellow",

            }}
            >
            {i}
          </div>
        );
      })}
    </div>
  )
};
export default App;
