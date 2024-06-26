const userInputFlavor = prompt( //This is what the customer is inputing
    "Please enter some the flavors you would like seperated by commas.",
    "Vanilla,Chocolate,Strawberry"
  );

  const stringListOfFlavors = userInputFlavor.split(","); //This is us breaking the String provided down into an array of string

  //Object tracking the Flavors. We kept it empty because the user will be providing the keys
  let FlavorsWithCount = {
    
  }

  // This is the function for figuring out the flavors and the amounts of them. 
  function setUpFlavors(listOfFlavors){
    
    for(let i =0 ; i < listOfFlavors.length; i++){
        // Making sure if the customer puts in spaces it does not make a mistake and if the customer puts in accidental capitlization it does not make a mistake
        let currentFlavor = listOfFlavors[i].replaceAll(" ", "").toLowerCase(); 
        if(FlavorsWithCount[currentFlavor] == null && currentFlavor != ""){ // Point of currentFlavor !="" is in case customers accidentally add commas so Lemon,,,,Vanilla , Chocolate will be 1 Lemon 1 Vanilla and 1 Chocolate with no empty space on table
            FlavorsWithCount[currentFlavor] = 1;
        }else if(FlavorsWithCount[currentFlavor] != null){
            FlavorsWithCount[currentFlavor] += 1;
        }
        
    }
    return FlavorsWithCount;

  }


  console.table(setUpFlavors(stringListOfFlavors));