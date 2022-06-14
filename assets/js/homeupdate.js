const envStats = document.querySelector('.envStats')
const socStats = document.querySelector('.socStats')
const govStats = document.querySelector('.govStats')
const environ = document.querySelector('#environ')
const soc = document.querySelector('#soc')
const govern = document.querySelector('#govern')
const theRisks = document.querySelector('#theRisks')
const click = document.querySelector('#click')
const orbit = document.querySelector('#orbit')

environ.addEventListener('click', () => {
      envStats.style.display = 'block';
      socStats.style.display = 'none';
      govStats.style.display = 'none';
  });

soc.addEventListener('click', () => {
    envStats.style.display = 'none';
    socStats.style.display = 'block';
    govStats.style.display = 'none';
});

govern.addEventListener('click', () => {
    envStats.style.display = 'none';
    socStats.style.display = 'none';
    govStats.style.display = 'block';
    
  });
  theRisks.addEventListener('click', () => {
    envStats.style.display = 'block';
    socStats.style.display = 'block';
    govStats.style.display = 'block';
});

/*=======================hide orbit=======================*/


  document.getElementById("toggle").checked;
  alert(result);

  