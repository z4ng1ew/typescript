

function logger() {
  let count:number = 0;

  return {
     function() {
     console.log("число " + count);
     count++
    },
  };
};

let  logger1 = logger()
let  logger2 = logger()

logger1.function()
logger1.function()
