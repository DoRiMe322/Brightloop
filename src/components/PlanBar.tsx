import { COURSES } from '../data';

export default function PlanBar({ plan, onClear }: { plan: number[]; onClear: () => void }) {
  if (!plan.length) return null;
  const hours = plan.reduce((sum, i) => sum + COURSES[i].h, 0);
  return (
    <div className="planbar" role="status">
      <span>
        Your plan: {plan.length} {plan.length === 1 ? 'course' : 'courses'}, {hours} h, about {Math.ceil(hours / 6)} weeks at 6 h a week
      </span>
      <button className="pill sm" type="button" onClick={onClear}>Clear</button>
    </div>
  );
}
