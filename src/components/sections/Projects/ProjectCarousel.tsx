
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { X } from "lucide-react";

interface ProjectCarouselProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  title: string;
}

export function ProjectCarousel({ open, onOpenChange, images, title }: ProjectCarouselProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogTitle className="flex justify-between items-center">
          <span>{title} - Event Photos</span>
        </DialogTitle>
        <DialogDescription>
          Browse through photos from the event.
        </DialogDescription>

        <div className="py-4">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img 
                      src={image} 
                      alt={`${title} event photo ${index + 1}`} 
                      className="w-full h-auto rounded-lg object-cover"
                      style={{ maxHeight: "60vh" }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
