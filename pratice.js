var outside = 'outside';

function a() {
  var aVar = 'a';
  
  function aInner1() {
    var aInner1Var = 'aInner1Var';
    
    function aInner1Inner() {
      var aInner1InnerVar = 'aInner1InnerVar'; 
    }
  }
  
  function aInner2(aInner2Param) {
    var aInner2Var = aInner2Param;
  }
}

function b(bParam) {
  console.log(a);
  console.log(bParam);
}



//  working on objects

var todos = [
  {todoText: 'Get groceries', completed: true},
  {todoText: 'Go for a run', completed: false}

];
