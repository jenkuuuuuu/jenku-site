<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import useLanyard from './useLanyard'; // Ensure useLanyard is implemented as shown earlier
  
    let albumArt = writable('');
    let spotifyUrl = writable('');
  
    let presence = useLanyard('323205750262595595');
  
    onMount(() => {
      const unsubscribe = presence.subscribe(value => {
        if (value && value.discord_status === 'online' && value.activities.length > 0) {
          const spotifyActivity = value.activities.find(activity => activity.name === 'Spotify');
          if (spotifyActivity) {
            albumArt.set(value.spotify.album_art_url);
            spotifyUrl.set(`http://open.spotify.com/track/${value.spotify.track_id}`);
          } else {
            albumArt.set(`https://dcdn.dstn.to/app-icons/${value.activities[0].application_id}`);
          }
        }
      });
  
      return () => {
        unsubscribe();
      };
    });
  </script>
  
  {#if $spotifyUrl}
    <a href={$spotifyUrl} class="link">
      <img draggable="false" on:dragstart={() => false} id="get" width="90em" src={$albumArt} class="art"/>
    </a>
  {:else}
    <img draggable="false" on:dragstart={() => false} id="get" width="90em" src={$albumArt} class="art"/>
  {/if}

  <style>
    img{
        margin-top: 0.5em;
        width: 4.5em;
        border-radius: 1em / 1em;
    }
  </style>