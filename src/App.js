import React from 'react';
import EventHandlingDemo from './EventHandlingDemo';
import RenderAndCommitDemo from './RenderAndCommitDemo';
import SnapshotDemo from './SnapshotDemo';
import Exercise19 from './Exercise19';

function App() {
  return (
    <div>
      <h2>Exercise 16</h2>
      <EventHandlingDemo />

      <hr />

      <h2>Exercise 17</h2>
      <RenderAndCommitDemo />

      <hr />

      <h2>Exercise 18</h2>
      <SnapshotDemo />

      <hr />

      <h2>Exercise 19</h2>
      <Exercise19 />
    </div>
  );
}

export default App;