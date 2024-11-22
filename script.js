function unitConverter(even) {
    even.preventDefault ();

//vi henter ut informajon fra HTML
    const unitInput = parseFloat(document.querySelector("#unitInput").value);
    const unitFrom = document.querySelector("#unitFrom").value;
    const unitTo = document.querySelector("#unitTo").value;

    let displayResult = document.querySelector("#displayResult");

//MM som utgangspunkt
    if (unitFrom === "ML" && unitTo === "CL") {
     displayResult.textContent = unitInput / 10; 
    } else if (unitFrom === "ML" && unitTo === "DL") {
     displayResult.textContent = unitInput / 100;
    } else if (unitFrom === "ML" && unitTo === "L") {
     displayResult.textContent = unitInput / 1000; 
    }else if (unitFrom === "ML" && unitTo === "M3") {
     displayResult.textContent = unitInput / 1000000;

//CL som utgangspunkt
    } else if (unitFrom === "CL" && unitTo === "ML") {
     displayResult.textContent = unitInput * 10;
    }else if (unitFrom === "CL" && unitTo === "DL") {
     displayResult.textContent = unitInput / 10;
    }else if (unitFrom === "CL" && unitTo === "L") {
     displayResult.textContent = unitInput / 100;        
    }else if (unitFrom === "CL" && unitTo === "M3") {
     displayResult.textContent = unitInput / 100000;

//DL som utgangspunkt
    }else if (unitFrom === "DL" && unitTo === "ML") {
     displayResult.textContent = unitInput * 100;   
    }else if (unitFrom === "DL" && unitTo === "CL") {
     displayResult.textContent = unitInput * 10;   
    }else if (unitFrom === "DL" && unitTo === "L") {
     displayResult.textContent = unitInput / 10;
    }else if (unitFrom === "DL" && unitTo === "M3") {
     displayResult.textContent = unitInput / 10000;

//L som utgangspunkt
    }else if (unitFrom === "L" && unitTo === "ML") {
    displayResult.textContent = unitInput * 1000;   
    }else if (unitFrom === "L" && unitTo === "CL") {
    displayResult.textContent = unitInput * 100;   
    }else if (unitFrom === "L" && unitTo === "DL") {
    displayResult.textContent = unitInput * 10;
    }else if (unitFrom === "L" && unitTo === "M3") {
    displayResult.textContent = unitInput /1000; 

//M3 som utgangspunkt
   }else if (unitFrom === "M3" && unitTo === "ML") {
   displayResult.textContent = unitInput * 1000000;   
   }else if (unitFrom === "M3" && unitTo === "CL") {
   displayResult.textContent = unitInput * 100000;   
   }else if (unitFrom === "M3" && unitTo === "DL") {
   displayResult.textContent = unitInput * 10000;
   }else if (unitFrom === "M3" && unitTo === "L") {
    displayResult.textContent = unitInput * 1000;
   }else {

    displayResult.textContent = "Velg konverteringsenheter";
    displayResult.style.color = "orange";
   }
}

const convertBtn = document.querySelector("#convertBtn");
convertBtn.addEventListener("click" , unitConverter)