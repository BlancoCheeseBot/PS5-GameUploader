export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, msg: "POST only" });
  }
  try {
    const { app = "ps5uploader", ver = "unknown", id = "anon", ts = Date.now() } = req.body || {};
    // TODO: hier eine DB/KV-Anbindung ergänzen, wenn du wirklich zählen willst
    return res.status(200).json({ ok: true, msg: "pong", app, ver, id, ts });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
