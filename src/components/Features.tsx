import { Note } from './Tooltip';

export default function Features() {
  return (
    <section id="how" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>How you learn</h2>
        <div className="bento">
          <div className="card span2">
            <h3>Write code right in the browser</h3>
            <p style={{ marginTop: '.7rem', color: 'var(--muted)' }}>
              No setup. Each lesson opens an editor, runs your code and explains an error in plain words, without a wall of{' '}
              <Note text="A stack trace is the long list of calls Python or JavaScript prints when something breaks.">stack traces</Note>.
            </p>
          </div>
          <div className="card">
            <h3>Feedback in seconds</h3>
            <p style={{ marginTop: '.7rem', color: 'var(--muted)' }}>
              Automatic checks tell you what passed and what to fix next.<sup><a href="#fn1" id="r1">1</a></sup>
            </p>
          </div>
          <div className="card span3">
            <h3>A project every month</h3>
            <p style={{ marginTop: '.7rem', color: 'var(--muted)', maxWidth: '70ch' }}>
              A small API, a data report, a command-line tool. You finish each stretch of lessons with something you made yourself, plus a short review of what to improve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
