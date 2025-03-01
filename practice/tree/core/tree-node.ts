/**
 * Generic TreeNode class for a multi-way tree structure
 */
export class TreeNode<T> {
  data: T;
  children: TreeNode<T>[] = [];

  /**
   * Constructor to initialize a tree node with data
   * @param data The data to store in this node
   */
  constructor(data: T) {
    this.data = data;
  }

  /**
   * Add a child node to this node
   * @param child The child node to add
   */
  addChild(child: TreeNode<T>): void {
    this.children.push(child);
  }
}
