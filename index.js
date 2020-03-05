const obj={
  id:90038,
  name:"Harsha",
  phone:9876543210,
  college:"Sri Krishna",
  dept:"IT",
  location:"Coimbatore",
  getId:function(){
    return this.id;
  },
  getName:function(){
    return this.name;
  },
  getPhone:function(){
    return this.phone;
  },
  getCollege:function(){
    return this.college;
  },
  getDept:function(){
    return this.dept;
  },
  getLocation:function(){
    return this.location;
  },
  setId:function(id){
    this.id=id;
  },
  setName:function(name){
    this.name=name;
  },
  setPhone:function(phone){
    this.phone=phone;
  },
  setCollege:function(college){
    this.college=college;
  },
  setDept:function(dept){
    this.dept=dept;
  },
  setLocation:function(location){
    this.location=location;
  },
};
let id=obj.getId();
console.log('ID:',id);
let name=obj.getName();
console.log('Name:',name);
let phone=obj.getPhone;
console.log('ID:',id);
