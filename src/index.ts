export interface ProformOptions {
  apiKey: string;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function handleProformSubmit(formId: string, options: ProformOptions): void {
  const form = document.getElementById(formId) as HTMLFormElement;

  if (!form) {
    throw new Error(`Form with ID "${formId}" not found`);
  }

  form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(`https://proforms.ng/f/${options.apiKey}`, {
        method: "POST",
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        options.onSuccess?.(data);
        if (data.redirect_url) {
          setTimeout(() => {
            window.location.href = data.redirect_url;
          }, (data.redirect_delay || 2) * 1000);
        }
      } else {
        options.onError?.(data.message || "Something went wrong.");
      }
    } catch (error) {
      options.onError?.("Network error occurred.");
    }
  });
}