/**
 * @author
 */
/* The purpose of this program, is to create a list of cookies with specific properties and from that list we create 
			 * two new lists, one of my favorite and one of the rest
			 * 
			 */
				var myCookies = [{
					"name" : "Oreo",
					"shape" : "round"
				}, {
					"name" : "Chips ahoy",
					"shape" : "round"
				}, {
					"name" : "Magnum",
					"shape" : "square"
				}, {
					"name" : "Chilli chips",
					"shape" : "triangle"
				}];
				console.log(myCookies);
				
				//these are the lists I will sort my cookies into
				var myFaves = [];
				var theRest = [];
				
				/*for cookie in my list, check it's shape. If square, add to myFaves, otherwise add to
				 * theRest
				 */
					for (var i = 0; i < 4; i++) {
						console.log(i);
						var currentCookie = myCookies[i];
						console.log(currentCookie);
						//console.log(currentCookie)
						if (currentCookie.shape == "shape") {

							console.log(currentCookie);
							myFaves.push(currentCookies);
						}else{
						    //because shape is square add the currentCookies, otherwise
						    //add to theRest list.
						    
						    theRest.push(currentCookie);	
							
						}//this is the end of my if/else statement
							
						}//this is the end of my loop
						
						console.log(myFaves);
						console.log(theRest);