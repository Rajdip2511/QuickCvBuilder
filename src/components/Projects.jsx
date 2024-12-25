import { useState } from 'react';

const Projects = ({ data, onSubmit, onUpdate, onDelete }) => {
  return (
    <>
      {data.map((entry, index) => {
        return (
          <fieldset key={entry.id}>
            <legend>Project {index + 1}: {entry.name}</legend>
            <form onSubmit={(event) => onUpdate(event, entry.id)}>
              <label>
                Project Name:
                <input type="text" name="name" defaultValue={entry.name} />
              </label>
              <label>
                Description:
                <textarea name="description" defaultValue={entry.description}></textarea>
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
        <legend>Add New Project</legend>
        <form onSubmit={onSubmit}>
          <label>
            Project Name:
            <input type="text" name="name" />
          </label>
          <label>
            Description:
            <textarea name="description"></textarea>
          </label>
          <div className="button-holder">
            <button type="submit">Submit</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export { Projects };  
