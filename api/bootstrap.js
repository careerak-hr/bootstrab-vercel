export default function handler(req, res) {
  res.status(200).json({
    apiBaseUrl: process.env.API_URL
  });
}
