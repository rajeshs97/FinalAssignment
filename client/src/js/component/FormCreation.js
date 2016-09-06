var React=require('react');
//var Header=require('./Header');
//var TableForm=require('./TableForm');
//var LabelComponent=require('./LabelComponent');
var FormCreation=React.createClass({
  getInitialState:function () {
    return({batch:"batch5",name:"",email:"",phone:"",giturl:"",empcode:"",empdesg:"",skills:"",experience:"", allData:[] });
  },
  batch1:function(event){
    this.setState({batch:event.target.value});
    console.log(this.state.batch);
  },
  name1:function(event){
    this.setState({name:event.target.value});
    console.log(this.state.name);
  },
  email1:function(event){
    this.setState({email:event.target.value});
    console.log(this.state.email);
  },
  phone1:function(event){
    this.setState({phone:event.target.value});
    console.log(this.state.phone);
  },
  giturl1:function(event){
    this.setState({giturl:event.target.value});
    console.log(this.state.giturl);
  },
  empcode1:function(event){
    this.setState({empcode:event.target.value});
    console.log(this.state.empcode);
  },
  empdesg1:function(event){
    this.setState({empdesg:event.target.value});
    console.log(this.state.empdesg);
  },
  skills1:function(event){
    this.setState({skills:event.target.value});
    console.log(this.state.skills);
  },
  exp1:function(event){
    this.setState({experience:event.target.value});
    console.log(this.state.experience);
  },
  save : function ()
{
		console.log(this.state);
		$.ajax({
       url: '/save',
       dataType: 'json',
       contentType: "application/json",
       type: 'POST',
       data: JSON.stringify({'batch':this.state.batch, 'name' : this.state.name, 'email' : this.state.email, 'phone' : this.state.phone,
 													'giturl' : this.state.giturl, 'empcode' : this.state.empcode, 'empdesg' : this.state.empdesg, 'skills' : this.state.skills, 'experience' : this.state.experience}),
      success: function(data)
       {
         console.log("Success");
       }.bind(this),
       async: false,
       error: function(xhr, status, err) {
         console.error("Error.."+err.toString());
       }.bind(this)

       });
},
  render:function () {
    return(
      <div className='container-fluid'>
        <div className="col-lg-4">
        </div>
      <div className="col-lg-8">

      <strong>Batch</strong>
      <select onChange={this.batch1}>
        <option value="wave1">Wave1</option>
        <option value="wave2">Wave2</option>
        <option value="wave3">Wave3</option>
        <option value="wave4">Wave4</option>
        <option value="wave5">Wave5</option>
        <option value="wave6">Wave6</option>
        <option value="wave7">Wave7</option>
      </select>

        <div className="form-group row">
          <label for="text-input" className="col-xs-2 col-form-label">Name</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" id="name" onChange={this.name1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="email-input" className="col-xs-2 col-form-label">Email</label>
          <div className="col-xs-10">
            <input className="form-control" type="email" id="email" onChange={this.email1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="example-tel-input" className="col-xs-2 col-form-label">Phone</label>
          <div className="col-xs-10">
            <input className="form-control" type="tel" id="phone" onChange={this.phone1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="example-url-input" className="col-xs-2 col-form-label">GIT-URL</label>
          <div className="col-xs-10">
            <input className="form-control" type="url" id="giturl" onChange={this.giturl1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="text-input" className="col-xs-2 col-form-label">EmpCode</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" id="empcode" onChange={this.empcode1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="text-input" className="col-xs-2 col-form-label">EmpDesg</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" id="empdesg" onChange={this.empdesg1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="text-input" className="col-xs-2 col-form-label" id="experience1">Skills</label>
          <div className="col-xs-10">
              <textarea className="form-control" rows="4" type="text" id="skills" onChange={this.skills1}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="text-input" className="col-xs-2 col-form-label" id="experience1">Experience</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" id="experience" onChange={this.exp1}/>
          </div>
        </div>

      </div>

      <div className="container">
      <button type="button" className="btn btn-success" id="successs" onClick={this.save}>Success</button>
      </div>
      <div>
        <Formlist adata={this.state.allData}/>
      </div>
      </div>
    )

  },
  componentDidMount:function(){
  $.ajax({
       url: '/getValues',
       type: 'GET',
       dataType: 'json',
       success: function(response)
       {
        //  this.setState({status:response});


        console.log(response);
        this.setState({allData:response});
         console.log(this.state.allData);
          console.log("successfully taken the data");
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
     });
},
});


module.exports=FormCreation;
