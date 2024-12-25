export { GeneralInformation };

const GeneralInformation = ({ data, onSubmit }) => {
  return (
    <fieldset>
      <legend>General Information</legend>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstname">
          Firstname:
          <input type="text" name="firstname" id="firstname" defaultValue={data.firstname} />
        </label>
        <label htmlFor="lastname">
          Lastname:
          <input type="text" name="lastname" id="lastname" defaultValue={data.lastname} />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="tel" name="phone" id="phone" defaultValue={data.phone} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" defaultValue={data.email} />
        </label>
        <div className="button-holder">
          <button>Submit</button>
        </div>
      </form>
    </fieldset>
  );
};

export default GeneralInformation;