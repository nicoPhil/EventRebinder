EventRebinder
=============

Allow to map html events (onclick, onchange...) on a custom context object (instead of window)

Dependencies:
-------------
- jQuery

Usage:
-------------

In this short sample, we calling foo and bar, inside the variable called 'context':

**HTML:**

	<div id="myDiv">
		<input type="text" onkeypress="bar()"></input>
		<span onclick="foo('yeah')">ClickMe</span>
	</div>


**JavaScript:**

	var domElem = $('#myDiv');

	var context = {
		foo:function(val){
			alert(val);
		},
		bar:function(){
			console.log('keyPressed');
		}
	};

	EventBinder(domElem,context);	



