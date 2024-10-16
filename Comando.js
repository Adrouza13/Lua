<script>
  const audio = document.getElementById('Músicas/Um Dia Te Levo Comigo (Ao Vivo).mp3');
  audio.volume = 0.5; // Define o volume para 50%
</script>

const botao = document.querySelector('button');
const lista = document.querySelector('.lista-lado');

botao.addEventListener('mouseover', () => {
  lista.style.display = 'block';
});

botao.addEventListener('mouseout', () => {
  lista.style.display = 'none';
});