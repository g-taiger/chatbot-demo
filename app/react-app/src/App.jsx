import React from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList } from './components/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList />
        </div>
      </section>
    );
  }
}

