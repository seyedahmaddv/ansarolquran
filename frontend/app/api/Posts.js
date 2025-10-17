import { client } from '../../lib/sanity'

export default async function handler(req, res) {
  const posts = await client.fetch(`*[_type == "post"]`)
  res.status(200).json(posts)
}