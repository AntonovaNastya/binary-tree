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
		function minimum(x){
			if (x.left == null)
				return x;
			return minimum(x.left);
		}
		var del = function(position, data){
			if (position == null)
				return position;
			if (data < position.data)
				position.left = del(position.left, data);
			else {
				if (data > position.data)
					position.right = del(position.right, data);
				else
					if (position.left != null && position.right != null) {
						position.data = minimum(position.right).data;
						position.right = del(position.right, position.right.data);
					}
					else
						if (position.left != null)
							position = position.left;
						else{
								position = position.right;
						}
			}
				return position;
		};
		if(this.root.left == null && this.root.right == null && this.root.data == data){
			this.root = null;
			return this.root;
		}
		else
			return del(this.root, data);
	}

	size() {
		var length = 0;
		if (this.root == null){
			return 0;
		}
		var step = function(position){
			length++;
			if(position.left != null){
				step(position.left);
			}
			if(position.right != null){
				step(position.right);
			}
		};
		step(this.root);
		return length;
	}

	isEmpty() {
		if(this.root == null)
			return true;
		else
			return false;
	}
}
