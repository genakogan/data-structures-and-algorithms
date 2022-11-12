// Genady Kogan
import BinaryTree from "./BinaryTree";
import TreeNode from "./TreeNode";


export class BinarySearchTree<T> extends BinaryTree<T> {
  postOrderTraversal(root: TreeNode<number> | undefined): any {
    throw new Error("Method not implemented.");
  }
  root: TreeNode<T> | undefined;
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    super();
    this.comparator = comparator;
  }

  insert(data: T): TreeNode<T> | undefined {
    if (!this.root) {
      this.root = new TreeNode(data);
      return this.root;
    }

    let current = this.root;

    while (true) {
      if (this.comparator(data, current.data) === 1) {
        if (current.rightNode) {
          current = current.rightNode;
        } else {
          current.rightNode = new TreeNode(data);
          return current.rightNode;
        }
      } else {
        if (current.leftNode) {
          current = current.leftNode;
        } else {
          current.leftNode = new TreeNode(data);
          return current.leftNode;
        }
      }
    }
  }

  search(data: T): TreeNode<T> | undefined {
    if (!this.root) return undefined;

    let current = this.root;

    while (this.comparator(data, current.data) !== 0) {
      if (this.comparator(data, current.data) === 1) {
        if (!current.rightNode) return;

        current = current.rightNode;
      } else {
        if (!current.leftNode) return;

        current = current.leftNode;
      }
    }

    return current;
  }

 /* inOrderTraversal = (node: TreeNode<T> | undefined) => {
    let result: (T | undefined)[];
    result = [];
    const traverse = (node: TreeNode<T> | undefined) => {
      if (node) {
        node?.leftNode && traverse(node?.leftNode);
        result.push(node?.data);
        node?.rightNode && traverse(node?.rightNode);
      }
    };
    //const rootNode: BinarySearchTreeNode<T> | undefined = this.root as BinarySearchTreeNode<T>
    traverse(node);
    return result;
  };

  /*preOrderTraversal = (node: TreeNode<T> | undefined) => {
    let result: (T | undefined)[];
    result = [];

    const traverse = (node: TreeNode<T> | undefined) => {
      if (node) {
        result.push(node?.data);
        node?.leftNode && traverse(node?.leftNode);
        node?.rightNode && traverse(node?.rightNode);
      }
    };
    traverse(node);
    return result;
  };

  postOrderTraversal = (node: TreeNode<T> | undefined) => {
    let result: (T | undefined)[];
    result = [];
    const traverse = (node: TreeNode<T> | undefined) => {
      if (node) {
        node?.leftNode && traverse(node?.leftNode);
        node?.rightNode && traverse(node?.rightNode);
        result.push(node?.data);
      }
    };
    traverse(node);
    return result;
  };*/
}

export function comparator(a: number, b: number) {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}