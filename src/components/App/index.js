import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import styles from './style.scss';

// const API_PATH = 'https://school-plan-backend-uxklvtebub.now.sh/data';
const API_PATH = 'http://localhost:3005/data';


function createRowObject(tableRows) {
  return {
    startDate: tableRows[1] && tableRows[1].innerText,
    endDate: tableRows[2] && tableRows[2].innerText,
    duration: tableRows[3] && tableRows[3].innerText,
    subject: tableRows[4] && tableRows[4].innerText,
    form: tableRows[5] && tableRows[5].innerText,
    group: tableRows[6] && tableRows[6].innerText,
    place: tableRows[7] && tableRows[7].innerText,
    lecturer: tableRows[8] && tableRows[8].innerText,
    passing: tableRows[9] && tableRows[9].innerText,
    comments: tableRows[10] && tableRows[10].innerText,
  };
}

function parseRows(rows) {
  return [...rows].map((row) => {
    const tds = row.querySelectorAll('td');
    return createRowObject(tds);
  });
}

class App extends Component {
  state = {
    data: [],
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    return axios.get(API_PATH)
      .then(({ data }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const table = doc.querySelector('table.dane');
        const rows = table.querySelectorAll('.dxgvDataRow_Aqua');
        const parsedData = parseRows(rows);
        this.setState({ data: parsedData });
      })
      .catch((error) => {
        console.log('dupa', error);
      });
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>
            <marquee>
              XDDDDDDDDDDD
            </marquee>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
