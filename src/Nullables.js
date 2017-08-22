/*@flow*/

/*
 *So flow doesn't ingnore nulls 
 * 
 * 
 */


 function stringLength (str) {
 	if (str !== null) {
		return str.length;
	}

	return 0;
 }

 const length = stringLength(null)
