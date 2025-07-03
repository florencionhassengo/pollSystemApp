
const options = [
    { id: 'option1', text: 'JavaScript', votes: 0 },
    { id: 'option2', text: 'Python', votes: 0},
    { id: 'option3', text: 'Java', votes: 0},
    { id: 'option4', text: 'C#', votes: 0}
];

function submitVote(){
    selectedOption = document.querySelector('input[name="poll"]:checked');
    console.log(selectedOption.value);

    if(selectedOption) {
        alert("Por favor seleccione uma opcao.");
        return
    }
}

