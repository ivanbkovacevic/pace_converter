 let bmin=0;
      let bsec=0;

      document.querySelectorAll('#m').forEach( function(el) {    
          el.addEventListener('click', function() {
            bmin=document.querySelector('#bmin').innerText = el.textContent;
            calculate()
          });
      });

      document.querySelectorAll('#s').forEach( function(el) {    
          el.addEventListener('click', function() {
            bsec=document.querySelector('#bsec').innerText = el.textContent;
            calculate()
          });
      });
     
      if(bmin!==0 ){

      }

      function calculate(){
            var minutes=  Number(bmin); 
            var seconds= Number(bsec); 
            var kmhCalculated= 3600/(minutes*60 + seconds);
                kmhCalculated= kmhCalculated.toFixed(2);
            var milhCalculated= kmhCalculated*0.62137;
                milhCalculated=milhCalculated.toFixed(2)
            var kmh= document.querySelector('#kmh'); 
            var milh= document.querySelector('#milh'); 
         
                kmh.innerHTML =kmhCalculated;
                milh.innerHTML = milhCalculated;
    
             console.log(minutes)
             console.log(seconds)
             console.log(kmhCalculated)
             console.log(bmin)
             console.log(bsec)
         }