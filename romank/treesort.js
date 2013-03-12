
function Tree(key) {
    this.left; // left subtree
    this.right; // right subtree
    this.key = key;
}

Tree.prototype.insert = function(tree) {
    if(tree.key < this.key) {
        if(typeof this.left != 'undefined')
            this.left.insert(tree);
        else
            this.left = tree;
    } else {
        if(typeof this.right != 'undefined')
            this.right.insert(tree);
        else
            this.right = tree;
    }
}

Tree.prototype.traverse = function(visitorFunc) {
    if(typeof this.left != 'undefined') {
        this.left.traverse(visitorFunc);
    }

    visitorFunc(this);

    if(typeof this.right != 'undefined') {
        this.right.traverse(visitorFunc);
    }
}

function binaryTreeSort(input) {
    var sorted = [],
        arrayToTree = function (a) {
            var tree = new Tree(a[0]);
            for(var i = 1; i < a.length; i++) {
                tree.insert(new Tree(a[i]));
            }
            return tree;
        };

    var tree = arrayToTree(input);
    tree.traverse(function(node) {
        if(typeof node.key != 'undefined') {
            sorted.push(node.key);
            mystat.add(sorted);
        }
    });

    return sorted;
}