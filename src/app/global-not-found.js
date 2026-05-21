import "@/app/globals.css";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-center align-middle">
        <h1 className="flex justify-center align-middle">
          404 - Page Not Found
        </h1>

        <p className="flex justify-center align-middle">
          This page does not exist.
        </p>
      </body>
    </html>
  );
}
