const index = document.getElementById('index')
const updateClock = () => {
  const now     = new Date();
  const hours   = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedHours   = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  const dateElement    = document.getElementById('date');
  const messageElement = document.getElementById('message');
  const timeElement    = document.getElementById('time');
  const dateString = formatDate(now);

  dateElement.innerText    = dateString;
  timeElement.innerText    = timeString;
  
  if (!index) {
    const message = getMessage(hours);
    messageElement.innerText = message;
  }
}

const formatDate = (date) => {
  const day   = date.getDate();
  const month = date.getMonth() + 1;
  const year  = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}

const getMessage = (hours) => {
  if (hours >= 0 && hours <= 7) {
      return "Vete a la cama ya !!!";
  } else if (hours > 7 && hours <= 12) {
      return "Buenos días, la que te espera !!!";
  } else if (hours > 12 && hours <= 14) {
      return "Tengo hambre, y tu?";
  } else if (hours > 14 && hours <= 16) {
      return "Siesta !!!";
  } else if (hours > 16 && hours <= 18) {
      return "5´ mas y paro !!!";
  } else if (hours > 18 && hours <= 22) {
      return "No te van a pagar estas horas...";
  } else {
      return "Buenas noches,  apaga y vámonos !!!";
  }
}

setInterval(updateClock, 1000);
updateClock();