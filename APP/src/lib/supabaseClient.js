import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://dsgbmugehsbwjfnygxfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZ2JtdWdlaHNid2pmbnlneGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NzM2MTAsImV4cCI6MjAyMzI0OTYxMH0.4WwaXsJOQeB_OznC8kyCgZwkeiaI91HknU-YyMsBdu8"
);
