import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://orneitftolmkgbuymtan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybmVpdGZ0b2xta2didXltdGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NTI1ODcsImV4cCI6MjA3MzAyODU4N30.v96yHupbjsbpHNx1HSdY0JR62LB-WisNt4TK3Nfneh4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
