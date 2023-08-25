export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-50 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
