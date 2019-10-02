import { API } from './settings';

export default class Search {
  constructor(query) {
    this.query = query;
    this.URL = `${API.ENDPOINT}?apiKey=${API.KEY}&apiPass=${API.PASS}`;
  };

  async flightLetters() {
    const area = `&area=cartas&icaoCode=${this.query}`;
    try {
      const getData = await fetch(`${this.URL}${area}`);
      const data = await getData.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "application/xml");

      const items = doc.querySelectorAll('item');

      this.dataLetters = getXMLItems(items);
    } catch (error) {
      alert(`API Error: ${error}`);
    }
  };

  async sunriseSunset() {
    const area = `&area=sol&icaoCode=${this.query}`;
    try {
      const getData = await fetch(`${this.URL}${area}`);
      const data = await getData.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "application/xml");

      const items = doc.querySelectorAll('day');

      this.dataSunriseSunset = getXMLItems(items);
    } catch (error) {
      alert(`API Error: ${error}`);
    }
  };

  async meteorology() {
    const area = `&area=met&icaoCode=${this.query}`;
    try {
      const getData = await fetch(`${this.URL}${area}`);
      const data = await getData.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "application/xml");

      const items = doc.querySelectorAll('met');
      
      this.dataMeteorology = getXMLItems(items);
    } catch (error) {
      alert(`API Error: ${error}`);
    }
  };
};

const getXMLItems = node => {
  const listData = [];
  node.forEach(e => {
    const data = {};

    e.childNodes.forEach(e => {
      if (e.innerHTML !== undefined && e.innerHTML.length > 0) {
        if (e.nodeName === 'link' || e.nodeName === 'nome') {
          data[e.nodeName] = e.innerHTML.split('[')[2].split(']')[0];
        } else {
          data[e.nodeName] = e.innerHTML;
        }
      }
    });
    listData.push(data);
  });
  return listData;
};
