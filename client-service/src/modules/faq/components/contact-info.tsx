import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type ContactInfoProps = {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
}
export function ContactInfo({ title, description, onContact, buttonText }: ContactInfoProps) {
    return (
        <div
            className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
        >
            <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">
                {title}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
                {description}
            </p>
            <Button size="sm" onClick={onContact}>
                {buttonText}
            </Button>
        </div>
    )
}
