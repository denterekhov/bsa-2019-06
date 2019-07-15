const ENDPOINT = 'https://api.myjson.com/bins/1hiqin';

export const api = {
  messages: {
    async fetchMessages() {
      const response = await fetch(ENDPOINT);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    }
  }
}