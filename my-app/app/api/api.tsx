export async function getData() {
  const res: any = await fetch('http://jsonplaceholder.typicode.com/posts');
  if (!res.ok) return undefined;

  const data = await res.json();

  return data;
}
