
const jpDateConversion = dateStr => {
  const jpDateStr = dateStr.split('/').reverse().join('/');
  const jpDateStrArr = jpDateStr.split('/');

  const now = new Date(jpDateStrArr[0], jpDateStrArr[1] - 1, jpDateStrArr[2]);
  const prevDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

  return `${prevDate.getFullYear()}/${prevDate.getMonth() + 1}/${prevDate.getDate()}`;
}