const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumBtn = document.querySelector(".check-number");
const outputBox = document.querySelector(".msg");

checkNumBtn.addEventListener('click', checkbirthDateIslucky);

function checkbirthDateIslucky(){
    const dob =dateOfBirth.value;
    const sum =calculateSum(dob);
    if(dob && luckyNumber){
        compareValues(sum,luckyNumber.value);
    }else{
        outputBox.innerText="Please enter both the fields."
    }
}



/*sum calculation*/
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}

/*comparing sum and number*/
function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Your birthday is lucky 😃🎉👏";
    }else{

        outputBox.innerText="Your birthday is not lucky, You workhard to make your own luck 🙂";
    }
}