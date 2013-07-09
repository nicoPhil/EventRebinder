EventRebinder
=============

Allow to map html events (onclick, onchange...) on a custom context object (instead of window)

Dependencies:
-------------
- jQuery

Usage:
-------------

'''javascript

	var domElem = $("#myDiv");
	var context = {
		foo:function(){
			alert('foo');
		}
	};

	EventBinder(domElem),context);	
'''


