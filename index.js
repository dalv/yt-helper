const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

async function main() {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const match = html.match(/<title>(.*?)<\/title>/);
    const title = match ? match[1] : 'No title found';
    console.log(title);
  } catch (err) {
    console.error(err);
  }
}

main(); 