export default function reverseArray<T>(arr: T[]) {
  const newArray = arr.slice();

  return newArray.reverse();
}
