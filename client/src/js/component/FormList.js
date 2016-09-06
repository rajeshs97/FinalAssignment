var React=require('react');
var Forms=require('./Forms');
var Formlist=React.createClass({
  render:function(){
    //console.log(this.props.p2);

    var Data= this.props.adata.map(function(list){

        return(
  <Forms batch={list.batch} name={list.name} email={list.email}  phone={list.phone}
    giturl={list.giturl}
    empcode={list.empcode}
    empdesg={list.empdes}
    skills={list.skills}
    experience={list.experience} ></Forms>
    );


  });
    return(
      <div>
      {Data}
      </div>
    );
  }
});
module.exports=Formlist
