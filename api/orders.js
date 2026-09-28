// Deliberately insecure test fixture for Qopanza's code review. Not a real app.
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  const { userId } = req.query;
  const { data } = await supabase.from("orders").select("*").eq("user_id", userId);
  res.json(data);
}
