'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if(this.root == null){
			this.root = {
				data : data,
				left : null,
				right : null
			};
			return;
		}
		 function step (position, data){
			if (data > position.data){
				if(!position.right){
					position.right = {
						data : data,
						left : null,
						right : null
					};
					return;
				}
				else{
					step(position.right, data);
				}
			}
			else{
				if(!position.left){
					position.left = {
						data : data,
						left : null,
						right : null
					};
					return;
				}
				else{
				step(position.left, data);
				}
			}
		}
		step(this.root, data);
	}

	contains(data) {
		if(this.root == null ){
			return false;
		}
		var position = this.root;
		while (true) {
			if (!position) {
				return false;
			}
			if (position.data == data)
				return true;
			if (data > position.data) {
				position = position.right;
			}
			else {
				position = position.left;
			}
		}
	}

	remove(data) {
		//if(this.root == null ){
		//	return;
		//}
		//var position = this.root;
		//while (true) {
		//	if (!position) {
		//		return;
		//	}
		//	if (position.data == data){
		//		position = null;
		//		return;
		//	}
		//	if (data > position.data) {
		//		position = position.right;
		//	}
		//	else {
		//		position = position.left;
		//	}
		//}
	}

	size() {

	}

	isEmpty() {
		//if(this.root = null)
		//	return true;
		//else
		//	return false;
	}
}
