import React, { Component } from 'react';

import { fetchData } from 'utils/apiHelper';
import MainScreen from 'components/MainScreen';
import Spinner from 'components/Spinner';

import styles from './style.scss';

class App extends Component {
  state = {
    data: null,
  }

  componentWillMount() {
    fetchData()
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const data = this.state.data;
    return (
      <div className={styles.app}>
        <main>
          {data ?
            <MainScreen data={data} />
            :
            <Spinner />
          }
        </main>
      </div>
    );
  }
}

export default App;
