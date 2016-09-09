adminApp.controller('userdetail',function($scope,$location,userfactory,$stateParams,toastr){
	
	var detail ={};
	var id ="";
	$scope.initdetail = function(){
			id = $stateParams.id;
			detail = userfactory.get();
			console.log(detail);
			var key = false;
			if(detail.type == "master"){

				for(var i=0; i<detail.admin.length; i++){
					if(detail.admin[i].id == id){
						$scope.found = detail.admin[i];
						key = true;
						break;
					}
				}
				if(key == false){
					for(var i=0; i<detail.user.length; i++){
						if(detail.user[i].id == id){
							$scope.found = detail.user[i];
							key = true;
							break;
						}
					}
				}
				if(key == false){
					for(var i=0; i<detail.current.length; i++){
						if(detail.current[i].id == id){
							$scope.found = detail.current[i];
							key = true;
							break;
						}
					}
				}
			}
			if(detail.type == "admin"){

				
				for(var i=0; i<detail.user.length; i++){
					if(detail.user[i].id == id){
						$scope.found = detail.user[i];
						key = true;
							break;
						}
					}
				
				if(key == false){
					for(var i=0; i<detail.current.length; i++){
						if(detail.current[i].id == id){
							$scope.found = detail.current[i];
							key = true;
							break;
						}
					}
				}
			}
			if(detail.type == "user"){
				if(detail.current[i].id == id){
							$scope.found = detail.current[i];
							key = true;
						}
			}


			if(key == false){
				toastr.error("User Not Found");
			}

		}
});