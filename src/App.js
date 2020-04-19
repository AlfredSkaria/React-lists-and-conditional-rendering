import React, { Component } from 'react';
import DisplayText from './ValidationComponent/DisplayComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

  state = {
    characterCount: 0,
    text: ''
  }

  userNameChangeListener = (event) => {
    let newCount = 0;
    let newText = '';
    newCount = newCount + event.target.value.length;
    newText = newText + event.target.value;
    this.setState(
      {
        characterCount: newCount,
        text: newText
      });
  }

  deleteCharacter = (characterIndex) =>{
    let newText = this.state.text;
    newText = newText.split('');
    newText.splice(characterIndex,1);
    newText = newText.join('');
    let newCount = this.state.characterCount;
    newCount = newCount - 1;

    this.setState({text: newText,
      characterCount: newCount});
  }

  render() {
    let charLengthParagraph = null;
    if(this.state.characterCount > 0){
      charLengthParagraph = (
          <p>{this.state.characterCount}</p>
      );
    }

    let charComponent = null;
    const tempText = this.state.text;
    const splittedText = tempText.split('');
    if(this.state.characterCount > 0){
      charComponent = (
          <div>
            {
              splittedText.map( (character, index) =>{
                return <CharComponent 
                  character={character}
                  click = { () => this.deleteCharacter(index)}
                  key={index}/>
              })
            }
          </div>
      );

    
    }

    return (
      <div className="App">
        
        <input type="text" onChange={this.userNameChangeListener} value={this.state.text}/>
        <br/>
        {charLengthParagraph}
        <br/>
        <DisplayText charLength = {this.state.characterCount}/>
        <br/>
        {charComponent}
        
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
      </div>
    );
  }
}

export default App;
