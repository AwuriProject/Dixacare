import "./Sticky.css"

export default function Sticky() {
  const day = new Date();
  const newDay = day.getFullYear()
  return (
    <div className="sticky-foot">
      <p className="stick-p"> &copy; DixaCare Health LTD {newDay}. All Rights Reserved  </p>
    </div>
  );
}
