// Capturando o botão Iniciar
const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
   // Capturando hora, minuto e segundo
   const hours = document.getElementById('hour');
   const minutes = document.getElementById('minute');
   const seconds = document.getElementById('second');

   // Convertendo tudo para segundos.
   // OBS: O .value retorna string. Use o parseInt() para converter string para inteiro 
   let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

   // Capturando o elemento onde o tempo será exibido
   display =  document.getElementById('timer'); // Por que não usar const ou let aqui? R: Porque a variável display será usada em outra função (escopo diferente) e por isso precisa ser global.

   // Iniciando o timer
   timer(duration, display);
})

// Função timer
const timer = (duration, display) => {
   let timer = duration;
   let hours, minutes, seconds;

   // A função setInterval() executa uma função a cada intervalo de tempo (em milissegundos)
   let interval = setInterval(() => {
      // Calculando horas, minutos e segundos
      hours = Math.floor((timer / 60) / 60);
      minutes = Math.floor(timer / 60 - (hours * 60));
      seconds = Math.floor(timer % 60);

      console.log(timer);      

      // Exibindo o tempo no formato HH:MM:SS, sempre com dois dígitos
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // Alterando o display a cada segundo, mudando o conteúdo do elemento HTML
      display.innerHTML = `${hours}:${minutes}:${seconds}`;

      timer -= 1;

      if (timer < 0) {
         display.innerHTML = 'ACABOU!!!'
         clearInterval(interval);
      }
   }, 1000);
}
