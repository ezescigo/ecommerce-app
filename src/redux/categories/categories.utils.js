export const ListToTree = (arr) => {
  let map = {}, node, res = [], i;
  for (i = 0; i < arr.length; i += 1) {
    map[arr[i]._id] = i;
    arr[i].children = [];
  };
  for (i = 0; i < arr.length; i += 1) {
    node = arr[i];
    if (node.idParent !== "0") {
      arr[map[node.idParent]].children.push(node);
    }
    else {
      res.push(node);
    };
  };
  console.log(res);
  return res;
};