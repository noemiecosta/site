import { createClient } from '@supabase/supabase-js';

// Remplace avec tes vraies informations Supabase
const supabaseUrl = "https://oqfwegfndevsohxbhevz.supabase.co";  // Remplace par ton URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZndlZ2ZuZGV2c29oeGJoZXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NzE2MzIsImV4cCI6MjA1NzM0NzYzMn0.tySaxSiCpzs7jI-9WjsYHtQMWkLiB-jy-z6FPlGolck";  // Remplace par ta clé API

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

