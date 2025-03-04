/**
 * Generic Binary Tree Node class that can store data of any type
 */
export class BinaryTreeNode<T> {
  // Public fields for direct access to data and child nodes
  public data: T;
  public left: BinaryTreeNode<T> | null;
  public right: BinaryTreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
