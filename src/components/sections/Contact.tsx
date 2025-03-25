import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// EmailJS configuration details
const EMAILJS_SERVICE_ID = "service_id"; // You'll need to replace this with your actual EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_id"; // You'll need to replace this with your actual EmailJS template ID
const EMAILJS_USER_ID = "public_key"; // You'll need to replace this with your actual EmailJS user ID

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
    setEmailJSInitialized(true);
  }, []);

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    if (!emailJSInitialized) {
      toast({
        title: "Error",
        description: "Email service not initialized yet. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_email: "miauy@miami.edu",
        message: data.message
      };
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      
      // Show error message
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex-col">
            <div
              className={cn(
                "w-[87] inline-block mb-4 px-3 py-2 rounded-full text-center",
                "bg-primary/5 text-primary text-sm font-medium",
                "dark:bg-primary/10"
              )}
            >
              Contact
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Let's connect!
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:miauy@miami.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    miauy@miami.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/miaauy/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/miaauy
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/miauy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-primary/10 self-start">
            <h3 className="font-display font-semibold text-xl mb-6 text-primary">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          className="w-full focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Your Message" 
                          className="w-full min-h-[120px] focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
