// Deliberately insecure test fixture for Qopanza's code review. Not a real app.
export default async function handler(req, res) {
  const target = req.query.url;
  const response = await fetch(target);
  res.send(await response.text());
}
