export default function handler(req, res) {
  // // Check if the request method is GET
  // if (req.method === 'GET') {
  //   // Send back the query parameters as JSON
  //   res.status(200).json(req.query);
  // } else {
  //   // If not a GET request, send a 405 Method Not Allowed response
  //   res.setHeader('Allow', ['GET']);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }

    res.status = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        message: req.query.message || 'Hello, World!',
        query: req.query,
        method: req.method,
        headers: req.headers
    }));
}