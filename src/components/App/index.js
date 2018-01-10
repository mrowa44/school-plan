import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './style.scss';

class App extends Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React | Count: {this.state.count}</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/components/App/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
