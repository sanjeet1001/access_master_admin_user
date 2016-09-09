adminApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
		.state('login',{
			url: "/login",
			templateUrl: "/views/adminLogin.html",
			controller: "login"
		})
		.state('users', {
            url: "/users",
            templateUrl: "/views/masterUser.html",
            controller: "users"
        })
        .state('userdetail', {
            url: "/users/:id",
            templateUrl: "/views/userDetail.html",
            controller: "userdetail"
        });
});

adminApp.factory('userfactory', function(){

     var savedData = {};
     var current =[];
     var master =[
     {id:"master1",name:"raush",age:"25",pass:"raush"}
     ];

     var admin =[
     {id:"admin1",name:"anish",age:"30",pass:"anish"},
     {id:"admin2",name:"sanjay",age:"35",pass:"sanjay"},
     {id:"admin3",name:"rahul",age:"25",pass:"rahul"}
     ];
     var user =[
     {id:"user1",name:"karan",age:"27",pass:"karan"},
     {id:"user2",name:"ashu",age:"45",pass:"ashu"},
     {id:"user3",name:"jitendra",age:"21",pass:"jitendra"}
     ];

     function check(type,id,pass){
        var key = false;
        if(type == "master"){
            for(var i=0;i<master.length; i++){
                if(master[i].id == id && master[i].pass == pass){
                    savedData.current = master;
                    savedData.admin = admin;
                    savedData.user = user;
                    savedData.type = type;
                    key = true;
                     break;
                }
            }
            if(key == true){
                return true;
            }
        }
        else if( type == "admin"){
            for(var i=0;i<user.length; i++){
                if(admin[i].id == id && admin[i].pass == pass){
                    savedData.current = admin;
                    savedData.user = user;
                    savedData.type = type;
                    key = true;
                    break;
                }
            }
            if(key == true){
                return true;
            }
        }
        else if( type == "user"){
            for(var i=0;i<user.length; i++){
                if(user[i].id == id && user[i].pass == pass){
                    savedData.current = user;
                    savedData.type = type;
                    key = true;
                    break;
                }
            }
            if(key == true){
                return true;
            }
        }
        else{
            return false;
        }
    }
     function get() {
      return savedData;
     }

     return {
      get: get,
      check: check
     }

});