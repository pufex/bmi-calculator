const m = document.querySelector('#mass');
const h = document.querySelector('#height');

const result = document.querySelector('.result');
const btn = document.querySelector('#button');
const header = document.querySelector('#your-bmi');
const des1 = document.querySelector('#des-1');
const des2 = document.querySelector('#des-2');
const english = document.querySelector('#english');
const polish = document.querySelector('#polish');

english.addEventListener('click', () => {
    header.textContent = "BMI Calculator";
    m.placeholder = 'Weight';
    h.placeholder = 'Height';
    btn.textContent = 'Calculate';
    des1.textContent = "Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.";
    des2.textContent = "Enter weight and height in the fields below and click the button.";
})

polish.addEventListener('click', () => {
    header.textContent = "Twoje BMI";
    m.placeholder = 'Masa';
    h.placeholder = 'Wysokość';
    btn.textContent = 'Oblicz';
    des1.textContent = "Wskaźnik BMI (body mass index) wyraża stosunek indywidualnej masy ciała do wzrostu, którego wynik może pomóc nam w odpowiedzi na pytanie “Czy moja masa ciała jest właściwa?”";
    des2.textContent = "Wprowadź masę w kilogramach i wysokość w centymetrach:";
})



btn.addEventListener('click', () => {
  if(m.value <= 0 || h.value <= 0) {
    result.textContent = 'Wprowadź poprawne dane.';
    result.classList.add('error');
    return;
  }
  
  result.classList.remove('error');
  const mass = parseFloat(m.value);
  const height = parseFloat(h.value);
  const bmi = (mass/(height/100 * height/100)).toFixed(2);
  switch(true) {
    case bmi < 18.5:
      result.textContent = `BMI - ${bmi}. Niedowaga`;
      break;
    case bmi > 18.5 && bmi < 25:
      result.textContent = `BMI - ${bmi}. Waga prawidłowa`;
      break;
    case bmi > 25 && bmi < 30:
      result.textContent = `BMI - ${bmi}. Nadwaga`;
      break;
    case bmi > 30:
      result.textContent = `BMI - ${bmi}. Otyłość`;
      break;
  }
})




