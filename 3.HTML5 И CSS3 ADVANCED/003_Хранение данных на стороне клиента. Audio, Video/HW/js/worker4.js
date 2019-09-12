addEventListener("message", function (e) {
	setTimeout(timerHandler, 4000);

   function timerHandler() {
      console.dir(e);
      let result;

      myWorkerObject = JSON.parse(e.data);

      result = division(myWorkerObject.inp1 , myWorkerObject.inp2)
      postMessage("Воркер-1  успешно завершил вычисления. Результат вычисления = " + result);

   }

   function division(x,y) {
      return x / y ;
   }
});