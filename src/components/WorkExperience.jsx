export { WorkExperience };

const WorkExperience = ({ data, onSubmit, onUpdate, onDelete }) => {
  return (
    <>
      {data.map((entry, index) => {
        return (
          <fieldset key={entry.id}>
            <legend>
              Work Experience {index + 1}: {entry.company}
            </legend>
            <form onSubmit={(event) => onUpdate(event, entry.id)}>
              <label>
                Company Name:
                <input
                  type="text"
                  name="company"
                  defaultValue={entry.company}
                />
              </label>
              <label>
                Position Title:
                <input
                  type="text"
                  name="position"
                  defaultValue={entry.position}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  defaultValue={entry.startDate}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  defaultValue={entry.endDate}
                />
              </label>
              <label>
                Responsibilities:
                <textarea
                  name="responsibilities"
                  defaultValue={entry.responsibilities}
                ></textarea>
              </label>
              <div className="button-holder">
                <button type="submit">Update</button>
                <button
                  type="button"
                  onClick={(event) => onDelete(event, entry.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </fieldset>
        );
      })}
      <fieldset>
        <legend>Add New Work Experience</legend>
        <form onSubmit={onSubmit}>
          <label>
            Company Name:
            <input type="text" name="company" />
          </label>
          <label>
            Position Title:
            <input type="text" name="position" />
          </label>
          <label>
            Start Date:
            <input type="date" name="startDate" />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" />
          </label>
          <label>
            Responsibilities:
            <textarea name="responsibilities"></textarea>
          </label>
          <div className="button-holder">
            <button type="submit">Submit</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default WorkExperience;