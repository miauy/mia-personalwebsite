
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCarouselProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  title: string;
}

export function ProjectCarousel({ open, onOpenChange, images, title }: ProjectCarouselProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-6 w-6" strokeWidth={2} />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <DialogTitle className="text-xl font-semibold mb-2">
          {title} - Event Photos
        </DialogTitle>
        <DialogDescription className="mb-4">
          Here are photos from the event!
        </DialogDescription>

        <div className="py-4">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center">
                    <img 
                      src={image} 
                      alt={`${title} event photo ${index + 1}`} 
                      className="max-h-[60vh] rounded-lg object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
