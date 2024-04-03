export default function ShowTasks({tasklist, setTasklist, clickexisted_task, setExistedTask}) {
  // const tasks = [
  //   { id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030" },
  //   { id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030" },
  //   { id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030" },
  // ]; // zur Probe erst der Kartenanzeige Gestaltung eines externen Kartenobjekt

  function handleDelete(id) {
    setTasklist(tasklist.filter(task => task.id !== id)); // filter; erstellt ein neues Array mit den Elementen, deren id mit dem geklickten id nicht überstimmten, bleiben, also die den von der bereitgestellten ArrowFunktion implementierten Test bestehen)
    setExistedTask({});
  }

  function handleEdit(id) {
    // ist unten direkt in der ArrowFunktino
     // editierte Liste, mit den Elementen, deren id mit dem geklickten id nicht überstimmten, bleiben nachdem klicken 

    const selectedTask = tasklist.find((innerTask) =>innerTask.id === id );
    console.log(selectedTask);          
    setExistedTask(selectedTask);

  }

  return ( // rerendert automatisch wenn die Liste/deren State sich verändert hat
    <section className="showTask">
      {/* header */}
      <div className="head">

        {/* counter - die Größe der übergebenen Taskliste */}
        <div className="anzahl">
          <span className="title">Open</span>
          <span className="lengthcount">{tasklist.length}</span>
        </div>

        {/* aufräumen Button, dabei eine onClick-ArrowFunktion*/}
        <button className="clear_butt" onClick={() => setTasklist([])}>Clear All</button>
      </div>

      {/* Karten anzeigen in einer Liste */}
      {/* für jeden task ein li Element/Karte führen */}
      <ul>
        {tasklist.map((task) => 
          <li key={task.id}>
            <p>
              <span className="task_name">{task.name}</span>
              <span className="task_time">{task.time}</span>
            </p>

            <i className="bi bi-pencil" onClick={() => handleEdit(task.id)}></i> {/*bei der Herstellung wird die ID der Task in den Funktionsaufruf für das beim ancklicken */}

            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i> {/*handle das klicken mit einer Arrowfunction (Aufruf einer Funktion)*/}
          </li>
        
        )}           
        

      </ul>
    </section>
  );
}
