// Genady Kogan
class TreeNode<T> {
  data: T;
  leftNode?: TreeNode<T>|null;
  rightNode?: TreeNode<T>|null;

  constructor(data: T) {
    this.data = data;
    this.leftNode=null;
    this.rightNode=null;
  }
}

export default TreeNode;
