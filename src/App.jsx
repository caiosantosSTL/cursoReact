
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor and super is not necessary
  constructor(props) {
    super(props);

    this.funcShowVar = this.funcShowVar.bind(this) // create binding

    this.state = {
      name: 'Olaf',
      count: 0
    }
    // --------
    this.state2 = {
      post: [
        {
          id: 1,
          title: 'Home',
          body: 'bod1'
        },
        {
          id: 2,
          title: 'Mountain',
          body: 'bod2'
        },
        {
          id: 3,
          title: 'Life',
          body: 'bod3'
        }
      ]
    }
  }

  // *** my funcs
  funcShowVar() {
    //const  {name}  = this.state;
    //console.log(`var is ${name}`);

    this.setState({ name: 'Noronha' })
  }

  funcEvent = (event) => {
    event.preventDefault() //avoid some event {href event}
    const { count } = this.state
    this.setState({ count: count + 1 })
  }


  handleTimeout = () => {
    const { post } = this.state2
    const {count} = this.state

    post[0].title = 'This was modificated'
    

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ post, count: count+1 })
    }, 4000);
  }

  timeoutUpdate = null;

  // *** hooks life cycle
  componentDidMount() { // native func
    //console.log('mounted all ');
    this.handleTimeout()
  }

  componentDidUpdate(){ // update loop
    //clearTimeout(this.timeoutUpdate)
    this.handleTimeout()
  }

  componentWillUnmount(){ // when update de component, the timeout reset
    clearTimeout(this.timeoutUpdate) 
  }


  render() {
    const { name, count } = this.state;

    const { post } = this.state2;


    return (
      <>
        <p onClick={() => { console.log('clicked'); }}>
          oioio {name}

        </p>
        <p>
          counter -- {count}
        </p>

        <h2 onClick={this.funcShowVar}>var name</h2>

        <button>
          <a onClick={this.funcEvent} href="https://google.com">google</a>
        </button>

        <hr />
        <h3>loop with map</h3>
        <p>
          {
            post.map(
              post => <div key={post.id}>
                <li >{post.title} -- {count}</li>
                <p>{post.body}</p>
              </div>
            )
          }
        </p>
      </>
    )
  }
}

export default App;
