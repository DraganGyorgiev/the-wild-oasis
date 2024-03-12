import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://grbyqbtesyzoxxmtrjss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYnlxYnRlc3l6b3h4bXRyanNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MjczNTcsImV4cCI6MjAyNDEwMzM1N30.U7k58uDr1joW7wJk21d6zgkQ5zHFf8x3D1942o-VjBA";
const supabase = createClient(supabaseUrl, supabaseKey);
export const supabase2 = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: "s1",
  },
});

export default supabase;
