const scopeDropDown = document.querySelector('.scopeDropDown')
const myScope = document.querySelector('.myScope')

myScope.addEventListener('click', () => {
  if(scopeDropDown.style.display == 'none'){
    scopeDropDown.style.display = 'block';
  }
  else{
    scopeDropDown.style.display = 'none';
   }
});
//==================================

