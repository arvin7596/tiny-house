
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://bcpelbsjbxvgltbvkceo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcGVsYnNqYnh2Z2x0YnZrY2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDE1MDgsImV4cCI6MjA0MTU3NzUwOH0.a8HzSWIa8L7sgMkguiTS4PeHtixx0QMdhztAxnkAyUs"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase