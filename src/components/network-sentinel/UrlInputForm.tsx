'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FileUp, LoaderCircle, Zap } from 'lucide-react';

const formSchema = z.object({
  urls: z.string().min(1, 'Please enter at least one URL.'),
});

type UrlInputFormProps = {
  onCheck: (urls: string[]) => Promise<void>;
  isChecking: boolean;
};

export function UrlInputForm({ onCheck, isChecking }: UrlInputFormProps) {
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      urls: '',
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const urls = JSON.parse(text);
        if (Array.isArray(urls) && urls.every((u) => typeof u === 'string')) {
          form.setValue('urls', urls.join('\n'));
          toast({ title: "File loaded", description: `${urls.length} URLs have been loaded from the file.` });
        } else {
          toast({
            title: 'Invalid JSON format',
            description: 'File should contain an array of URL strings.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({ title: 'Failed to parse file', description: 'Please ensure it\'s a valid JSON file.', variant: 'destructive' });
      } finally {
        // Reset file input
        if(e.target) e.target.value = '';
      }
    };
    reader.readAsText(file);
  };

  function parseInput(raw: string): string[] {
    const text = raw.trim();
    if (!text) return [];
    // Try JSON array first
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.every((u) => typeof u === 'string')) {
        return parsed;
      }
    } catch (_) {
      // not JSON, fall through
    }
    // Fallback: split by newlines or commas
    return text
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  function onSubmit(data: z.infer<typeof formSchema>) {
    const urls = parseInput(data.urls);
    if (urls.length === 0) {
      toast({ title: 'No URLs detected', description: 'Please paste URLs separated by newline or commas, or a JSON array.', variant: 'destructive' });
      return;
    }
    onCheck(urls);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">Monitor URLs</CardTitle>
            <CardDescription>Paste URLs (one per line) or upload a JSON file.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="urls"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder={"https://google.com\nhttps://github.com\nexample.com\n[\"https://a.com\", \"https://b.com\"]\nhttps://a.com, https://b.com"} {...field} rows={8} className="font-code text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="secondary" onClick={() => fileInputRef.current?.click()}>
              <FileUp className="mr-2 h-4 w-4" />
              Upload JSON
            </Button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".json" />
            <Button type="submit" disabled={isChecking} className="bg-primary/90 hover:bg-primary text-primary-foreground">
              {isChecking ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Checking...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" /> Check Status
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
