const visualSearch = document.querySelector('.visualSearch')
const diffGraphs = document.querySelector('.diffGraphs')
const settingsDiv = document.querySelector('.settingsDiv')
const dashSettings = document.querySelector('#dashSettings')

visualSearch.addEventListener('click', () => {
  if(diffGraphs.style.display == 'none'){
    diffGraphs.style.display = 'block';
  }
  else{
    diffGraphs.style.display = 'none';
   }
});
//===========================================//

dashSettings.addEventListener('click', () => {
    if(settingsDiv.style.display == 'none'){
      settingsDiv.style.display = 'block';
    }
    else{
      settingsDiv.style.display = 'none';
     }
  });