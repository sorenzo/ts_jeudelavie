import './style.css'

const canvas = document.getElementById("tutorial") as HTMLCanvasElement;

var displayWidth = 50;
var displayHeight = 50;

const test = () => {
  console.log('test')
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  let pixelData = ctx.getImageData(1, 1, 1, 1).data;
  let caseVivante = [];
  let caseMorte = [];

  for (let x = 0; x < displayWidth; x++) {
    for (let y = 0; y < displayHeight; y++) {
      let nbCases = 0;

      for(let i = x-1; i < x+2; i++) {
        for(let j = y-1; j < y+2; j++) {
          
          if(i == x && j == y) {
            continue;
          } else {
            pixelData = ctx.getImageData(x, y, 1, 1).data;
            if(
              (pixelData[0] == 0) &&
              (pixelData[1] == 0) &&
              (pixelData[2] == 0) &&
              (pixelData[3] == 255)
            ) {

              pixelData = ctx.getImageData(i, j, 1, 1).data;

              if(
                (pixelData[0] == 0) &&
                (pixelData[1] == 0) &&
                (pixelData[2] == 0) &&
                (pixelData[3] == 255)
              ) {
                nbCases++;
              }

              
              //console.log(pixelData[0], pixelData[1], pixelData[2], pixelData[3])
            }
          }
        }
      }

      if(
        (pixelData[0] == 0) &&
        (pixelData[1] == 0) &&
        (pixelData[2] == 0) &&
        (pixelData[3] == 255)
      ) {
        if (nbCases == 3){
          caseVivante.push([x, y]);
        } else{
          caseMorte.push([x, y]);
        }
      } else {
        if (nbCases == 3 || nbCases == 2){
          caseVivante.push([x, y]);
        } else {
          caseMorte.push([x, y]);
        }
      }
      
    }
  }
  
  
  
  
  
  /*
      
      for(let i = x-1; i < x+2; i++) {
        for(let j = y-1; j < y+2; j++) {
          
          let pixelData = ctx.getImageData(i, j, 1, 1).data;
          if(
            (pixelData[0] == 0) &&
            (pixelData[1] == 0) &&
            (pixelData[2] == 0) &&
            (pixelData[3] == 255)
          ) {
            console.log(i, j);
            
            //console.log(pixelData[0], pixelData[1], pixelData[2], pixelData[3])
          }
          
          /*
          if(i == x && j == y) {
            continue;
          } else {
            let pixelData = ctx.getImageData(i, j, 1, 1).data;
            if(
              (pixelData[0] == 0) &&
              (pixelData[1] == 0) &&
              (pixelData[2] == 0) &&
              (pixelData[3] == 255)
            ) {
              nbCase++;
              console.log(nbCase, i, j);
              
              //console.log(pixelData[0], pixelData[1], pixelData[2], pixelData[3])
            }
          }

          
        }
      }

      if(
        (pixelData[0] == 0) &&
        (pixelData[1] == 0) &&
        (pixelData[2] == 0) &&
        (pixelData[3] == 0)
      ) {
        if (nbCase == 3 || nbCase == 2){
          caseVivante.push([x, y]);
        } else {
          caseMorte.push([x, y]);
        }
      } else {
        if (nbCase == 3){
          caseVivante.push([x, y]);
        } else{
          caseMorte.push([x, y]);
        }
      }
      */
  
  
  



  for(let i = 0; i < caseVivante.length; i++) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(caseVivante[i][0], caseVivante[i][1], 1, 1);
  }

  for(let i = 0; i < caseMorte.length; i++) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(caseMorte[i][0], caseMorte[i][1], 1, 1);
  }
  
}

const testBtn = document.querySelector('#testBtn') as HTMLCanvasElement 

testBtn.addEventListener('click', test)

window.onload = function() {
  var scale = 3;
  canvas.style.width = displayWidth + 'px';
  canvas.style.height = displayHeight + 'px';
 
  
  console.log('window.onload')
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    ctx.fillRect(25, 25, 1, 1);
    ctx.fillRect(25, 26, 1, 1);
    ctx.fillRect(25, 27, 1, 1);

    /*
    for(let i = 0; i < 2; i++) {
      ctx.fillRect(25, i, 1, 1);
    }
    */
  } else {
    // canvas-unsupported code here
  }
}