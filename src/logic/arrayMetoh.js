export const deleteDuplicate = (arrays) => {
  const dataArr = new Set(arrays);
  let result = [...dataArr];
  return result;
};