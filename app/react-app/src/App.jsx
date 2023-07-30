import React from 'react';
import './assets/styles/style.css'
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  // 次の質問と回答候補を表示する
  displayNextQuestion = (nextQuestionId) => {
    // チャット配列の取得
    const chats = this.state.chats
    // 新しい質問を追加
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question"
    })
    // stateの更新
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === "init"):
        //最初の質問を表示する
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        // Idが"init"以外の時
        // 選択した回答をチャットに追加する
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "answer"
        })
        // チャットの更新
        this.setState({
          chats: chats
        })
        // 次の質問を表示
        this.displayNextQuestion(nextQuestionId)
        break;
    }
  }

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
        </div>
      </section>
    );
  }
}

