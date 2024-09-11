//block and its dimensions
const testBlock = document.getElementById("testblock");
//button that triggers all changes set by the inputs
const saveBtn = document.getElementById("save");
//numberinput for width and height
const setHeight = document.getElementById("blockheight");
const setWidth = document.getElementById('blockwidth');



//function runs whenever user clicks the save changes button, all blocks from this point will be this height unless changed
function updateBlockHeightChange(){
    saveBtn.addEventListener("click",()=>{ //runs whenever user clicks save
    defaultBlockHeight = "100px" //default height of the block
    newBlockHeightInput = setHeight.value; //stores the value of input into a new readable variable
    testBlock.style.height=newBlockHeightInput+"px"; //appends px at the end of the raw height value to make actual changes happen.
        })
    }
//function same thing above exept for width!
function updateBlockWidthChange(){
    saveBtn.addEventListener("click",()=>{
    defaultBlockWidth = "100px"
    newBlockWidthInput = setWidth.value;
    testBlock.style.width=newBlockWidthInput+"px";
    })
}
//resets all values to their defaults 
//function resetEverything(){
//    testBlock.style.height=defaultBlockWidth;
//    testBlock.style.height=defaultBlockHeight;
//}





//function that will save all inputs and actually enact the changes.
function listenForSave() {
    saveBtn.addEventListener("click", () => {
        
        
      });
    }
//function that runs all functions in the entire program, at the bottom of the javascript file.
function executeProgram(){
    listenForSave();
    updateBlockHeightChange();
    updateBlockWidthChange();
}


executeProgram();