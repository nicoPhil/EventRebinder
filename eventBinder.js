
(function(){

	this.EventBinder = function(elem,context){

		var strStartWithOn = function(str){
			str = str.toLowerCase();
			return (str[0] === 'o' && str[1] === 'n');
		}

		var splitMethod = function(str){
			var ret = {};

			var firstBracketIndex = str.indexOf('(');
			if(firstBracketIndex === -1)
				throw('bracket not found in ' + str);
			
			var lastBracketIndex = str.indexOf(')');
			if(lastBracketIndex === -1)
				throw('bracket not found in ' + str);

			ret.methodName = str.substring(0,firstBracketIndex);
			ret.args = str.substring(firstBracketIndex+1,lastBracketIndex);
			ret.argArray = ret.args.split(',');

			return ret;
		};

		var findElem = function(e,context){

			$.each($(e).children(),function(index,item){

				$.each(item.attributes,function(index,attr){
					
					if(strStartWithOn(attr.name)){
						var eventName = attr.name.slice(2);

						var methodInfos = splitMethod(attr.value);	
						$(item).on(eventName,function(){
							context[methodInfos.methodName].apply(this,methodInfos.argArray);
						});

						$(item).prop(attr.name, null);			
					}
					
				})

				findElem(item,context);
			});
		};

		if(!$){
			throw('jQuery required');
		}
		findElem(elem,context);

	};	

})();