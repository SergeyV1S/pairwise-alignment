import { toast } from "sonner";

export const useCopyWithNotify = () => {
  const handleCopy = () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) return;

    const selectedText = selection.toString().replace(/\s/g, "");

    navigator.clipboard.writeText(selectedText).then(() => {
      toast.success("Текст успешно скопирован!", {
        duration: 1000,
        position: "top-center",
        richColors: true
      });
    });
  };

  return { handleCopy };
};
