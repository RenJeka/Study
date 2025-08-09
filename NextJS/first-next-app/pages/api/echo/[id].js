export default function getById(req, res) {
    // Check if the request method is GET
    if (req.method === 'GET') {
        // Send back the query parameters as JSON
        res.status(200).json(req.query);
        res.setHeader('Content-Type', 'application/json');
        res.end(req.query.id ? JSON.stringify({ id: req.query.id }) : JSON.stringify({ message: 'No ID provided' }));
    } else {
        // If not a GET request, send a 405 Method Not Allowed response
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}