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
let phone=obj.getPhone();
console.log('Phone:',phone);
let college=obj.getCollege();
console.log('College:',college);
let dept=obj.getDept();
console.log('Department:',dept);
let location=obj.getLocation();
console.log('Location:',location);

obj.setId(100);
console.log(obj.id);
obj.setName("Phoenix");
console.log(obj.name);
obj.setPhone(1234567890);
console.log(obj.phone);
obj.setCollege("SKCT");
console.log(obj.college);
obj.setDept("Information Technology");
console.log(obj.dept);
obj.setLocation("Chennai");
console.log(obj.location);
//-----------------------------------------------------------------
// Object creation with function
//Pass by value is that when u assign the variable to another variable, it affects both the variables on updating the latter one.
//Simple variables assigning takes pass by value
//Pass by reference goes for object data type.
//One does not affect another

function Person(id){
  let id=id;
  this.name='hat';
  this.setId=function(id){
    _id=id;
  }
  this.getId=function(){
    return _id;
  }
}
const person=new Person('10');
person.setId(2);
console.log(person.getId());