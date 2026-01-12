const { kv } = require("@vercel/kv");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, msg: "POST only" });
  }
  try {
    const { app = "ps5uploader", ver = "unknown", id = "anon", ts = Date.now() } = req.body || {};
    const key = `counter:${app}:${id}`;
    const count = await kv.incr(key);
    return res.status(200).json({ ok: true, msg: "pong", app, ver, id, ts, count });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: String(e) });
  }
};
