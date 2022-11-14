import { createClient } from "@supabase/supabase-js";
const PROJECT_URL = "https://htibwyfcbyajsfwifntr.supabase.co";
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0aWJ3eWZjYnlhanNmd2lmbnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MTM3ODksImV4cCI6MTk4Mzk4OTc4OX0.pvsuR7HY6nsVVk-vjXwY0U4Ojv860fV0Z7BASwusOuk";
const supabase = createClient(PROJECT_URL, PROJECT_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("Video").select("*");
    },
  };
}
