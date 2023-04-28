//adding event listener on form container
let fsubmit= document.getElementsByClassName("formSuggest")[0];

fsubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit Clicked")
});


