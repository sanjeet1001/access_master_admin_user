adminApp.controller('users',function($scope,$location,userfactory,$stateParams){
	
	var listuser = {};
	$scope.adminshow = false;
	$scope.usershow = false;
	$scope.init = function(){
		
		$scope.listuser = userfactory.get();
		console.log($scope.listuser);
		if($scope.listuser.type == "master"){
			$scope.adminshow = true;	
			$scope.usershow = true;
		}
		if($scope.listuser.type == "admin"){	
			$scope.usershow = true;
		}
	}
});