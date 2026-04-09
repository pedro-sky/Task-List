function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((tasks) => (
        <li>{tasks.title}</li>
      ))}
    </ul>
  );
}

export default Tasks;
