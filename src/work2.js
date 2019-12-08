
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { resolve } from 'dns';

class App extends Component{
  state = {
      list: []
  }
  render() {
      return (
          <div>
            app
            {this.state.list.map(item=>
            <p key={item}>{item}</p>
            )}
          </div>
      );
  }
  async componentDidMount() {
    setTimeout(()=>{
      this.setState({
        list:[1,2,3,4,5]
      })
    },2000);

    let res = await confirm("确定删除吗")
    console.log(res,111)
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }

  }
}
class Confirm extends Component{
 constructor(props){
   super(props)
 }
  render() {
      return (
          <div>
              {this.props.text}?
              <button>确定</button>
              <button onClick={e=> this.setState({
                isMount: false
              })}>取消</button>
          </div>
      );
  }
  componentDidMount(){}
}

let node = null;
let isMount = true;
function confirm (text){
   return new Promise((res,rej)=>{
     if(isMount){
       node = document.createElement('div');
       document.body.appendChild(node);
       ReactDOM.render(<Confirm text={text} isMount={isMount} />,node);
        res(true)
     }else{
       if(node){
         ReactDOM.unmountComponentAtNode(node);
         document.body.removeChild(node);
          rej(false)
       }
     }
  })
}
export default App