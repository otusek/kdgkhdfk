function updateTime() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();


    const formattedDate = `${year}-${month}-${day}`;
    const formattedDateTime = `Czas: ${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;

    document.getElementById("DateToday").textContent = formattedDate;
    document.getElementById('time-display').textContent = formattedDateTime;
}

setInterval(updateTime, 10);

const dane = document.getElementById('ArrowDown');
const danev2 = document.getElementById('ArrowUp');
const dodatkoweDane = document.getElementById('DaneDodatkowe');

function TwojeDaneDodatkowePokaz() {
dane.style.display = 'none';
danev2.style.display = 'flex';
dodatkoweDane.style.display = 'flex';
}


function TwojeDaneDodatkoweUkryj() {
    dane.style.display = 'flex';
    danev2.style.display = 'none';
    dodatkoweDane.style.display = 'none';
}