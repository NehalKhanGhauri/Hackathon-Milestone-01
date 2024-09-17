const toggle_Button = document.getElementById('toggle-button') as HTMLButtonElement
const workExperience = document.getElementById('work-expeience') as HTMLElement

toggle_Button.addEventListener('click', () => {
    if(workExperience.style.display === 'none') 
    {workExperience.style.display = 'block'}

    else{
        workExperience.style.display ='none'
    }
})