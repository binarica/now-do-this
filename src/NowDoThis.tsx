import React from 'react';

const paragraphStyles: React.CSSProperties = {
  margin: '18px 18px 16px',
  fontSize: '1.25em',
  lineHeight: '140%',
};

const textAreaStyles: React.CSSProperties = {
  width: 400,
  height: 240,
  padding: 8,
  resize: 'none',
};

const buttonStyles: React.CSSProperties = {
  marginTop: 16,
  boxShadow: '2px 2px 6px 0px #e8e8e8',
  height: '1.85em',
  border: '1px solid #7a7a7a',
  borderRadius: 3,
  backgroundColor: '#f3f3f3',
  padding: '0 12px',
  color: '#555',
  fontSize: 20,
  cursor: 'pointer',
};

interface ToDoProps {}

interface ToDoState {
  userInput: string;
  toDoList: string[];
}

export default class NowDoThis extends React.Component<ToDoProps, ToDoState> {
  constructor(props: ToDoProps) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const itemsArray = this.state.userInput
      .split('\n')
      .filter((item) => item !== '');
    this.setState({
      toDoList: itemsArray,
    });
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    const items = this.state.toDoList.map((item) => (
      <li>
        <h1>{item}</h1>
      </li>
    ));
    return (
      <div>
        <p className="instructions" style={paragraphStyles}>
          Write your todo list in the box below.
        </p>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
        />
        <br />
        <button id="ready" onClick={this.handleSubmit} style={buttonStyles}>
          Ready
        </button>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          {items}
        </ul>
        <div style={{ margin: '16px 0', fontSize: 13 }}>
          <a id="about-link" href="#" style={{ color: '#aaa' }}>
            About
          </a>
        </div>
      </div>
    );
  }
}
