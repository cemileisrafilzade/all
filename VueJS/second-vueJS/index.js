new Vue ({
    el:"#app",
    data:{
        name:"camila",
        surname:"israfilzadeh",
        className:"gold",
    isClicked:true,
    isHidden:true,
   
    people:[{
        fullname :"ibrahim israfilzade",
salary:500,
mail:"ibo@mail.com"    
    },
    {
    fullname :"metanet israfilzade",
    salary:2000,
    mail:"metanet@mail.com"    
        },
{
        fullname :"cemile israfilzade",
        salary:1000,
        mail:"cemile@mail.com"    
            },
],
     }, 
methods:{
increaseSalary(){
this.people.salary++;
}
},
  
   


})