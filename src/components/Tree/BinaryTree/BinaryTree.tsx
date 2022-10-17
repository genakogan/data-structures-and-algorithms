import TreeNode from "../TreeNode";


export default class BinaryTree<T> {
  root: TreeNode<T> | undefined;

  insertBT = (value: T) => {
    const currentNode = new TreeNode(value);

    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.insertIntoCurrentNode(currentNode);
    }
    return this;
  };

  private insertIntoCurrentNode = (currentNode: TreeNode<T>) => {
    const traverse = (node: TreeNode<T>) => {
      if (currentNode.data > node.data) {
        if (!node.rightNode) {
          node.rightNode = currentNode;
        } else traverse(node.rightNode);
      } else if (currentNode.data < node.data) {
        if (!node.leftNode) {
          node.leftNode = currentNode;
        } else traverse(node.leftNode);
      }
    };
    traverse(this.root as TreeNode<T>);
  };

  contains = (value: T) => {
    // eslint-disable-next-line consistent-return
    const traverse = (node: TreeNode<T>): undefined | boolean => {
      if (!node) return false;
      if (value === node.data) {
        return true;
      }
      if (value > node.data) {
        return traverse(node.rightNode as TreeNode<T>);
      }
      if (value < node.data) {
        return traverse(node.leftNode as TreeNode<T>);
      }
    };
    const rootNode: TreeNode<T> | undefined = this.root;
    return traverse(rootNode as TreeNode<T>);
  };

  // find the left most node to find the min value of a binary tree
  findMin = () => {
    const traverse = (node: TreeNode<T>): TreeNode<T> | T => {
      return !node.leftNode ? node.data : traverse(node.leftNode);
    };
    const rootNode: TreeNode<T> = this.root as TreeNode<T>;
    return traverse(rootNode);
  };

  // find the right most node to find the max value of a binary tree
  findMax = () => {
    const traverse = (node: TreeNode<T>): TreeNode<T> | T => {
      return !node.rightNode ? node.data : traverse(node.rightNode);
    };
    const rootNode: TreeNode<T> = this.root as TreeNode<T>;
    return traverse(rootNode);
  };
  preOrder = () => {
    let result: T[];
    // eslint-disable-next-line prefer-const
    result = [];
    const traverse = (node: TreeNode<T>) => {
      result.push(node.data);
      node.leftNode && traverse(node.leftNode);
      node.rightNode && traverse(node.rightNode);
    };
    const rootNode: TreeNode<T> | undefined = this.root as TreeNode<T>;
    traverse(rootNode);
    return result;
  };
  inOrder = () => {
    let result: T[];
    // eslint-disable-next-line prefer-const
    result = [];
    const traverse = (node: TreeNode<T>) => {
      node.leftNode && traverse(node.leftNode);
      result.push(node.data);
      node.rightNode && traverse(node.rightNode);
    };
    const rootNode: TreeNode<T> | undefined = this.root as TreeNode<T>;
    traverse(rootNode);
    return result;
  };
  postOrder = () => {
    let result: T[];
    // eslint-disable-next-line prefer-const
    result = [];
    const traverse = (node: TreeNode<T>) => {
      node.leftNode && traverse(node.leftNode);
      node.rightNode && traverse(node.rightNode);
      result.push(node.data);
    };
    const rootNode: TreeNode<T> | undefined = this.root as TreeNode<T>;
    traverse(rootNode);
    return result;
  };
}
