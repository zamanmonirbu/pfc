import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function generateDiscountCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'WELCOME';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function subscribeToNewsletter(email: string) {
  try {
    // First try to insert the subscriber
    // If the email exists, this will fail with a unique constraint violation
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email,
          subscribed_at: new Date().toISOString(),
          status: 'active',
          discount_code: generateDiscountCode()
        }
      ]);

    // If there was a unique constraint violation, the email already exists
    if (insertError?.code === '23505') {
      return { error: 'This email is already subscribed to our newsletter' };
    }

    // If there was any other error, throw it
    if (insertError) throw insertError;

    // If we got here, the subscription was successful
    return { 
      success: true, 
      message: 'Successfully subscribed! Check your email for your discount code.' 
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { 
      error: 'Failed to subscribe. Please try again later.' 
    };
  }
}