import jsPDF from "jspdf";

export const exportToPDF = (transactions) => {
  const doc = new jsPDF();

  doc.text("Transaction History", 10, 10);

  transactions.forEach((t, i) => {
    doc.text(
      `${i + 1}. ₹${t.amount} - ${t.source}`,
      10,
      20 + i * 10
    );
  });

  doc.save("transactions.pdf");
};
