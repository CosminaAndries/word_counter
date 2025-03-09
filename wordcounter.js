document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-area");
	const container = document.querySelector(".container_cuvinte");
	  const wordCountElement = document.getElementById("text_afisare_nr_cuvinte");
    const paragraphCountElement = document.getElementById("text_afisare_nr_paragrafe");
    const sentenceCountElement = document.getElementById("text_afisare_nr_propozitii");
	 const upperCaseButton = document.getElementById("upper_case");
	  const lowerCaseButton = document.getElementById("lower_case");
  const SentenceCaseButton = document.getElementById("sentence_case");
         const CapitalizedCaseButton = document.getElementById ("capitalized_case");
		 const trashButton=document.getElementById ("trash");
		 const AlterningCaseButton=document.getElementById ("alternating_case");
		 const InverseCaseButton=document.getElementById("inverse_case");
		 

   textArea.addEventListener("input", function () {
      // Dacă există text în textarea, adaugă clasa 'active' și ascunde placeholder-ul
      if (textArea.value.trim()) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    var text = textArea.value.trim();
     if (text === "") {
            document.getElementById("text_afisare_nr_cuvinte").textContent = "Word Count: 0"; // Dacă nu există text, afișăm 0 cuvinte
        } else {
            var words = text.split(/\s+/).filter(Boolean); // Împărțim textul în cuvinte folosind spațiile ca separator
        wordCountElement.textContent = "Word Count: " + words.length;
  // Actualizarea numărului de propoziții
      const sentences = text.split(/[.!?]+/).filter(Boolean); // Actualizarea pentru a împărți corect propozițiile
            sentenceCountElement.textContent = "Sentence Count: " + sentences.length;
			
      const paragraphs = text.split(/\n+/).filter(Boolean);
        paragraphCountElement.textContent = "Paragraph Count: " + paragraphs.length;
		}
	});
	
	//Functia Sentence Case{
		SentenceCaseButton.addEventListener("click", function(){
		var propozitii;
		   let  text = textArea.value.trim();
		propozitii=textArea.value.split(/([.!?]\s*)/);
		for(let i=0;i<propozitii.length;i++){
			propozitii[i]=propozitii[i].trim();
			if (propozitii[i].length > 0) {
				propozitii[i] = propozitii[i].charAt(0).toUpperCase() + propozitii[i].slice(1).toLowerCase(); 
		}
		}
		textArea.value= propozitii.join("");
		});
		
	
	
	// Functia pentru UperCase
	
	 upperCaseButton.addEventListener("click", function () {
        // Obținem valoarea din textarea
        let text = textArea.value;

        // Schimbăm textul în upper case (toate literele mari)
        text = text.toUpperCase();  // folosim `toUpperCase()` pentru a face textul cu litere mari

        // Actualizăm textarea cu noul text
        textArea.value = text;
		
    });
	
	
	// Functia pentru LowerCase
	 lowerCaseButton.addEventListener("click", function () {
        // Obținem valoarea din textarea
        let text = textArea.value;

        // Schimbăm textul în upper case (toate literele mari)
        text = text.toLowerCase();  // folosim `toUpperCase()` pentru a face textul cu litere mari

        // Actualizăm textarea cu noul text
        textArea.value = text;
    });
	
			CapitalizedCaseButton.addEventListener("click", function () {
        // Obținem valoarea din textarea
		    let text = textArea.value.trim();
			let cuvinte=text.split(/\s+/);
			for(let i =0;i<cuvinte.length;i++){
				if (cuvinte[i].length > 0) {
				cuvinte[i] =cuvinte[i].charAt(0).toUpperCase() + cuvinte[i].slice(1).toLowerCase(); 
			}
			}
			 text = cuvinte.join(" ");
		textArea.value =text;
			
    });
	 trashButton.addEventListener("click", function () {
    // Șterge textul din textarea
    textArea.value = ""; // Resetează textul din textarea
    wordCountElement.textContent = "Word Count: 0";  // Resetează contorul de cuvinte
    sentenceCountElement.textContent = "Sentence Count: 0"; // Resetează contorul de propoziții
    paragraphCountElement.textContent = "Paragraph Count: 0"; // Resetează contorul de paragrafe
});
      
AlterningCaseButton.addEventListener("click", function () {
      let text=textArea.value;
	  let cuvinte=text.split(/\s+/);
	  
	  for(let i =0;i<cuvinte.length;i++){
		  let cuvant_nou="";
				if (cuvinte[i].length > 0) {
					for(let j=0;j<cuvinte[i].length;j++){
					if(j%2==1){
					cuvant_nou+=cuvinte[i].charAt(j).toUpperCase();
				}
				else{
				cuvant_nou+=cuvinte[i].charAt(j).toLowerCase();
	  }
				}
				
	  }
	cuvinte[i]=cuvant_nou;
	  }
	  text=cuvinte.join(" ");
	  textArea.value=text;

	   });
	   
	InverseCaseButton.addEventListener("click", function (){
		 let text=textArea.value;
	  let cuvinte=text.split(/\s+/);
	  const alphabet_litereMici = "abcdefghijklmnopqrstuvwxyz";
	  const  Majuscule="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	  
	 for(let i =0;i<cuvinte.length;i++){
		  let cuvant_nou="";
				if (cuvinte[i].length > 0) {
					for(let j=0;j<cuvinte[i].length;j++){
						let caracter =cuvinte[i].charAt(j);
					if(alphabet_litereMici.includes(caracter)){
					cuvant_nou+=caracter.toUpperCase();
				}
				else if(Majuscule.includes(caracter)){
				cuvant_nou+=caracter.toLowerCase();
	  }
	  else{
	  cuvant_nou+=caracter;
						}
						
				}	
				
	  }
	cuvinte[i]=cuvant_nou;
	  }
	  text=cuvinte.join(" ");
	  textArea.value=text;
	   });
	   });
	 
	 
	 
	
	
	
	
