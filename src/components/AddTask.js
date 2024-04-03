export default function AddTask({tasklist, setTasklist, clickexisted_task, setExistedTask}) { // destruct die übergebenen props aus app.js
  
    const handleSubmit = (e) => {
        // behandelt editieren und addieren zusammen abhänig von dem Zustand des gedrillten Task Objekt (wenns zugwiesen ist, dann wird das submit Klick den übergebenen existierten Task deren Namen überschreiben)
        // Beim addieren wird das normale ListenObjekt überschrieben (dazu breuchen wir keinen zusätzlichen Objekt als die Liste selbst)
        e.preventDefault();
        
        console.log(clickexisted_task.id);
    
        if(clickexisted_task.id){ // ein Objekt/task Überschritf sollte überschrieben werden hier anstatt zu addieren, den ein Objekt mit id jetzt in der gedrillten Objekte
        
            // Wichtig hier ist bei der Aktualisierung eines Tasks/Objektes innerhalb eines anderen Objektes/Liste, ist dass
            // wir die Liste überarbeiten sollen und nicht den Task selbst sonst können wir nicht in React garantieren, dass Änderungen in der Tasklist sichtbar sind 
            const selectedTask = tasklist.find((task) => task.id === clickexisted_task.id);
            const updatedTask = { ...clickexisted_task, name: e.target.task.value };
            const updatedList = tasklist.map((innerTask) => innerTask.id === clickexisted_task.id ? updatedTask : innerTask); // task bleibt gleich wenns nicht gleiche ID hat sonst wird den alten innerTask überschrieben 
            setExistedTask({}); // ist überarbeitet worden wieder dann zurücksetzen;
            setTasklist(updatedList); // erstelle eine neue Liste mit den aktuellen überschriebnen Task  
            e.target.task.value= "";git remote add origin https://github.com/IhrBenutzername/IhrRepository.git // wir brauchen das hier nicht damit das Feld geleert wird, das input Feld ist abhängig von dem Namen von geklickten Task, oder er wird auto auf leer gesetzt '' (s. zeile 43)
        }
        else {
            // clicked Task ist in ein empty state, dann erstelle ein neues Objekt und füge eine neue Kopie der Liste mit einem neuen Element

            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value, // task ist der name des inputs unten
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` // mit Klammern Übergabe, damit die Funktionen sofort aufgerufen werden
            };
            setTasklist([...tasklist, newTask]); // füge das neue Task am ende der alten List mit spread operator
            setExistedTask({}); // ist überarbeitet worden wieder dann zurücksetzen;
        }
        

    } // e ist das absenden Event - Wenn die onSubmit-Eigenschaft unten ausgelöst wird (d.h., wenn das Formular abgesendet wird), wird automatisch ein Ereignisobjekt erzeugt und an die handleSubmit-Funktion übergeben.

  
  
    return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text"   onChange={e => setExistedTask({ ...clickexisted_task, name: e.target.value })} 
 name="task" value={clickexisted_task.name || '' } autoComplete="off" placeholder="add task" maxLength="40"/> 
 {/* In diesem oberen Code wird clickexisted_task.name || '' verwendet, um den Wert des Input-Feldes festzulegen. Wenn clickexisted_task.name undefined ist, wird stattdessen der leere String ('') verwendet. Dies stellt sicher, dass das Input-Feld immer einen definierten Wert hat und somit immer "controlled" ist. */}
            <button type="submit">{clickexisted_task.id ? "Update" : "Add"}</button> 
        </form>
    </section>
    )
}
