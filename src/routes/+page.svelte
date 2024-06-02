<script>
  import LanyardStuff from './lanyardStuff.svelte';
  import AlbumArt from './AlbumArt.svelte';

  let spellings = ['jenku', 'njenku', 'njeku', 'jenlu', 'njeknu', 'jeknun', 'jenkins', 'kenlu', 'jalapeno', 'jackal', 'janky', 'jnkue', 'jonku', 'jeky', 'nkey', 'keyboard', 'junke', 'uknej', 'jekun', 'jenky', 'j_nk'
    , 'jenkuuu', 'jekn', 'junk', 'jonks', 'j4n2k', 'jenga', 'j3nk', 'juvenile', 'june', 'junle', 'jack', 'juank', 'jeuku', 'junk', 'juggle', 'the jenker', 'the jonker', 'cryptid', 'kas'];

  let currentSpelling = '';
  let typingInterval;

  function getRandomSpelling() {
    const randomIndex = Math.floor(Math.random() * spellings.length);
    return spellings[randomIndex];
  }

  function typeSpelling(newSpelling) {
    let index = 0;
    let backspacing = false;
    currentSpelling = '';
    
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
      if (backspacing) {
        if (currentSpelling.length > 0) {
          currentSpelling = currentSpelling.slice(0, -1);
        } else {
          backspacing = false;
          clearInterval(typingInterval);
          typeSpelling(getRandomSpelling());
        }
      } else {
        if (index < newSpelling.length) {
          currentSpelling += newSpelling.charAt(index);
          index++;
        } else {
          backspacing = true;
        }
      }
    }, 200);
  }

  typeSpelling(getRandomSpelling());
</script>

<style>
  @import './styles.css';
</style>

<body>
  <div class="header">
    <div class="margin">
      <h1>Hi Im</h1>
        <h1 id="name">{currentSpelling}</h1>
      <div class="ash">
      <img src="/jenks/sitting.png" class="jenker" />
    </div>
    </div>
  </div>
  

  <div class="info">
    <div>i draw and allat</div> +
    <div>i collect nintendo consoles</div>
    <hr class="redSeperator1">

    <div class="AHSHASDJDA">
      <div class="consoles">
        <ul>
          <li>NES</li>
          <li>SNES</li>
          <li>N64</li>
          <li>GameCube</li>
          <li>Wii</li>
          <li>Wii U</li>
          <li>Switch</li>
          <li>Switch Lite</li>
          <li>GameBoy</li>
          <li>GameBoy Pocket</li>
          <li>GBA</li>
          <li>GBA SP</li>
          <li>DS PHAT</li>
          <li>DS Lite</li>
          <li>DSi XL</li>
          <li>2DS</li>
          <li>3DS</li>
        </ul>
      </div>

      <div class="socials">
        <a href="https://github.com/jenkuuuuuu" target="_blank">github</a>
        <a href="https://twitter.com/jenkiest" target="_blank">twitter</a>
        <a href="https://discord.com/users/323205750262595595" target="_blank">discord</a>
      </div>

      <div class="separator"></div>

      <div class="activity">
        <LanyardStuff />
        <AlbumArt />
      </div>
    </div>

    <hr class="redSeperator">

    <div class="looker">
      <img src="/jenkylook.png"/>
    </div>
  </div>

</body>
