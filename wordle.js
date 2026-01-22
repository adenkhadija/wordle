// function to control what the user can add to the cell
// limit user input to 1 letter, no number, no special characters 

// “How do I select all .cell elements?”
let cellContent = document.getElementsByClassName('cell');
console.log("collection ", cellContent); 


// loop over HTML COLLECTION 

for(var i = 0; i < cellContent.length; i++){
    cellContent[i].addEventListener('input',updateCell); 
};

function updateCell(e){
    // console.log('e', e); 
    // console.log('e data',e.data);
    // console.log('e target', e.target);
    //console.log('text', e.target.textContent);
    //e.target.textContent

//    cellContent[i]
//     console.log('text content', cellContent[i]); 


    if (e.target.textContent.length > 1){
        e.target.textContent = e.target.textContent[0];  // trim 
        console.log('text', e.target.textContent);

    }; 


}; 