const callendar = document.querySelector('.callendar')

const months = [
  { name: 'january', days: 31, empty: 5, previous: 31 },
  { name: 'february', days: 28, empty: 1, previous: 31 },
  { name: 'march', days: 31, empty: 1, previous: 28 },
  { name: 'april', days: 30, empty: 4, previous: 31 },
  { name: 'may', days: 31, empty: 6, previous: 30 },
  { name: 'june', days: 30, empty: 2, previous: 31 },
  { name: 'july', days: 31, empty: 4, previous: 30 },
  { name: 'august', days: 31, empty: 0, previous: 31 },
  { name: 'september', days: 30, empty: 3, previous: 31 },
  { name: 'october', days: 31, empty: 5, previous: 30 },
  { name: 'november', days: 30, empty: 1, previous: 31 },
  { name: 'decenmber', days: 31, empty: 3, previous: 30 },
]

const dateObject = new Date();
const currentMonth = dateObject.getMonth()
const month = months[currentMonth];
const currentDay = dateObject.getDate();

const setDays = function (object) {
  const days = object.days;
  const emptys = object.empty;
  const previous = object.previous;
  let acc1 = 1;
  let acc2 = 1
  let day = 1;
  console.log(object.name)

  for (i = 0; i < 42; i++) {
    const div = document.createElement('div');
    if (i < emptys) {
      div.textContent = previous - emptys + acc1;   
      div.classList.add('day', 'beyond');
      callendar.append(div);
      acc1++;
    } else if (i < days + emptys) {
      div.textContent = day;  
      div.classList.add(`day${day}`, 'day');
      callendar.append(div);
      day++;
    } else {
      callendar.append(div);
      div.textContent = acc2;
      div.classList.add('day', 'beyond');
      acc2++
    }
  }
}

setDays(month);

const markDay = function (day) {
  const div = document.querySelector(`.day${day}`);
  div.style.backgroundColor = `#ff000077`;
}

markDay(currentDay);


const body = document.querySelector('body');
let monthAccumulator = currentMonth;

body.addEventListener('click', (event) => {
  const days = document.querySelectorAll('.day');
  days.forEach(element => element.remove())

  if (event.target.className === 'next') {
    monthAccumulator++
    const mon = months[monthAccumulator]
    setDays(mon);
  } else if (event.target.className === 'previous') {
    monthAccumulator--;
    const mon = months[monthAccumulator];
    setDays(mon);
  }
})