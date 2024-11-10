function atualizarRelogio(){
    const relogioElement = document.querySelector('.relogio')
    const horasElement = document.querySelector('.horas')
    const minutosElement = document.querySelector('.minutos')
    const segundosElement = document.querySelector('.segundos')

    const horarioAtual = new Date()

    const horas = horarioAtual.getHours().toString().padStart(2, "0");
    const minutos = horarioAtual.getMinutes().toString().padStart(2, "0");
    const segundos = horarioAtual.getSeconds().toString().padStart(2, "0");

    horasElement.textContent = horas;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;


    console.log(horarioAtual, horas, minutos, segundos)
}

setInterval(atualizarRelogio, 1000);