// Genady Kogan

// TypeScript program
// AVL Tree insertion

// Avl Tree Node
export default null;
/*
export default class TreeNode
{
	public data: number;
	public height: number;
	public left: TreeNode;
	public right: TreeNode;
	constructor(data: number)
	{
		// Set node value of avl tree
		this.data = data;
		this.height = 1;
		this.left = null;
		this.right = null;
	}
}
class AvlTree
{
	// Tree root node
	public root: TreeNode;
	constructor()
	{
		// Set value of root
		this.root = null;
	}
	// Get the height of given node
	public number getHeight(node: TreeNode)
	{
		if (node == null)
		{
			return 0;
		}
		return node.height;
	}
	// Get the max value of given two numbers
	public number maxHeight(a: number, b: number)
	{
		if (a > b)
		{
			return a;
		}
		else
		{
			return b;
		}
	}
	// Perform the Right rotate operation
	public TreeNode rightRotate(node: TreeNode)
	{
		// Get left child node
		var leftNode = node.left;
		// Get left node right subtree
		var rightSubtree = leftNode.right;
		// Update the left and right subtree
		leftNode.right = node;
		node.left = rightSubtree;
		// Change the height of modified node
		node.height = this.maxHeight(
          this.getHeight(node.left), 
          this.getHeight(node.right)) + 1;
		leftNode.height = this.maxHeight(
          this.getHeight(leftNode.left), 
          this.getHeight(leftNode.right)) + 1;
		return leftNode;
	}
	// Perform the Left Rotate operation
	public TreeNode leftRotate(node: TreeNode)
	{
		// Get right child node
		var rightNode = node.right;
		// Get right node left subtree
		var leftSubtree = rightNode.left;
		// Update the left and right subtree
		rightNode.left = node;
		node.right = leftSubtree;
		// Change the height of modified node
		node.height = this.maxHeight(
          this.getHeight(node.left), 
          this.getHeight(node.right)) + 1;
		rightNode.height = this.maxHeight(
          this.getHeight(rightNode.left), 
          this.getHeight(rightNode.right)) + 1;
		return rightNode;
	}
	// Get the balance factor
	public number getBalanceFactor(node: TreeNode)
	{
		if (node == null)
		{
			return 0;
		}
		return this.getHeight(node.left) - 
          this.getHeight(node.right);
	}
	// Recursively, add a node in AVL tree
	// Duplicate keys (data) are not allowed
	public TreeNode addNode(node: TreeNode, data: number)
	{
		if (node == null)
		{
			// Return a new node
			return new TreeNode(data);
		}
		if (data < node.data)
		{
			node.left = this.addNode(node.left, data);
		}
		else if (data > node.data)
		{
			node.right = this.addNode(node.right, data);
		}
		else
		{
			// When given key data already exists
			return node;
		}
		// Change the height of current node
		node.height = 1 + this.maxHeight(
          this.getHeight(node.left), 
          this.getHeight(node.right));
		// Get balance factor of a node
		var factor = this.getBalanceFactor(node);
		// LL Case
		if (factor > 1 && data < node.left.data)
		{
			return this.rightRotate(node);
		}
		// RR Case
		if (factor < -1 && data > node.right.data)
		{
			return this.leftRotate(node);
		}
		// LL Case
		if (factor > 1 && data > node.left.data)
		{
			node.left = this.leftRotate(node.left);
			return this.rightRotate(node);
		}
		// RR Case
		if (factor < -1 && data < node.right.data)
		{
			node.right = this.rightRotate(node.right);
			return this.leftRotate(node);
		}
		return node;
	}
	// Print the tree in preorder form
	public preorder(node: TreeNode)
	{
		if (node != null)
		{
			console.log("  " + node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	// Print the tree in inorder form
	public inorder(node: TreeNode)
	{
		if (node != null)
		{
			this.inorder(node.left);
			console.log("  " + node.data);
			this.inorder(node.right);
		}
	}
	// Print the tree in postorder form
	public postorder(node: TreeNode)
	{
		if (node != null)
		{
			this.postorder(node.left);
			this.postorder(node.right);
			console.log("  " + node.data);
		}
	}
	public static main(args: string[])
	{
		var tree = new AvlTree();
		// Add tree node
		tree.root = tree.addNode(tree.root, 4);
		tree.root = tree.addNode(tree.root, 7);
		tree.root = tree.addNode(tree.root, 5);
		tree.root = tree.addNode(tree.root, 19);
		tree.root = tree.addNode(tree.root, 17);
		tree.root = tree.addNode(tree.root, 13);
		tree.root = tree.addNode(tree.root, 11);
		tree.root = tree.addNode(tree.root, 3);
		tree.root = tree.addNode(tree.root, 2);
		tree.root = tree.addNode(tree.root, -3);
	
		console.log("Resultant AVL Tree");
		console.log("\nPreorder  :");
		tree.preorder(tree.root);
		console.log("\nInorder   :");
		tree.inorder(tree.root);
		console.log("\nPostorder :");
		tree.postorder(tree.root);
	}
}
AvlTree.main([]);
*/