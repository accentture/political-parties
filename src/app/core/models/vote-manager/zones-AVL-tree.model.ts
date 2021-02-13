export class ZonesAVLTree {
    private left: ZonesAVLTree;
    private right: ZonesAVLTree;
    private zone: string;
    private depth: number;

    constructor(zone: string) {
        this.left = null;
        this.right = null;
        this.zone = zone;
        this.depth = 1;
    }
    private setDepthBasedOnChildren() {
        if (this.zone == null) {
            this.depth = 0;
        } else {
            this.depth = 1;
        }

        if (this.left != null) {
            this.depth = this.left.depth + 1;
        }
        if (this.right != null && this.depth <= this.right.depth) {
            this.depth = this.right.depth + 1;
        }
    }
    private rotateLL() {
        var zoneBefore = this.zone;
        var rightBefore = this.right;
        this.zone = this.left.zone;

        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.zone = zoneBefore;

        this.right.setDepthBasedOnChildren();
        this.setDepthBasedOnChildren();
    }
    private rotateRR() {
        // the right side is too long => rotate from the right (_not_ rightwards)
        var zoneBefore = this.zone;
        var leftBefore = this.left;
        this.zone = this.right.zone;

        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.zone = zoneBefore;

        this.left.setDepthBasedOnChildren();
        this.setDepthBasedOnChildren();
    }
    private balance() {
        var ldepth = this.left == null ? 0 : this.left.depth;
        var rdepth = this.right == null ? 0 : this.right.depth;

        if (ldepth > rdepth + 1) {
            // LR or LL rotation
            var lldepth = this.left.left == null ? 0 : this.left.left.depth;
            var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

            if (lldepth < lrdepth) {
                // LR rotation consists of a RR rotation of the left child
                this.left.rotateRR();
                // plus a LL rotation of this node, which happens anyway
            }
            this.rotateLL();
        } else if (ldepth + 1 < rdepth) {
            // RR or RL rorarion
            var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
            var rldepth = this.right.left == null ? 0 : this.right.left.depth;

            if (rldepth > rrdepth) {
                // RR rotation consists of a LL rotation of the right child
                this.right.rotateLL();
                // plus a RR rotation of this node, which happens anyway
            }
            this.rotateRR();
        }
    }
    insert(zone: string) {
        var childInserted = false;
        if (zone == this.zone) {
            return false; // should be all unique
        } else if (zone < this.zone) {
            if (this.left == null) {
                this.left = new ZonesAVLTree(zone);
                childInserted = true;
            } else {
                childInserted = this.left.insert(zone);
                if (childInserted == true) this.balance();
            }
        } else if (zone > this.zone) {
            if (this.right == null) {
                this.right = new ZonesAVLTree(zone);
                childInserted = true;
            } else {
                childInserted = this.right.insert(zone);

                if (childInserted == true) this.balance();
            }
        }
        if (childInserted == true) this.setDepthBasedOnChildren();
        return childInserted;
    }
    private remove(zone: string) {
        return deleteRecursively(this, zone);

        function deleteRecursively(root: ZonesAVLTree | null, zone: string) {
            if (!root) {
                return null;
            } else if (zone < root.zone) {
                root.left = deleteRecursively(root.left, zone);
            } else if (zone > root.zone) {
                root.right = deleteRecursively(root.right, zone);
            } else {
                //no child
                if (!root.left && !root.right) {
                    return null; // case 1
                } else if (!root.left) {
                    root = root.right;
                    return root;
                } else if (!root.right) {
                    root = root.left;
                    return root;
                } else {
                    var temp = this.findMin(root.right);
                    root.zone = temp.zone;
                    root.right = deleteRecursively(root.right, temp.zone);
                    return root;
                }
            }
            root.setDepthBasedOnChildren(); // ONLY DIFFERENCE from the BST one
            return root;
        }
    }
    private findMin(root: ZonesAVLTree | null) {
        while (root.left) root = root.left;
        return root;
    }
    traverseInOrder() {
        var zones = [];
        traverseInOrderHelper(this);

        function traverseInOrderHelper(node: ZonesAVLTree | null) {
            //caso base
            if (!node) return;

            traverseInOrderHelper(node.left);
            zones.push(node.zone);
            traverseInOrderHelper(node.right);
        }
        return zones;
    }
}