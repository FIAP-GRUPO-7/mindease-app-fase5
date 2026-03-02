type Props = {
  children: React.ReactNode;
  centered?: boolean;
};

export function PageContainer({ children, centered = false }: Props) {
  return (
    <main className="page">
      <section className={`card ${centered ? "center" : ""}`}>
        {children}
      </section>
    </main>
  );
}