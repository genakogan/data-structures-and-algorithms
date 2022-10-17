class TreeNode<T> {
    data: T;
    leftNode?: TreeNode<T>;
    rightNode?: TreeNode<T>;
  
    constructor(data: T) {
      this.data = data;
    }
  }

  export default TreeNode