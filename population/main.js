function start() {  
  var numOfMom = prompt('number of mother');
  var boy = 0;
  var girl = 0;

  for (let i = 0; i < numOfMom; i++) {
    while (Math.floor(Math.random() * 2 < 1)) {
      girl = girl + 1;
      console.log("it is a girl")
    } 
      boy = boy + 1;
      console.log("it is a boy")
  };

  document.write(`number of boy ${boy}`);
  document.write('<br>');  
  document.write(`number of girl ${girl}`);
  document.write(`<br>`);
  document.write('ratio' + girl/boy)
}