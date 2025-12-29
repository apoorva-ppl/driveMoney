export const exportToCSV = (transactions) => {
  const headers = ["Amount", "Source", "Description", "Date"];

  const rows = transactions.map((t) => [
    t.amount,
    t.source,
    t.description || "",
    new Date(t.createdAt).toLocaleDateString(),
  ]);

  let csvContent =
    headers.join(",") +
    "\n" +
    rows.map((r) => r.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
};
