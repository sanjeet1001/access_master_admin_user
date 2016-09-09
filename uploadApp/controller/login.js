adminApp.controller('login',function($scope,$location,userfactory,toastr){
	

	$scope.login = function(){
		var utype = $scope.utype;
		var id = $scope.id;
		var pass = $scope.pass;
		
		var check = userfactory.check($scope.utype,$scope.id,$scope.pass);
		if(check == true){
			toastr.success("Successfully Loged In.");
			$location.path('/users');
		}
		else{
			if(utype ==""){
				toastr.error("Please select user type")
			}
			else{
				toastr.error("User or password is not valid.");
			}
			
		}
	}
});