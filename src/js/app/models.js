import { API } from './settings';

export default class Search {
  constructor(query) {
    this.query = query;
    this.URL = `${API.ENDPOINT}?apiKey=${API.KEY}&apiPass=${API.PASS}`;
  };

  async flightInformation() {
    const area = `&area=aero&IcaoCode=SBMT`;
    // const area = `&area=aero&IcaoCode=${this.query}`;

    try {
      const getData = await fetch(`${this.URL}${area}`);
      const data = await getData.text();
      this.data = data;

      console.log(`${this.URL}${area}`);

      console.log('query', this.query);
      console.log('getData', getData);
    } catch (error) {
      console.log(`API Error: ${error}`);
      alert(`API Error: ${error}`);
    }

    const parser = new DOMParser();
    // const doc = parser.parseFromString(data, "text/html");
    // data = doc.querySelector('.main');
    // data = data.querySelector('.breadcrumb').remove();

  };
};
