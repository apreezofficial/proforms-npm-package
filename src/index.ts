export interface ProformResponse {
  status: "success" | "error";
  message?: string;
  redirect_url?: string;
  redirect_delay?: number;
  [key: string]: any;
}

export interface ProformOptions {
  apiKey: string;
  onSuccess?: (data: ProformResponse) => void;
  onError?: (error: string) => void;
  showLoader?: () => void;
  hideLoader?: () => void;
}

export function prostore(formId: string, options: ProformOptions): void {
  const form = document.getElementById(formId) as HTMLFormElement | null;

  if (!form) {
    console.error(`[ProStore] Form with ID "${formId}" not found.`);
    return;
  }

  form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(form);
    const endpoint = `https://app.proforms.ng/f/${options.apiKey}`;

    options.showLoader?.();

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData,
      });

      const data: ProformResponse = await res.json();

      if (data.status === "success") {
        options.onSuccess?.(data);

        if (data.redirect_url) {
          const delay = (data.redirect_delay ?? 2) * 1000;
          setTimeout(() => {
            window.location.href = data.redirect_url!;
          }, delay);
        }
      } else {
        options.onError?.(data.message ?? "Submission failed.");
      }
    } catch (err) {
      console.error("[ProStore] Network error:", err);
      options.onError?.("A network error occurred. Please try again.");
    } finally {
      options.hideLoader?.();
    }
  });
        }
