var React=require('react');
var ReactDOM=require('react-dom');

var {browserHistory,Route,Router,IndexRoute}= require('react-router');

var NavBar=require('./component/NavBar');
//var Manageform=require('./component/Manageform');
var FormCreation=require('./component/FormCreation');
var About=require('./component/About');
var Home=require('./component/Home');

var MainComp=React.createClass({
  render: function(){
    return(
    <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
    </div>
   );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainComp}>
    <Route path="/home" component={Home}/>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/formcreation" component={FormCreation}/>
    </Route>
  </Router>,
  document.getElementById('app'));
