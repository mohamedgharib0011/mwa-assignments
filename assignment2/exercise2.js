(function(){
  /**
  * Write a Node code for finding a file from a tree object: implement a simple algorithms for find()
  * that tells us whether a file is found in a tree of directories or not.
  * Use recursion, curring, heighr-order function, and lambada expresion. Test your code in Node.JS CLI
  *
  **/

/////////////////////////// solution totally with lambda //////////////////////////
find=(name)=>{
          return  checkExistance=(dir)=>{
            for (fName of dir.files) {
              if(name===fName)
                return true;
            }

            for (subDir of dir.subFolders) {
              if(checkExistance(subDir))
                return true;
            }

            return false;
          };
};
/////////////////////// solution with partially lambda ///////////////////////////
  // function find(name){
  //
  //   return  checkExistance=(dir)=>{
  //     for (fName of dir.files) {
  //       if(name===fName)
  //         return true;
  //     }
  //
  //     for (subDir of dir.subFolders) {
  //       if(checkExistance(subDir,name))
  //         return true;
  //     }
  //
  //     return false;
  //   }
  //
  // }


/////////////////////////////////////////////// testing //////////////////////////////////////
const tree = {
	name : "home",
	files : ["notes.txt","todo.txt"],
	subFolders: [
		{ name : "payroll",
		  files : ["paper.pdf","funds.csv"],
		  subFolders: []
		},
		{ name: "misc",
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
		  subFolders: [
			{ name : "logs",
			  files : ["logs1","logs2","logs3","logs4"],
			  subFolders: []
		  }]
	}]
};
console.log(find("paper.pdf")(tree));
console.log(find("randomfile")(tree));


})();
