/* eslint-disable */
import React, { Component } from 'react';
import 'moment/locale/pl';

import { fetchData } from 'utils/apiHelper';
import MainScreen from 'components/MainScreen';
import Spinner from 'components/Spinner';

import styles from './style.scss';

const STORAGE_KEY = 'planData';

class App extends Component {
  constructor() {
    super();
    const storedJSON = localStorage.getItem(STORAGE_KEY);
    const isStoredDataValid = storedJSON && storedJSON !== 'undefined';
    const storedData = isStoredDataValid ? JSON.parse(storedJSON) : null;
    this.state = {
      data: storedData,
      isFreshDataFetched: false,
    };
  }

  componentWillMount() {
    fetchData()
      .then((data) => {
        this.setState({ data, isFreshDataFetched: true });
        if (data) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
      });
  }

  render() {
    const { data, isFreshDataFetched } = this.state;
    return null;
    // return (
    //   <div className={styles.app}>
    //     <main>
    //       {data ?
    //         <MainScreen data={data} isFreshDataFetched={isFreshDataFetched} />
    //         :
    //         <Spinner />
    //       }
    //     </main>
    //   </div>
    // );
  }
}

export default App;
