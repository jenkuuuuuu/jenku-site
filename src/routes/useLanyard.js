import { writable } from 'svelte/store';

function useLanyard(userId) {
  const data = writable(null);

  const fetchPresence = async () => {
    try {
      const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
      const result = await response.json();
      data.set(result.data);
    } catch (error) {
      console.error("Failed to fetch presence data", error);
    }
  };

  fetchPresence();
  const interval = setInterval(fetchPresence, 30000); // Fetch every 30 seconds

  return {
    subscribe: data.subscribe,
    unsubscribe: () => clearInterval(interval)
  };
}

export default useLanyard;
