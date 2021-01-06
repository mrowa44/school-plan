import React, { Component } from 'react';
import 'moment/locale/pl';

import { fetchData } from 'utils/apiHelper';
import MainScreen from 'components/MainScreen';
import Spinner from 'components/Spinner';

import styles from './style.scss';

const STORAGE_KEY = 'planData';

class App extends Component {
  state = {
    data: JSON.parse(localStorage.getItem(STORAGE_KEY)) || null,
    isFreshDataFetched: false,
  }

  componentWillMount() {
    fetchData()
      .then((data) => {
        this.setState({ data, isFreshDataFetched: true });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      });
  }

  render() {
    const { data, isFreshDataFetched } = this.state;
    return (
      <div className={styles.app}>
        <main>
          {data ?
            <MainScreen data={data} isFreshDataFetched={isFreshDataFetched} />
            :
            <Spinner />
          }
        </main>
      </div>
    );
  }
}

export default App;
