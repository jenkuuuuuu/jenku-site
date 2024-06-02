<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import useLanyard from './useLanyard';
  
    const activity = writable('');
    const playing = writable('');
    const spotifyUrl = writable('');
  
    const presence = useLanyard('323205750262595595');
  
    onMount(() => {
      const unsubscribe = presence.subscribe(value => {
        console.log("Presence data:", value); // Added for debugging
        if (value && value.discord_status === 'online' && value.activities.length > 0) {
          const spotifyActivity = value.activities.find(activity => activity.name === 'Spotify');
          if (spotifyActivity) {
            activity.set(value.spotify.song);
            playing.set("Listening to");
            spotifyUrl.set(`http://open.spotify.com/track/${value.spotify.track_id}`);
          } else {
            activity.set(value.activities[0].name);
            playing.set("Currently playing");
          }
        } else {
          playing.set("Doing");
          activity.set('nothing');
        }
      });
  
      return () => {
        unsubscribe();
      };
    });
  </script>
  
  <div class="name">
    <span id="playing"><h2>{$playing}</h2></span>
  </div>
  <div class="game">
    {#if $spotifyUrl}
      <a href={$spotifyUrl} class="link">
        <span id="activity">{$activity}</span>
      </a>
    {:else}
      <span id="activity">{$activity}</span>
    {/if}
  </div>

  