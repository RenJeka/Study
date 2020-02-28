
// $(document).ready(function(){
// 	let bbb = 0;

// 	$('*').each(index => {
// 		if (this.nodeType == 8){bbb++}
// 	});
// 	console.log(bbb);
// })

window.onload = function() {

	function myFunc(DOM_tree, nodeTypeNumber) {
		let myArr = [];
		let nodeName;
		function bypassDOM(nodeOfDOM) {
			
			if (nodeOfDOM.childNodes) {

				if (nodeOfDOM.childNodes.length > 0) {
					nodeName = nodeOfDOM.nodeName;
					console.log(nodeName); 
					bypassDOM(nodeOfDOM.childNodes[0])
	
				}else{
					nodeName = nodeOfDOM.nodeName;
					console.log(nodeName); 
					if (nodeOfDOM.nodeType == nodeTypeNumber) {
						myArr.push(nodeOfDOM);
					}
	
					if (nodeOfDOM.nextSibling != null) {
						bypassDOM(nodeOfDOM.nextSibling)

					}else{
						return
					}
				}
			}else{
				nodeName = nodeOfDOM.nodeName;
				console.log(nodeName); 
				if (nodeOfDOM.nodeType == nodeTypeNumber) {
					myArr.push(nodeOfDOM);
				}

				if (nodeOfDOM.nextSibling != null) {
					bypassDOM(nodeOfDOM.nextSibling)

				}else{
					return
				}
			}
		}

		bypassDOM(DOM_tree);

		return myArr;
	}

	console.dir (myFunc(document, 8));

}


