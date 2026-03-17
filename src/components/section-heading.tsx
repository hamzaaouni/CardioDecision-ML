export default function SectionHeading({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="section-header">
      {number} — {label}
    </div>
  );
}
