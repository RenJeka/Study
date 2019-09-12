addEventListener("message", function (e) {

   setTimeout(timerHandler, 2000);

   function timerHandler() {
      console.dir(e);
      let result;

      myWorkerObject = JSON.parse(e.data);

      result = sum(myWorkerObject.inp1 , myWorkerObject.inp2)
      postMessage("Воркер-1  успешно завершил вычисления. Результат вычисления = " + result);

   }

   function sum(x,y) {
      return x + y ;
   }



});