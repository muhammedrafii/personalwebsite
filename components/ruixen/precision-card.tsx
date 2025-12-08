import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface PrecisionCardProps {
  leftTitle: string;
  leftSubtitle: string;
  leftDescription: string;
  tags: string[];
  leftButton: string;
  rightTitle: string;
  rightDescription: string;
  rightItems: string[];
  certificationText: string;
  rightButton: string;

  // Updated: accept string URL or StaticImageData
  leftImage?: string | StaticImageData;

}

export default function PrecisionCard({
  leftTitle,
  leftSubtitle,
  leftDescription,
  tags,
  leftButton,
  rightTitle,
  rightDescription,
  rightItems,
  certificationText,
  rightButton,
  leftImage,
}: PrecisionCardProps) {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-muted/30 border-4 rounded-3xl gap-6 items-center justify-center">

      {/* Left Card */}
      <Card className="w-full max-w-md bg-background shadow-lg rounded-2xl border-none">
        {/* Image section */}
        {leftImage && (
          <div className="relative w-full flex justify-center mt-4">
            <div className="w-20 h-20 rounded-full border-4 border-white dark:border-zinc-900 shadow-md overflow-hidden">
              <Image
                src={leftImage}
                alt="Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        )}

        <CardHeader className="text-center mt-2">
          <h3 className="text-muted-foreground text-sm font-medium">
            {leftSubtitle}
          </h3>
          <CardTitle className="text-2xl font-semibold">{leftTitle}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">{leftDescription}</p>

          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <Button className="mt-2 w-full" variant="default">
            {leftButton}
          </Button>
        </CardContent>
      </Card>

      {/* Right Card */}
      <Card className="w-full max-w-md bg-black text-white dark:bg-white dark:text-black shadow-lg rounded-2xl border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{rightTitle}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm text-gray-500">{rightDescription}</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {rightItems.map((item) => (
              <div
                key={item}
                className="border border-gray-700 py-3 rounded-lg text-sm bg-black text-white dark:bg-white dark:text-black"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={18} />
              <span className="text-sm font-medium">{certificationText}</span>
            </div>

            <Button variant="secondary">{rightButton}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
