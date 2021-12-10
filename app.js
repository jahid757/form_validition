const inputData = [];

// Catch value from every input field

function catchValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    if(value === '' || value === null){
        document.getElementById(id).focus();
        const error = document.getElementById(`${id}_error_msg`);
        error.style.display = 'block';
    }else{
        inputData.push({[input.name]:value});
    }
}

const idArray = ['fName','lName','email','dateOfBirth','address','schoolAttend','schoolFinishYear','greadAchieve','interestedCourse'];


document.getElementById('formSubmit').addEventListener('click',(e) =>{
     e.preventDefault();
    for (let i = 0; i < idArray.length; i++) {
        catchValue(idArray[i])
    }
    console.log(inputData);
});
