function BinaryTree() {};

function BinaryTreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  Object.freeze(this);
}

BinaryTreeNode.prototype = new BinaryTree();
BinaryTreeNode.prototype.constructor = BinaryTreeNode;

BinaryTreeNode.prototype.isEmpty = function() {
  if (this.value) {
    return false
  }
};

BinaryTreeNode.prototype.depth = function() {
  return this.maxDepthHandler(this, 1);
};

BinaryTreeNode.prototype.maxDepthHandler = function(root, num) {
  if (root === null) {
    return 0;
  };
  
  if (root.right === null && root.left === null) {
    return num;
  };
  
  if (root.right && root.left) {
    return Math.max(this.maxDepthHandler(root.right, num + 1), this.maxDepthHandler(root.left, num + 1))   
  } else if (root.right !== null) {
    return this.maxDepthHandler(root.right, num+1);
  } else {
    return this.maxDepthHandler(root.left, num+1);
  }
};

BinaryTreeNode.prototype.count = function() {
  let count = 0;

  if (this.value === null) {
    return count;
  }

  let queue = [this];

  while (queue.length > 0) {
    let item = queue.shift();
    let value = item.value;
    if (value) {
      count += 1;
    };

    if (item.left === null && item.right === null) {
      continue
    };

    if (item.left !== null) {
      queue.push(item.left);
    };

    if (item.right !== null) {
      queue.push(item.right);
    };
  };

  return count;
};

BinaryTreeNode.prototype.inorder = function(fn) { 
  if (this.value) {
    if (this.left) {
      fn(this.left.value)
      fn(this.value)
      fn(this.right.value)
    };
  };
};

BinaryTreeNode.prototype.preorder = function(fn) {
  if (this.value) {
    fn(this.value);
    fn(this.left.value);
    fn(this.right.value);
  };
};

BinaryTreeNode.prototype.postorder = function(fn) {
  if (this.value) {
    if (this.left) {
      fn(this.left.value);
      fn(this.right.value);
      fn(this.value);
    };
  };
};

BinaryTreeNode.prototype.contains = function(x) {
  if (this.value === x) {
    return true
  };

  if (this.left) {
    if (this.left.contains(x)) {
      return true
    };
  };

  if (this.right) {
    if (this.right.contains(x)) {
      return true
    };
  };

  return false;
};

BinaryTreeNode.prototype.insert = function(x) {
  if (!this.value) {
    this.value = x;
    this.left = null;
    this.right = null;    
    return this;
  }

  if (!this.left) {
    let node = Object.create(BinaryTreeNode.prototype);
    this.left = node.insert(x);
    return this;
  };

  if (!this.right) {
    let node = Object.create(BinaryTreeNode.prototype);
    this.right = node.insert(x);
    return this;
  };
};

BinaryTreeNode.prototype.remove = function(x) {
  let duplicateTree = Object.assign({}, this);

  if (duplicateTree.value === x) {
    delete duplicateTree;
    return;
  };

  if (duplicateTree.right) {
    if (duplicateTree.right.value === x) {
      delete duplicateTree.right;
      return duplicateTree;
    }
  }

  if (duplicateTree.left) {
    if (duplicateTree.left.value === x) {
      delete duplicateTree.left;
      return duplicateTree;
    }
  }

  return duplicateTree;
};

////////////////////////////////////////////////////////////////////////
function EmptyBinaryTree() { Object.freeze(this); }
EmptyBinaryTree.prototype = new BinaryTree();
EmptyBinaryTree.prototype.constructor = EmptyBinaryTree;

EmptyBinaryTree.prototype.isEmpty = function() {
  return true
};

EmptyBinaryTree.prototype.depth = function() {
  return 0;
};

EmptyBinaryTree.prototype.count = function() {
  return 0;
};

EmptyBinaryTree.prototype.inorder = function(fn) {
  let newTree = Object.create(BinaryTreeNode.prototype);
  newTree.inorder(fn);
  return newTree;
};

EmptyBinaryTree.prototype.preorder = function(fn) {
  let newTree = Object.create(BinaryTreeNode.prototype);
  newTree.preorder(fn);
  return newTree;
};

EmptyBinaryTree.prototype.postorder = function(fn) {
  let newTree = Object.create(BinaryTreeNode.prototype);
  newTree.postorder(fn);
  return newTree;
};

EmptyBinaryTree.prototype.contains = function(x) { 
  let newTree = Object.create(BinaryTreeNode.prototype);
  return newTree.contains(x);
};

EmptyBinaryTree.prototype.insert = function(x) { 
  let newTree = Object.create(BinaryTreeNode.prototype);
  newTree.insert(x);
  return newTree;
};

EmptyBinaryTree.prototype.remove = function(x) {
  let newTree = Object.create(BinaryTreeNode.prototype);
  newTree.remove(x);
  return newTree;
};

var mt, t1, t2, t3, _ref;

mt = new EmptyBinaryTree;
t1 = mt.insert('b').insert('a').insert('c');
t2 = t1.remove('a');
t3 = t1.remove('z');

console.log(mt.isEmpty());
console.log(!t1.isEmpty());
console.log(mt.depth()); // 0, "Empty tree has depth zero.");
console.log(t1.depth()); // 2, "Tree [ a, [ b [] [] ] [ c [] [] ] ] depth 2");
console.log(mt.count()); // 0, "Empty tree has zero non-empty nodes");
console.log(t1.count()); // 3, "Tree a, b, c has three nodes");

console.log(!mt.contains('a')); // "Empty tree does not contain 'a'");
console.log(t1.contains('a')); // "Tree a, b, c contains 'a'");
console.log(t1.contains('b')); // "Tree a, b, c contains 'b'");
console.log(t1.contains('c')); // "Tree a, b, c contains 'c'");

console.log(!t2.contains('a')); // "Tree a, b, c no longer contains 'a' after remove");
console.log(t2.right === t1.right); // "Tree a, b, c with 'a' removed shares 'c'");
console.log(t3 === t1); // "Removing an absent item leaves tree untouched.");

var doTraversal = function(tree, traversal) {
    var nodes = [];
    tree[traversal](function(x) { return nodes.push(x); });
    return nodes.join('');
};

console.log(doTraversal(mt, 'inorder')); // "Traverse empty tree");
console.log(doTraversal(t1, 'inorder')); // 'abc', "Traverse inorder");
console.log(doTraversal(t1, 'preorder')); // 'bac', "Traverse preorder");
console.log(doTraversal(t1, 'postorder')); // 'acb', "Traverse postorder");