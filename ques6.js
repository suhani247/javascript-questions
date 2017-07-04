var data ={
    'name' : true,
    'age' : 26,
    'schooling' : [{
            'name' : 'some school',
            'location' : true
        },
        {
            'schoolname' : true,
            'class' : [
            {
                '1st' : false
            },
            {
                '2nd' : true
            },
            {
                '3rd' : [
                {
                    'subjects' :[
                                    {'english' : false},
                                    {'hindi' : true}
                                ]
                }
             ]
         }
       ]
     }
    ],
    'height' : 170,
    'nowIn' : true,
    'personal': {
    'salary' : true,
    'expenses' : false,
        'unnamed': [true, false, true]
        
 }

} ;

var result = [];
function getTruthyKeys(varObj,result){
  if(typeof(varObj == 'object') && Array.isArray(varObj)){
  varObj.map(function(value,index){
   
    if(typeof(value)== 'object'){
     
      getTruthyKeys(value,result);
    }
   
    });
  }
  else if(typeof(varObj == 'object') && !Array.isArray(varObj)){
    
  Object.keys(varObj).map(function(key){
    if(typeof(varObj[key])=='object'){
      result.push(key);
      getTruthyKeys(varObj[key],result);
        
    }
    else
    {
      if(!!varObj[key]){console.log('Object Value ' + key);
      result.push(key); 
      }
    }
  });
  }
  else
    if(!!varObj){console.log(varObj);
      result.push('Normal Value ' + varObj);
      return true;
    }
  
}

getTruthyKeys(data,result);
result


