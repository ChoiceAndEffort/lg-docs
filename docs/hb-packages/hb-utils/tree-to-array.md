# treeToArray 树数组转扁平数组

```js
/**
 * @description: 树数组转扁平数组
 * @param {Array} tree
 * @return {*}
 */
function treeToArray(tree) {
  let res = [];
  for (const item of tree) {
    const { children, ...i } = item;
    if (children && children.length) {
      res = res.concat(treeToArray(children));
    }
    res.push(i);
  }
  return res;
}

```
